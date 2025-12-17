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
      fontSize: '0.85rem',
      color: '#5a6b5a',
    },
    marginRight: 0,
  },
  checkboxGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 4,
  },
});

const theme = createTheme({
  palette: {
    secondary: {
      main: '#2d3a2d',
    },
  },
});

const RestrictionAlimentCheckBox = ({ handleChange }) => {
  const styles = useStyles();

  const restrictions = [
    { name: 'sugarFree', label: 'Sugar-Free' },
    { name: 'glutenFree', label: 'Gluten-Free' },
    { name: 'lactoseFree', label: 'Lactose-Free' },
    { name: 'soyFree', label: 'Soy-Free' },
  ];

  return (
    <Box className={styles.container}>
      <Typography className={styles.sectionTitle}>
        Dietary Restrictions
      </Typography>
      <ThemeProvider theme={theme}>
        <Box className={styles.checkboxGrid}>
          {restrictions.map((restriction) => (
            <FormControlLabel
              key={restriction.name}
              className={styles.checkboxLabel}
              control={
                <Checkbox
                  onChange={handleChange}
                  name={restriction.name}
                  color="secondary"
                  size="small"
                />
              }
              label={restriction.label}
            />
          ))}
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default RestrictionAlimentCheckBox;
