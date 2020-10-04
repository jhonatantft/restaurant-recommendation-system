import {Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(({
    fontDescription: {
        color: '#727272',
        fontFamily: 'Arial',
        marginRight: '5px'
    },

    fontStyles: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#373737'
    },

    gridAlign: {
        alignItems: 'center',
        display: 'flex'
    },

}));

const CulinaryItem = ({card}) => {
    let styles = useStyles();
    return (
        <Grid item xs={2} md={2} className={styles.gridAlign}>
            <List>
                <ListItem>
                    <Typography className={styles.fontDescription}>
                        Culinária:
                    </Typography>
                    <Typography className={styles.fontInfo}>
                        {card.cuisineType}
                    </Typography>
                </ListItem>
            </List>
        </Grid>
    )
}
export default CulinaryItem;