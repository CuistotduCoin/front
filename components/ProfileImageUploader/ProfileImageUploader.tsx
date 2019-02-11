import Storage from "@aws-amplify/storage";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Dropzone from "react-dropzone";
import ProfileImage from "../../components/ProfileImage";
import { sanitizeFilename } from "../../shared/util";

const styles = theme => ({
  container: {
    margin: "0 auto",
    height: "130px",
    width: "130px",
    borderWidth: "1px",
    borderStyle: "dashed",
    borderRadius: "65px",
    borderColor: theme.palette.text.secondary,
    "&:hover": {
      cursor: "pointer"
    }
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
});

interface IProfileImageUploaderProps {
  classes: any;
  imageKey?: string;
  identityId: string;
  updateCurrentGourmetImage();
  openSnackbar(message: string, variant: string);
}

export class ProfileImageUploader extends React.Component<IProfileImageUploaderProps> {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  public onDrop(acceptedFiles, rejectedFiles) {
    const {
      identityId,
      updateCurrentGourmetImage,
      openSnackbar
    } = this.props;

    const file = acceptedFiles[0];
    Storage.put(`profile/${sanitizeFilename(file.name)}`, file, { identityId })
      .then(result => {
        console.log(result);
        openSnackbar(
          "Votre photo de profil a bien été changée. Elle devrait apparaître d'ici quelques secondes.",
          "success"
        );
        setTimeout(updateCurrentGourmetImage, 10000);
      })
      .catch(err => {
        console.log(err);
        openSnackbar(
          "Échec de la mise à jour de votre photo de profil",
          "error"
        );
      });
  }

  public render() {
    const { classes, identityId, imageKey } = this.props;
    return (
      <Dropzone
        accept="image/jpeg,image/png"
        onDrop={this.onDrop}
        className={classes.container}
      >
        <div className={classes.content}>
          <ProfileImage
            imageKey={imageKey}
            identityId={identityId}
            showAddImagePlaceholder
          />
        </div>
      </Dropzone>
    );
  }
}

export default withStyles(styles as any)(ProfileImageUploader);
