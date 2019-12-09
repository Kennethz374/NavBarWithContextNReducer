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
import {LanguageContext} from "../contexts/LanguageContext"

const displayContext = {
  English: {
    search: "Search...",
    apptitle: "Simple Nav",
    flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿"
  },
  Chinese:{
    search:"搜尋...",
    apptitle:"小導航",
    flag:"🇨🇳"
  }
}

function Navigation(props) {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext)
  const {language} = useContext(LanguageContext)
  const classes = useStyles();
  const {search, apptitle, flag} = displayContext[language]
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode? "default":"primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton}>{flag}</IconButton>
          <Typography className={classes.title}>{apptitle}</Typography>
          <Switch onChange={toggleTheme}/>
          <div className={classes.grow}/>
          <div className={classes.search}>
            <div>
              <SearchIcon className={classes.searchIcon}/>
            </div>
            <InputBase 
              placeholder={search}
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