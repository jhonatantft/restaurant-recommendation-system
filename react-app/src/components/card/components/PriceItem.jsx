import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Typography} from "@material-ui/core";
import React from "react";

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


const PriceItem = ({card}) => {
    let styles = useStyles();
    return (

        <Grid item xs={4} md={4} className={styles.gridAlign}>
            <List>
                <ListItem>
                    <Typography className={styles.fontDescription}>
                        Faixa de preço:
                    </Typography>
                    <Typography className={styles.fontStyles}>
                        R${card.price}
                    </Typography>
                </ListItem>
            </List>
        </Grid>

    )
};

export default PriceItem;