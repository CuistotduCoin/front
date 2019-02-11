import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import cx from "classnames";
import get from "lodash.get";
import Router from "next/router";
import React from "react";
import { compose } from "recompose";
import S3Image from "../../components/S3Image";
import { format } from "../../shared/date-utils";

const styles = (theme: Theme) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '120px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    justifyContent: 'space-between'
  },
  row: {
    display: 'flex'
  },
  chips: {
    margin: '5px 15px',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  avatar: {
    backgroundColor: 'transparent'
  },
  workshopImage: {
    width: '180px',
    height: '120px'
  }
});

interface IWorkshopListItemProps {
  classes: any;
  workshop: any;
  authorIdentityId: string;
}

// tslint:disable-next-line
const WorkshopListItem: React.SFC<IWorkshopListItemProps> = ({ classes, workshop, authorIdentityId }) => (
  <Card
    className={classes.card}
    onClick={() => Router.push(`workshops/${workshop.id}`)}
  >
    <div className={classes.column}>
      <CardContent className={cx(classes.column, classes.content)}>
        <div className={classes.header}>
          <Typography variant="h6">{workshop.name}</Typography>
        </div>
        {workshop.date && <Typography variant="subtitle1">{format(workshop.date, "[Le] DD MMMM [à] HH[h]mm")}</Typography>}
        <Typography variant="caption">{workshop.kitchen.name}</Typography>
      </CardContent>
    </div>
    <div className={classes.row}>
      <div className={cx(classes.column, classes.chips)}>
        <Chip
          label="Atelier collectif"
          color="secondary"
          avatar={(
            <Avatar className={classes.avatar}>
              <PeopleOutlineIcon />
            </Avatar>
          )}
        />
        <Chip label={`${workshop.price} €`} variant="outlined" />
        <Chip
          label={`${workshop.duration} min.`}
          avatar={(
            <Avatar className={classes.avatar}>
              <HourglassFullIcon />
            </Avatar>
          )}
        />
      </div>
      <S3Image
        component={CardMedia}
        urlProp="image"
        title={`Photo de l'atelier ${workshop.name}`}
        path={`workshops/${workshop.id}`}
        imageKey={get(workshop, 'images[0].key')}
        identityId={authorIdentityId}
        className={classes.workshopImage}
      />
    </div>
  </Card>
);

const enhance = compose(
  withStyles(styles as any),
);

export default enhance(WorkshopListItem);
