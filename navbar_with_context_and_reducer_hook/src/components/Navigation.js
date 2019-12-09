import React, {useContext} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton,
  InputBase
} from '@material-ui/core/'
import SearchIcon from "@material-ui/icons/Search"
import useStyles from "../Styles/NavigationStyles"
import {ThemeContext} from "../contexts/ThemeContext"

function Navigation(props) {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode? "default":"primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton}>🇨🇳</IconButton>
          <Typography className={classes.title}>Simple Nav</Typography>
          <Switch />
          <div className={classes.grow}/>
          <div className={classes.search}>
            <div>
              <SearchIcon className={classes.searchIcon}/>
            </div>
            <InputBase 
              placeholder="Search..." 
              classes={{
                root: classes.inputRoot, //for root style
                input: classes.inputInput // for style of whatever input there
            }}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation;