import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import DialogForm from "../dialog/DialogForm";
import { AiOutlineRobot } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";
import { FiStar } from "react-icons/fi";

const useStyles = makeStyles({
  container: {
    backgroundColor: '#1a2634',
    borderRadius: 24,
    padding: '48px',
    marginTop: 40,
  },
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  stars: {
    display: 'flex',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 16,
  },
  starIcon: {
    color: '#e8d44d',
    fontSize: 20,
  },
  title: {
    fontFamily: 'Georgia, serif',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: 600,
    margin: '0 auto',
    lineHeight: 1.6,
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    marginTop: 32,
  },
  card: {
    backgroundColor: '#f5f2e8',
    borderRadius: 16,
    padding: 24,
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    fontSize: 28,
  },
  cardIconAI: {
    backgroundColor: '#e8d44d',
    color: '#2d3a2d',
  },
  cardIconTarget: {
    backgroundColor: '#c5d4c0',
    color: '#2d3a2d',
  },
  cardIconMenu: {
    backgroundColor: '#f0c14b',
    color: '#2d3a2d',
  },
  cardTitle: {
    fontFamily: 'Georgia, serif',
    fontWeight: 700,
    fontSize: '1rem',
    color: '#2d3a2d',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  cardDescription: {
    fontSize: '0.85rem',
    color: '#5a6b5a',
    lineHeight: 1.5,
  },
  ctaSection: {
    marginTop: 40,
    textAlign: 'center',
  },
  ctaText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    marginBottom: 20,
  },
});

const AboutPage = ({ alternText, setHiddenAbout }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Box className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={styles.starIcon} fill="#e8d44d" />
          ))}
        </Box>
        <Typography className={styles.title}>
          5-Star Happy Reviews
        </Typography>
        <Typography className={styles.subtitle}>
          This platform uses <strong>Case-Based Reasoning (CBR)</strong>, an AI technique that
          recommends restaurants by finding the closest matches to your preferences from our
          database of dining experiences.
        </Typography>
      </Box>

      <Box className={styles.cardsContainer}>
        <Box className={styles.card}>
          <Box className={`${styles.cardIcon} ${styles.cardIconAI}`}>
            <AiOutlineRobot />
          </Box>
          <Typography className={styles.cardTitle}>
            AI-Powered
          </Typography>
          <Typography className={styles.cardDescription}>
            Smart algorithms analyze your preferences to find the perfect dining match
          </Typography>
        </Box>

        <Box className={styles.card}>
          <Box className={`${styles.cardIcon} ${styles.cardIconTarget}`}>
            <BiTargetLock />
          </Box>
          <Typography className={styles.cardTitle}>
            Precise Matching
          </Typography>
          <Typography className={styles.cardDescription}>
            Similarity scoring ensures highly relevant restaurant recommendations
          </Typography>
        </Box>

        <Box className={styles.card}>
          <Box className={`${styles.cardIcon} ${styles.cardIconMenu}`}>
            <MdRestaurantMenu />
          </Box>
          <Typography className={styles.cardTitle}>
            Dietary Options
          </Typography>
          <Typography className={styles.cardDescription}>
            Filter by dietary restrictions and cuisine preferences easily
          </Typography>
        </Box>
      </Box>

      <Box className={styles.ctaSection}>
        <Typography className={styles.ctaText}>
          Ready to find your perfect restaurant? Click the button below to get started.
        </Typography>
        <DialogForm setHiddenAbout={setHiddenAbout} alternText={alternText} hasToBeWhite={true} />
      </Box>
    </Box>
  );
};

export default AboutPage;
