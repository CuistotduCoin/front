import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import cx from 'classnames';
import React from 'react';
import { compose } from 'recompose';

const styles = (theme: Theme) => ({
  avatar: {
    background: '#757575',
    zIndex: 999,
    transform: 'scale(1)',
    transition: 'all 200ms ease-in'
  },
  clickable: {
    cursor: 'pointer'
  },
  validAvatar: {
    backgroundColor: theme.palette.primary.dark,
    transition: 'all 300ms ease-in',
    transform: 'scale(1.5)',
    transitionDelay: '0.4s'
  },
  line: {
    height: '4px',
    flex: '1',
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 50%, #757575 50%)`,
    backgroundSize: '200% 100%',
    backgroundPosition: 'right bottom',
    transition: 'all 0.4s ease-out'
  },
  validLine: {
    backgroundColor: theme.palette.primary.dark,
    backgroundPosition: 'left bottom'
  },
});

interface IProgressBarProps {
  classes: any;
  icons: Array<{icon: any}>;
  page: number;
  className?: string;
  enableProgress?: boolean;
  onIconClick?(page: number);
}

// tslint:disable-next-line
const ProgressBar: React.SFC<IProgressBarProps> = ({ classes, icons, page, className, onIconClick, enableProgress }) => (
  <Grid container className={className}>
    <Grid item md={4} />
    <Grid md={4} item container justify="space-between" alignItems="center">
      {icons.map((icon, i) => {
        const clickable = onIconClick && (i <= page || enableProgress);
        return (
          <>
            <Avatar
              className={cx(classes.avatar, {
                [classes.validAvatar]: i <= page,
                [classes.clickable]: clickable,
              })}
              key={`ProgressBarIcon_${i}`}
              onClick={() => {
                // @ts-ignore
                if (clickable) onIconClick(i);
              }}
            >
              {React.createElement(icon.icon)}
            </Avatar>
            {i < icons.length - 1 && <div className={cx(classes.line, { [classes.validLine]: i < page })} />}
          </>
        );
      })}
    </Grid>
  </Grid>
);

const enhance = compose(
  withStyles(styles as any),
);

export default enhance(ProgressBar);