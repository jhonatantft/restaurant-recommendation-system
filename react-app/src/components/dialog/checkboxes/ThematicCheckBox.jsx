import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { ThemeProvider } from "@material-ui/styles";
import List from "@material-ui/core/List";
import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(({
  font: {
    fontFamily: 'Arial',
    color: '#7e7e7e',
  },
  margin: {
    marginBottom: '-3px'
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#d50000',
    }
  }
})

const ThematicCheckBox = ({ handleChange }) => {
  let styles = useStyles();
  return (
    <List>
      <Divider />
      <ListItem>
        <h3 className={clsx(styles.font, styles.margin)}>Ambiente</h3>
      </ListItem>
      <ListItem>
        <FormControl>
          <FormGroup>
            <ThemeProvider theme={theme}>
              <FormControlLabel
                control={<Checkbox onChange={handleChange}
                  name="thematic" />}
                label="Temático"
              />
            </ThemeProvider>
          </FormGroup>
        </FormControl>
      </ListItem>
    </List>
  )
};

export default ThematicCheckBox;