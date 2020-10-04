import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(({
    divStyle:{
        width: 300
    },

}));



const SearchInput = ({options,searchInputSave}) =>{

    const handleChangeSearchInput = (event,newValue) =>{
        event.preventDefault();
        searchInputSave(newValue);
    };

    let styles = useStyles();
    return(
        <div className={styles.divStyle}>
            <Autocomplete
                id="culinaryTypeOptions"
                freeSolo
                onChange={handleChangeSearchInput}
                options={options.map((option) => option)}
                renderInput={(params) => (
                        <TextField {...params}  color={"secondary"}
                                   label="Digite um tipo de cozinha" margin="dense" variant="outlined" />
                )}
            />
        </div>
    )
};
export default SearchInput;