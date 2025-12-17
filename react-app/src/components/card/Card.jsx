import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import Rating from "@material-ui/lab/Rating";

// Pastel color palette for cards
const cardColors = [
  '#d4e8f2', // Light blue
  '#f2d4e8', // Light pink
  '#f2ecd4', // Light yellow
  '#d4f2e8', // Light mint
  '#e8d4f2', // Light purple
  '#f2d4d4', // Light coral
];

const useStyles = makeStyles({
  paper: {
    borderRadius: 20,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '2px solid #2d3a2d',
    padding: 24,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  restaurantName: {
    fontFamily: 'Georgia, serif',
    fontWeight: 700,
    fontSize: '1.3rem',
    color: '#2d3a2d',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    lineHeight: 1.2,
    flex: 1,
    paddingRight: 12,
  },
  arrowIcon: {
    fontSize: 20,
    color: '#2d3a2d',
    cursor: 'pointer',
    flexShrink: 0,
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
    marginBottom: 16,
  },
  imagePlaceholder: {
    height: 80,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.6)',
    border: '1.5px solid #2d3a2d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#5a6b5a',
    fontWeight: 500,
  },
  description: {
    fontSize: '0.85rem',
    color: '#5a6b5a',
    lineHeight: 1.6,
    marginBottom: 20,
    minHeight: 60,
  },
  ingredientsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    borderTop: '1px solid rgba(0,0,0,0.08)',
    paddingTop: 12,
  },
  ingredientRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  ingredientLabel: {
    fontSize: '0.8rem',
    color: '#2d3a2d',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
  },
  ingredientArrow: {
    fontSize: 14,
    color: '#2d3a2d',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
});

const Card = ({ card, index }) => {
  const styles = useStyles();
  const bgColor = cardColors[index % cardColors.length];

  const getDescription = () => {
    const type = card.thematic ? "themed" : "classic";
    return `A ${type} ${card.cuisineType.toLowerCase()} restaurant offering exceptional dining experience with ${card.rating.value}-star quality dishes and carefully curated menu...`;
  };

  // Generate ingredient-like features based on card data
  const getFeatures = () => {
    const features = [
      { label: card.cuisineType.toUpperCase(), hasArrow: true },
      { label: `$${card.price.value} PRICE RANGE`, hasArrow: true },
      { label: card.thematic ? 'THEMED AMBIANCE' : 'CLASSIC AMBIANCE', hasArrow: true },
    ];

    if (card.glutenFree) features.push({ label: 'GLUTEN FREE', hasArrow: true });
    if (card.lactoseFree) features.push({ label: 'LACTOSE FREE', hasArrow: true });
    if (card.sugarFree) features.push({ label: 'SUGAR FREE', hasArrow: true });
    if (card.soyFree) features.push({ label: 'SOY FREE', hasArrow: true });

    return features.slice(0, 4);
  };

  return (
    <div
      className={styles.paper}
      style={{ backgroundColor: bgColor }}
      data-id={card._id}
    >
      <Box className={styles.header}>
        <Typography className={styles.restaurantName}>
          {card.name}
        </Typography>
        <FiArrowUpRight className={styles.arrowIcon} />
      </Box>

      <Box className={styles.imageGrid}>
        <div className={styles.imagePlaceholder}>
          {card.cuisineType}
        </div>
        <div className={styles.imagePlaceholder}>
          <Rating
            readOnly
            value={card.rating.value}
            size="small"
            style={{ color: '#e8d44d' }}
          />
        </div>
      </Box>

      <Typography className={styles.description}>
        {getDescription()}
      </Typography>

      <Box className={styles.ingredientsList}>
        {getFeatures().map((feature, idx) => (
          <Box key={idx} className={styles.ingredientRow}>
            <span className={styles.ingredientLabel}>{feature.label}</span>
            {feature.hasArrow && <FiArrowRight className={styles.ingredientArrow} />}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Card;
