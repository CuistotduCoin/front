import React from "react";
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";
import ProfileImageUploader from "./ProfileImageUploader";

interface IProfileImageUploaderContainerProps {
  imageKey?: string;
  identityId: string;
}

// tslint:disable-next-line
const ProfileImageUploaderContainer: React.SFC<IProfileImageUploaderContainerProps> = props => (
  <Subscribe to={[AppContainer]}>
    {(app: any) => (
      <ProfileImageUploader
        {...props}
        updateCurrentGourmetImage={app.updateCurrentGourmetImage}
        openSnackbar={app.openSnackbar}
      />
    )}
  </Subscribe>
);

export default ProfileImageUploaderContainer;
