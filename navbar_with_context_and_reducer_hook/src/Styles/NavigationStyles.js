import   {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width:"100%",
    marginBottom: 0
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  grow: {
    flexGrow: 1, //let item grows 1 times wider than the rest div to space out search bar
  },
  title: {
    display: "none",
    // if size is sm, it won't display, otherwise display block
      [theme.breakpoints.up("sm")]:{
        display: "block"
      }
  },
}));

export default useStyles;