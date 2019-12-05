import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton
} from '@material-ui/core/'
import SearchIcon from "@material-ui/icons/Search"
import useStyles from "../Styles/NavigationStyles"

function Navigation() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton}>🇨🇳</IconButton>
          <Typography>Simple Nav</Typography>
          <Switch />
          <div />
          <div>
            <div>
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation;