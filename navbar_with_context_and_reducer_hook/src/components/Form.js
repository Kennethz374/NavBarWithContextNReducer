import React, {useContext} from "react"
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
import {LanguageContext} from "../contexts/LanguageContext"

const displayContext = {
  English: {
    signin:"Sign In",
    email: "Email",
    password: "Password",
    rememberme: "Remember Me"
  },
  Chinese: {
    signin: "登入",
    email: "郵件",
    password: "密碼",
    rememberme:"記住密碼"
  }
}

export default function Form() {
  const {language, selectLanguage} = useContext(LanguageContext)
  const classes = useStyles();
  const {email,signin,password,rememberme} = displayContext[language]
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography variant='h5'> {signin} </Typography>
        <Select onChange={selectLanguage} value={language}>
          <MenuItem value="Chinese">中文</MenuItem>
          <MenuItem value="English">English</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input id="email" name="email" autoFocus>
            </Input>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input id="password" name="password" autoFocus>
            </Input>
          </FormControl>

          <FormControlLabel 
            control={<Checkbox color="primary"/>}
            label = {rememberme}
          />
          <Button className={classes.submit} 
            variant="contained" 
            color="primary" 
            type="submit" 
            fullWidth
          >
            {signin}
          </Button>
        </form>
      </Paper>
    </main>
  )
}