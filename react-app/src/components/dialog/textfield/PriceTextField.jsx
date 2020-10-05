import ListItem from "@material-ui/core/ListItem";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#d50000',
    }
  }
})

const PriceTextField = ({ handlePrice }) => {
  return (
    <List>
      <ListItem>
        <ThemeProvider theme={theme}>
          <TextField
            onChange={handlePrice}
            autoFocus
            margin="dense"
            id="name"
            color={"secondary"}
            label="Faixa de preço"
            variant={"outlined"}
            defaultValue={"R$"}
          />
        </ThemeProvider>
      </ListItem>
    </List>
  )
};

export default PriceTextField;