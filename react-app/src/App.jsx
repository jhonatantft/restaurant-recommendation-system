import React from 'react';
import Bar from "./components/bar/Bar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./components/card/Card";
import { Typography } from "@material-ui/core";
import { AiOutlineRobot } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: '#c5d4c0',
  },
  mainContent: {
    backgroundColor: '#f5f2e8',
    margin: '0 auto 24px auto',
    borderRadius: 24,
    minHeight: 'calc(100vh - 100px)',
    padding: '0 0 40px 0',
    border: '2px solid #2d3a2d',
    maxWidth: 1200,
    width: 'calc(100% - 48px)',
  },
  // Hero Section - Light with Big Text
  heroSection: {
    backgroundColor: '#f5f2e8',
    borderRadius: '24px 24px 0 0',
    padding: '60px 48px',
  },
  heroTextContainer: {
    textAlign: 'center',
  },
  heroLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 8,
  },
  heroTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '3rem',
    fontWeight: 700,
    color: '#1a2634',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    lineHeight: 1.2,
  },
  heroImageBox: {
    width: 70,
    height: 70,
    borderRadius: 12,
    border: '2px solid #2d3a2d',
    backgroundColor: '#e8d4f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
  },
  heroImageBox2: {
    backgroundColor: '#f2ecd4',
  },
  heroImageBox3: {
    backgroundColor: '#d4f2e8',
  },
  heroSubtitle: {
    fontSize: '1rem',
    color: '#5a6b5a',
    maxWidth: 600,
    margin: '24px auto 0',
    lineHeight: 1.7,
  },
  featureCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    marginTop: 40,
  },
  featureCard: {
    backgroundColor: '#f5f2e8',
    borderRadius: 16,
    padding: '32px 24px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    border: '2px solid #2d3a2d',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  featureIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    fontSize: 28,
    border: '2px solid #2d3a2d',
  },
  featureIconAI: {
    backgroundColor: '#c5d4c0',
    color: '#2d3a2d',
  },
  featureIconTarget: {
    backgroundColor: '#d4e0d1',
    color: '#2d3a2d',
  },
  featureIconMenu: {
    backgroundColor: '#e8d44d',
    color: '#2d3a2d',
  },
  featureTitle: {
    fontFamily: 'Georgia, serif',
    fontWeight: 700,
    fontSize: '1rem',
    color: '#2d3a2d',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  featureDescription: {
    fontSize: '0.9rem',
    color: '#5a6b5a',
    lineHeight: 1.6,
  },
  // Results Section
  resultsSection: {
    padding: '40px 48px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#2d3a2d',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  navArrows: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  clearButton: {
    padding: '8px 16px',
    borderRadius: 20,
    fontSize: '0.8rem',
    fontWeight: 600,
    border: '2px solid #2d3a2d',
    backgroundColor: '#e8d44d',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: '#2d3a2d',
    fontFamily: 'inherit',
    marginRight: 8,
    '&:hover': {
      backgroundColor: '#d4c043',
    },
  },
  navArrow: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '2px solid #2d3a2d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: '#f5f2e8',
    fontFamily: 'inherit',
    fontSize: 16,
    color: '#2d3a2d',
    '&:hover': {
      backgroundColor: '#2d3a2d',
      color: '#fff',
    },
  },
  cuisineTabs: {
    display: 'flex',
    gap: 8,
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  cuisineTab: {
    padding: '8px 16px',
    borderRadius: 20,
    fontSize: '0.8rem',
    fontWeight: 500,
    border: '2px solid #2d3a2d',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: '#2d3a2d',
    fontFamily: 'inherit',
    '&:hover': {
      backgroundColor: 'rgba(45, 58, 45, 0.1)',
    },
  },
  cuisineTabActive: {
    backgroundColor: '#2d3a2d',
    color: '#fff',
    borderColor: '#2d3a2d',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
});

const App = ({ restaurants }) => {
  const styles = useStyles();
  const [alternText, setAlternText] = React.useState("Restaurant Menu");
  const [activeTab, setActiveTab] = React.useState('All');
  const [searchResults, setSearchResults] = React.useState(null);

  const cuisineTypes = ['All', ...new Set(restaurants.map(r => r.cuisineType))];

  const baseRestaurants = searchResults || restaurants;
  const filteredRestaurants = activeTab === 'All'
    ? baseRestaurants
    : baseRestaurants.filter(r => r.cuisineType === activeTab);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setActiveTab('All');
  };

  const handleClearSearch = () => {
    setSearchResults(null);
    setAlternText("Restaurant Menu");
  };

  return (
    <div className={styles.root}>
      <Bar alternText={setAlternText} onSearchResults={handleSearchResults} />

      <div className={styles.mainContent}>
        {/* Hero Section - AI Algorithm Info */}
        <div className={styles.heroSection}>
          <div className={styles.heroTextContainer}>
            <div className={styles.heroLine}>
              <Typography component="span" className={styles.heroTitle}>
                Smart AI
              </Typography>
              <div className={styles.heroImageBox}>
                <AiOutlineRobot />
              </div>
              <div className={`${styles.heroImageBox} ${styles.heroImageBox2}`}>
                <BiTargetLock />
              </div>
              <div className={`${styles.heroImageBox} ${styles.heroImageBox3}`}>
                <MdRestaurantMenu />
              </div>
              <Typography component="span" className={styles.heroTitle}>
                Dining
              </Typography>
            </div>
            <Typography className={styles.heroTitle}>
              & Perfect Match
            </Typography>
            <Typography className={styles.heroSubtitle}>
              This platform uses <strong>Case-Based Reasoning (CBR)</strong>, an AI technique that
              recommends restaurants by finding the closest matches to your preferences from
              our database of dining experiences.
            </Typography>
          </div>

          <div className={styles.featureCards}>
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.featureIconAI}`}>
                <AiOutlineRobot />
              </div>
              <Typography className={styles.featureTitle}>
                AI-Powered
              </Typography>
              <Typography className={styles.featureDescription}>
                Smart algorithms analyze your preferences to find the perfect dining match
              </Typography>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.featureIconTarget}`}>
                <BiTargetLock />
              </div>
              <Typography className={styles.featureTitle}>
                Precise Matching
              </Typography>
              <Typography className={styles.featureDescription}>
                Similarity scoring ensures highly relevant restaurant recommendations
              </Typography>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.featureIconMenu}`}>
                <MdRestaurantMenu />
              </div>
              <Typography className={styles.featureTitle}>
                Dietary Options
              </Typography>
              <Typography className={styles.featureDescription}>
                Filter by dietary restrictions and cuisine preferences easily
              </Typography>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className={styles.resultsSection}>
          <div className={styles.sectionHeader}>
            <Typography className={styles.sectionTitle}>{alternText}</Typography>
            <div className={styles.navArrows}>
              {searchResults && (
                <button className={styles.clearButton} onClick={handleClearSearch}>
                  Show All
                </button>
              )}
              <button className={styles.navArrow}>&#8592;</button>
              <button className={styles.navArrow}>&#8594;</button>
            </div>
          </div>

          <div className={styles.cuisineTabs}>
            {cuisineTypes.slice(0, 8).map((cuisine) => (
              <button
                key={cuisine}
                className={`${styles.cuisineTab} ${activeTab === cuisine ? styles.cuisineTabActive : ''}`}
                onClick={() => setActiveTab(cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>

          <div className={styles.cardGrid}>
            {filteredRestaurants.map((card, index) => (
              <Card key={card._id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
