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
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography variant='h5'> Sign in </Typography>
        <Select>
          <MenuItem>Chinese</MenuItem>
          <MenuItem>English</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" autoFocus>
            </Input>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" name="password" autoFocus>
            </Input>
          </FormControl>

          <FormControlLabel 
            control={<Checkbox color="primary"/>}
            label = "Remember Me"
          />
          <Button className={classes.submit} 
            variant="contained" 
            color="primary" 
            type="submit" 
            fullWidth
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  )
}