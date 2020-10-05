import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Chip, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import TitleItem from "./components/TitleItem";
import CulinaryItem from "./components/CulinaryItem";
import PriceItem from "./components/PriceItem";
import RatingItem from "./components/RatingItem";


const useStyles = makeStyles(({
  paper: {
    width: '1200px',
    marginLeft: '10px',
    marginRight: '10px'
  },
  fontDescription: {
    color: '#727272',
    fontFamily: 'Arial'
  },

  chipColor: {
    borderColor: '#d50000',
    color: '#d50000',
    marginLeft: '6px',
    marginBottom: '5px'
  },

  root: {
    flexWrap: 'wrap',
  },
  div: {
    marginTop: '20px'
  },

  textMargin: {
    marginTop: '-15px'
  },
}));

const Card = ({ card }) => {

  const soyFreeChip = () => {
    if (card.soyFree) {
      return <Chip variant={"outlined"} className={styles.chipColor} label={"Soja"}
        color={"default"} />
    }
  };

  const sugarFreeChip = () => {
    if (card.sugarFree) {
      return <Chip variant={"outlined"} className={styles.chipColor} label={"Açúcar"}
        color={"default"} />
    }
  };

  const glutenFreeChip = () => {
    if (card.glutenFree) {
      return <Chip variant={"outlined"} className={styles.chipColor} label={"Glúten"}
        color={"default"} />
    }
  };

  const lactoseFreeChip = () => {
    if (card.lactoseFree) {
      return <Chip variant={"outlined"} className={styles.chipColor} label={"Lactose"}
        color={"default"} />
    }
  };

  const verifyChips = () => {
    return card.soyFree || card.lactoseFree || card.glutenFree || card.sugarFree;
  };

  let styles = useStyles();
  return (
    <Paper elevation={4} className={styles.paper}>
      <List>
        <ListItem>
          <Grid container>
            <TitleItem card={card} />
            <CulinaryItem card={card} />
            <PriceItem card={card} />
            <RatingItem card={card} />
          </Grid>

        </ListItem>
        <Divider hidden={!verifyChips()} />
        <div hidden={!verifyChips()} className={styles.div}>
          <ListItem className={clsx(styles.textMargin, styles.fontDescription)}> <Typography>
            Os alimentos não contem:
                    </Typography>
            <div className={styles.root}>
              {soyFreeChip()}
              {sugarFreeChip()}
              {glutenFreeChip()}
              {lactoseFreeChip()}
            </div>
          </ListItem>
        </div>

      </List>
    </Paper>
  )
}
export default Card;