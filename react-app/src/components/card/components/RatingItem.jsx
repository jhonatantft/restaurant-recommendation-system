import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Typography} from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(({
    fontDescription: {
        color: '#727272',
        fontFamily: 'Arial',
        marginRight: '5px'
    },

    gridAlign: {
        alignItems: 'center',
        display: 'flex'
    },
}));


const RatingItem = ({card}) => {
    let styles = useStyles();
    return (
        <Grid className={styles.gridAlign} item xs={2} md={2}>
            <List>
                <ListItem>
                    <Typography className={styles.fontDescription}>
                        Avaliação:
                    </Typography>
                    <Rating readOnly name="size-medium" defaultValue={card.rating}/>
                </ListItem>
            </List>
        </Grid>
    )
};

export default RatingItem;