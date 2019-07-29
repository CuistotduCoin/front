import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import PersonIcon from "mdi-material-ui/Account";
import LogoutIcon from "mdi-material-ui/Logout";
import MenuIcon from "mdi-material-ui/Menu";
import Router from "next/router";
import React from "react";
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";

interface IAccountDropdownState {
  open: boolean;
  anchorEl: any;
}

class AccountDropdown extends React.Component<{}, IAccountDropdownState> {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null, open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
  }

  public handleToggle() {
    this.setState(state => ({ open: !state.open }));
  }

  public handleClose(event) {
    if (this.state.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  }

  public goToAccount(event) {
    this.handleClose(event);
    Router.push("/account");
  }

  public render() {
    const { open, anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={open ? "menu-list-grow" : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <MenuIcon />
        </Button>
        <Subscribe to={[AppContainer]}>
          {(app: any) => (
            <Popper
              open={open}
              anchorEl={anchorEl}
              transition
              disablePortal
              placement="bottom-end"
            >
              {() => (
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.goToAccount}>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Mon compte" />
                      </MenuItem>
                      <MenuItem onClick={app.logOut}>
                        <ListItemIcon>
                          <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Se déconnecter" />
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              )}
            </Popper>
          )}
        </Subscribe>
      </div>
    );
  }
}

export default AccountDropdown;
