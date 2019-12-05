import   {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, //let item grows 1 times wider than the rest
  },
  menuButton: {
    marginRight: theme.spacing(4),
  }
  // title: {
  //   flexGrow: 1,
  // },
}));

export default useStyles;