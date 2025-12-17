import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import ThematicCheckBox from "./checkboxes/ThematicCheckBox";
import RestrictionAlimentCheckBox from "./checkboxes/RestrictionAlimentCheckBox";
import PriceTextField from "./textfield/PriceTextField";
import RatingField from "./others/RatingField";
import SearchInputField from "./others/SearchInputField";
import { FiArrowRight } from "react-icons/fi";

const useStyles = makeStyles({
  buttonDark: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#2d3a2d',
    color: '#fff',
    fontWeight: 600,
    fontSize: '0.85rem',
    padding: '10px 20px',
    borderRadius: 20,
    border: '2px solid #2d3a2d',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1a2634',
      borderColor: '#1a2634',
    },
  },
  buttonWhite: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#e8d44d',
    color: '#2d3a2d',
    fontWeight: 600,
    fontSize: '0.85rem',
    padding: '12px 24px',
    borderRadius: 20,
    border: '2px solid #2d3a2d',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#d4c043',
    },
  },
  arrowIcon: {
    fontSize: 16,
  },
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: 24,
      maxWidth: 480,
      backgroundColor: '#f5f2e8',
      border: '2px solid #2d3a2d',
    },
  },
  dialogTitle: {
    textAlign: 'center',
    padding: '32px 32px 16px',
    '& .MuiTypography-root': {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#2d3a2d',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  dialogContent: {
    padding: '0 32px 16px',
  },
  dialogDescription: {
    textAlign: 'center',
    color: '#5a6b5a',
    fontSize: '0.9rem',
    marginBottom: 24,
    lineHeight: 1.5,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    border: '2px solid #2d3a2d',
  },
  dialogActions: {
    padding: '16px 32px 32px',
    justifyContent: 'center',
    gap: 12,
  },
  cancelButton: {
    color: '#2d3a2d',
    fontWeight: 500,
    padding: '10px 24px',
    borderRadius: 20,
    textTransform: 'none',
    border: '2px solid #2d3a2d',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.04)',
    },
  },
  searchButton: {
    backgroundColor: '#e8d44d',
    color: '#2d3a2d',
    fontWeight: 600,
    padding: '12px 32px',
    borderRadius: 20,
    textTransform: 'none',
    border: '2px solid #2d3a2d',
    '&:hover': {
      backgroundColor: '#d4c043',
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

let data = [];

fetch('http://localhost:3000/')
  .then(res => res.json())
  .then((result) => {
    data = result.map(restaurant => restaurant.cuisineType);
  });

const DialogForm = ({ hasToBeWhite, alternText, onSearchResults }) => {
  const styles = useStyles();

  const options = [...new Set(data)];

  const [price, setPrice] = React.useState("");
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setState({
      glutenFree: false,
      sugarFree: false,
      lactoseFree: false,
      soyFree: false,
      thematic: false,
    });
  };

  const [ratingChange, setRatingChange] = React.useState(0);
  const handleRatingChange = (event) => {
    setRatingChange(event.target.value);
  };

  const [searchInput, setSearchInput] = React.useState("");
  const handleSearchInputSave = (value) => {
    setSearchInput(value);
  };

  const [state, setState] = React.useState({
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleOnSearchButton = () => {
    const priceValue = price.replace(/[^0-9]/g, '');
    const body = {
      cuisineType: searchInput,
      price: Number(priceValue) || 50,
      ...state,
      rating: Number(ratingChange),
    };

    const header = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "post",
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3000", header)
      .then((response) => response.json())
      .then((data) => {
        handleClose();
        alternText("Search Results");
        const topSimilarsRestaurants = data.slice(0, 6);
        if (onSearchResults) {
          onSearchResults(topSimilarsRestaurants);
        }
      })
      .catch((error) => {
        console.error('Search error:', error);
      });
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className={hasToBeWhite ? styles.buttonWhite : styles.buttonDark}
        disableElevation
      >
        Find Now
        <FiArrowRight className={styles.arrowIcon} />
      </Button>

      <Dialog open={open} onClose={handleClose} className={styles.dialog}>
        <DialogTitle className={styles.dialogTitle}>
          Find Your Restaurant
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <DialogContentText className={styles.dialogDescription}>
            Tell us your preferences and our AI will recommend the best dining matches for you.
          </DialogContentText>

          <Box className={styles.formContainer}>
            <ThemeProvider theme={theme}>
              <SearchInputField options={options} searchInputSave={handleSearchInputSave} />
              <PriceTextField handlePrice={handlePrice} />
              <RatingField handleRatingChange={handleRatingChange} />
              <ThematicCheckBox handleChange={handleChange} />
              <RestrictionAlimentCheckBox handleChange={handleChange} />
            </ThemeProvider>
          </Box>
        </DialogContent>

        <DialogActions className={styles.dialogActions}>
          <Button onClick={handleClose} className={styles.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleOnSearchButton} className={styles.searchButton}>
            Search Restaurants
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogForm;
