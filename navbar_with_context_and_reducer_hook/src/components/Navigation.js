import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  SearchBase,
  Switch,
  withStyles
} from '@material-ui/core'
import {  SearchIcon } from '@material-ui/icons/Search'
import styles from "../Styles/NavigationStyles";

function Navigation(props) {
  const {classes} = props;
  return (
    <div className = {classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>🇨🇳</span>
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            Simple Navigation Bar
          </Typography>
          <Switch />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default withStyles(styles)(Navigation);