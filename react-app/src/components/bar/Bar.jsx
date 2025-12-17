import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RiRestaurantLine } from "react-icons/ri";
import { Typography, Box } from "@material-ui/core";
import DialogForm from "../dialog/DialogForm";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#c5d4c0',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'center',
  },
  appBarContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1200,
    width: '100%',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  logoIcon: {
    fontSize: 28,
    color: '#2d3a2d',
  },
  logo: {
    fontFamily: 'Georgia, serif',
    fontWeight: 700,
    fontSize: '1.4rem',
    color: '#2d3a2d',
    letterSpacing: '1px',
  },
  tagline: {
    fontSize: '0.75rem',
    color: '#5a6b5a',
    marginLeft: 12,
    paddingLeft: 12,
    borderLeft: '1px solid #9ab094',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
});

const Bar = ({ alternText, onSearchResults }) => {
  const styles = useStyles();

  return (
    <div className={styles.appBar}>
      <div className={styles.appBarContent}>
        <Box className={styles.logoContainer}>
          <RiRestaurantLine className={styles.logoIcon} />
          <Typography className={styles.logo}>CBR Restaurant</Typography>
          <Typography className={styles.tagline}>AI Recommendation System</Typography>
        </Box>

        <div className={styles.rightSection}>
          <DialogForm alternText={alternText} onSearchResults={onSearchResults} hasToBeWhite={false} />
        </div>
      </div>
    </div>
  );
};

export default Bar;
