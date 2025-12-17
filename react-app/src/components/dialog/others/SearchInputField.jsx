import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Box, Typography, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  container: {
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Georgia, serif',
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#2d3a2d',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  autocomplete: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
      backgroundColor: '#f5f2e8',
      '& fieldset': {
        borderColor: '#2d3a2d',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: '#2d3a2d',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2d3a2d',
        borderWidth: 2,
      },
    },
    '& .MuiInputLabel-root': {
      color: '#5a6b5a',
    },
  },
});

const theme = createTheme({
  palette: {
    secondary: {
      main: '#2d3a2d',
    },
  },
});

const SearchInputField = ({ searchInputSave, options }) => {
  const styles = useStyles();

  const handleChangeSearchInput = (event, newValue) => {
    if (event) {
      event.preventDefault();
    }
    searchInputSave(newValue);
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.label}>
        Cuisine Type
      </Typography>
      <ThemeProvider theme={theme}>
        <Autocomplete
          id="culinaryTypeOptions"
          freeSolo
          onChange={handleChangeSearchInput}
          options={options}
          className={styles.autocomplete}
          renderInput={(params) => (
            <TextField
              {...params}
              color="secondary"
              placeholder="Select or type a cuisine"
              margin="dense"
              variant="outlined"
              size="small"
            />
          )}
        />
      </ThemeProvider>
    </Box>
  );
};

export default SearchInputField;
