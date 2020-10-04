import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import { RiRestaurantLine } from "react-icons/ri";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import DialogForm from "../dialog/DialogForm";

const useStyles = makeStyles(({
    fontFamilyTitle:{
        fontFamily: 'Myriad Pro',
        fontWeight: 'bold',
        marginLeft: '8px'
    },

    appBar:{
        backgroundColor: '#d50000'
    },

    buttonStyle:{
        color:'#ffffff'
    },

    spacing:{
        width:"80%"
    }
}));

const Bar = ({alternText,setHiddenAbout}) =>{
    let styles = useStyles();
    return(
            <AppBar className={styles.appBar}>
                <Toolbar>

                    <List className={styles.spacing}>
                        <ListItem>
                            <RiRestaurantLine size={27}/>
                            <h2 className={styles.fontFamilyTitle}>
                                Restaurant Recommendation
                            </h2>
                        </ListItem>

                    </List>
                    <div>
                        <DialogForm setHiddenAbout={setHiddenAbout} alternText={alternText} hasToBeWhite={true}/>
                    </div>
                </Toolbar>
            </AppBar>
        )
};

export default Bar;