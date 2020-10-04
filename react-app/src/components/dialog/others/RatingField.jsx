import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles (({
    font: {
        fontFamily: 'Arial',
        color: '#7e7e7e',
    },
}));

const RatingField = ({handleRatingChange}) =>{
    let styles = useStyles();
    return(
        <List>
            <ListItem>
                <h4 className={styles.font}>Avaliação:</h4>
                <Rating
                    name="customized-empty"
                    defaultValue={0}
                    precision={1}
                    size={"large"}
                    onChange={handleRatingChange}
                    emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                />
            </ListItem>
        </List>
    )
}
export default RatingField;