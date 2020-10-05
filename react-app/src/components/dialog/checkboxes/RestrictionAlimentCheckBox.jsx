import { makeStyles } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import clsx from "clsx";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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

const RestrictionAlimentCheckBox = ({ handleChange }) => {
  let styles = useStyles();
  return (
    <List>
      <Divider />

      <ListItem>
        <h3 className={clsx(styles.font, styles.margin)}>Restrições Alimentares</h3>
      </ListItem>

      <ListItem>
        <ThemeProvider theme={theme}>
          <FormControlLabel
            control={<Checkbox onChange={handleChange}
              name="sugarFree" />}
            label="Açúcar"
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange}
              name="glutenFree" />}
            label="Glúten"
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange}
              name="lactoseFree" />}
            label="Lactose"
          />

          <FormControlLabel
            control={<Checkbox onChange={handleChange} name="soyFree" />}
            label="Soja"
          />
        </ThemeProvider>
      </ListItem>
    </List>
  )
};

export default RestrictionAlimentCheckBox;