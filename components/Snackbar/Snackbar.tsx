import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { Theme, withStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import cx from "classnames";
import React from "react";

const styles = (theme: Theme) => ({
  snackbar: {
    zIndex: 20000,
  },
  content: {
    "& div:first-child": {
      width: "90%"
    },
    "& div:last-child": {
      position: "absolute",
      right: "15px"
    }
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  success: {
    backgroundColor: green[600]
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    extend: "icon",
    marginRight: theme.spacing.unit,
    opacity: 0.9
  },
  message: {
    alignItems: "center",
    display: "flex"
  }
});

enum Variant {
  success = "success",
  warning = "warning",
  error = "error",
  info = "info"
}

interface ISnackbarProps {
  classes: any;
  message: string;
  onClose: any;
  open: boolean;
  variant: Variant;
}

const variantIcon = {
  error: ErrorIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon
};

export class SnackbarWrapper extends React.Component<ISnackbarProps, {}> {
  public static defaultProps: Partial<ISnackbarProps> = {
    open: false,
    variant: Variant.info
  };

  public render() {
    const { classes, open, message, onClose, variant } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "top"
        }}
        open={open}
        autoHideDuration={5000}
        onClose={onClose}
        className={classes.snackbar}
      >
        <SnackbarContent
          className={cx(classes[variant], classes.content)}
          message={
            <span className={classes.message}>
              {React.createElement(variantIcon[variant], {
                className: classes.iconVariant
              })}
              {message}
            </span>
          }
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={onClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          }
        />
      </Snackbar>
    );
  }
}

export default withStyles(styles as any)(SnackbarWrapper as any) as any;
