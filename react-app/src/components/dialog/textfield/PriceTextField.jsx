import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Box, Typography, TextField, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: 16,
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
  textField: {
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

const PriceTextField = ({ handlePrice }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.label}>
        Price Range
      </Typography>
      <ThemeProvider theme={theme}>
        <TextField
          onChange={handlePrice}
          margin="dense"
          id="price"
          color="secondary"
          placeholder="Enter amount"
          variant="outlined"
          size="small"
          fullWidth
          className={styles.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </ThemeProvider>
    </Box>
  );
};

export default PriceTextField;
