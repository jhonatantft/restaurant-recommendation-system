import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import clsx from "clsx";
import {ThemeProvider} from "@material-ui/styles";
import SearchInput from "../../../inputs/searchinput/SearchInput";
import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";

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

const SearchInputField = ({searchInputSave,options}) =>{
    let styles = useStyles();
  return(
      <List>
          <ListItem>
              <h3 className={clsx(styles.font, styles.margin)}>Informações sobre o restaurante</h3>
          </ListItem>
          <ListItem>
              <ThemeProvider theme={theme}>
                  <SearchInput searchInputSave={searchInputSave} options={options}/>
              </ThemeProvider>
          </ListItem>
      </List>
  )
};
export default SearchInputField;