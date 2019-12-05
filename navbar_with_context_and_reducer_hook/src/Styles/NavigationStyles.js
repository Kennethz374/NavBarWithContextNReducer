import   {makeStyles} from "@material-ui/core"
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(theme => ({
  root: {
    width:"100%",
    marginBottom: 0
  },
  menuButton: {
    backgroundColor: "green",
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
  search:{
    position:"relative",
    borderRadius:theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    //if sm size width is 100% otherwise auto
    [theme.breakpoints.up("sm")]:{
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  }
}));

export default useStyles;