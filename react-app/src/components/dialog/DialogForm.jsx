import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from '@material-ui/core/Dialog';
import {makeStyles} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ThematicCheckBox from "./checkboxes/ThematicCheckBox";
import RestrictionAlimentCheckBox from "./checkboxes/RestrictionAlimentCheckBox";
import PriceTextField from "./textfield/PriceTextField";
import RatingField from "./others/RatingField";
import SearchInputField from "./others/SearchInputField";

const useStyles = makeStyles(({
    buttonColorRed: {
        color: '#d50000'
    },
    buttonColorWhite: {
        color: '#ffffff'
    },

    paper: {
        width: '75%',
        height: "auto"
    },
    dialog: {
        justifyContent: 'center',
        display: 'flex'
    },
}));

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#d50000',
        }
    }
})

const DialogForm = ({hasToBeWhite, alternText, setHiddenAbout}) => {
    let styles = useStyles();

    //Pedir para o back-end os tipos de cozinha
    let options = ["Brasileira", "Italiana"];

    const [price, setPrice] = React.useState("");
    const handlePrice = (event) => {
        setPrice(event.target.value)
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(!open);
        setState(false)
    };

    const [ratingChange, setRatingChange] = React.useState(0);
    const handleRatingChange = (event) => {
        setRatingChange(event.target.value)
    };

    const [searchInput, setSearchInput] = React.useState("");
    const HandleSearchInputSave = (value) => {
        setSearchInput(value);
    };

    const [state, setState] = React.useState(
        {
            glutenFree: false,
            sugarFree: false,
            lactoseFree: false,
            soyFree: false,
            thematic: false,
        }
    );
    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    const HandleOnSearchButton = () => {
        let body = {
            cuisineType: searchInput,
            price: price,
            ...state,
            rating: ratingChange,
        };

        let header = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "post", body: JSON.stringify(body)
        }
        fetch("Aqui vai a rota API", header)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                handleClose();
                alternText("Resultado da busca");
                setHiddenAbout(true);
            })
    };


    return (
        <div>
            <Button onClick={handleClickOpen}
                    className={hasToBeWhite ? styles.buttonColorWhite : styles.buttonColorRed}
                    color={"primary"}>
                PREENCHER FORMULÁRIO DE BUSCA
            </Button>

            <Dialog open={open}>
                <DialogTitle>Preencha sua preferência</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para fornecer uma recomendação com maior precisão preencha o formulário abaixo.
                    </DialogContentText>
                </DialogContent>

                <DialogContent className={styles.dialog}>
                    <Paper className={styles.paper} variant={"outlined"}>
                        <List>
                            <SearchInputField options={options} searchInputSave={HandleSearchInputSave}/>

                            <PriceTextField handlePrice={handlePrice}/>

                            <RatingField handleRatingChange={handleRatingChange}/>

                            <ThematicCheckBox handleChange={handleChange}/>

                            <RestrictionAlimentCheckBox handleChange={handleChange}/>

                        </List>
                    </Paper>
                </DialogContent>

                <DialogActions>
                    <ThemeProvider theme={theme}>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={HandleOnSearchButton} color="secondary">
                            Buscar
                        </Button>
                    </ThemeProvider>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogForm;