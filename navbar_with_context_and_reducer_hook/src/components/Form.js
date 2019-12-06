import React from "react"
import {
  Checkbox,
  Avatar,
  Button, 
  CssBaseline, 
  FormControl, 
  FormControlLabel,
  Input, 
  InputLabel, 
  Paper, 
  Typography, 
  MenuItem, 
  Select
} from "@material-ui/core"
import LockOutlineIcon from "@material-ui/icons/LockOutlined"
import useStyles from "../Styles/FormStyles"

export default function Form() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Paper>
        <h1>Form</h1>
      </Paper>
    </main>
  )
}