import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  ratingHint: {
    fontSize: '0.8rem',
    color: '#5a6b5a',
  },
});

const RatingField = ({ handleRatingChange }) => {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleRatingChange({ target: { value: newValue } });
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.label}>
        Minimum Rating
      </Typography>
      <Box className={styles.ratingContainer}>
        <Rating
          name="rating"
          value={value}
          precision={1}
          size="large"
          onChange={handleChange}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          style={{ color: '#e8d44d' }}
        />
        <Typography className={styles.ratingHint}>
          {value > 0 ? `${value} stars & up` : 'Any rating'}
        </Typography>
      </Box>
    </Box>
  );
};

export default RatingField;
