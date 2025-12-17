import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Box, Typography, Checkbox, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: 20,
    paddingTop: 16,
    borderTop: '2px solid #2d3a2d',
  },
  sectionTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#2d3a2d',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  checkboxLabel: {
    '& .MuiTypography-root': {
      fontSize: '0.9rem',
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

const ThematicCheckBox = ({ handleChange }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.sectionTitle}>
        Ambiance
      </Typography>
      <ThemeProvider theme={theme}>
        <FormControlLabel
          className={styles.checkboxLabel}
          control={
            <Checkbox
              onChange={handleChange}
              name="thematic"
              color="secondary"
            />
          }
          label="Themed Restaurant"
        />
      </ThemeProvider>
    </Box>
  );
};

export default ThematicCheckBox;
