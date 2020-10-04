import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {AiOutlineShop} from "react-icons/ai";
import {RiRestaurantLine} from "react-icons/ri";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(({
    buttonColor: {
        color: '#4e4e4e',
    },
    fontStyles: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#373737',
        fontSize: 18,
    },

    gridAlign: {
        alignItems: 'center',
        display: 'flex'
    },
}));


const TitleItem = ({card}) =>{
    let styles = useStyles();
    return(
        <Grid className={styles.gridAlign} item xs={3} md={3}>
            <List>
                <ListItem>
                    <div hidden={!card.thematic}>
                        <Tooltip title={"Ambiente temático"}>
                            <Button><AiOutlineShop className={styles.buttonColor} size={20}/></Button>
                        </Tooltip>
                    </div>

                    <div hidden={card.thematic}>
                        <Tooltip title={"Ambiente não temático"}>
                            <Button><RiRestaurantLine className={styles.buttonColor}
                                                      size={20}/></Button>
                        </Tooltip>
                    </div>

                    <Link color={"inherit"}>
                        <Typography className={styles.fontStyles}>
                            {card.name}
                        </Typography>
                    </Link>
                </ListItem>
            </List>
        </Grid>
    )
};

export default TitleItem;