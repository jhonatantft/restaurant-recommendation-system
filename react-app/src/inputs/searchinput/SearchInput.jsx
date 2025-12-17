import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      background: '#ffffff',
    },
  },
});

const SearchInput = ({ options, searchInputSave }) => {
  const handleChangeSearchInput = (event, newValue) => {
    if (event) {
      event.preventDefault();
    }
    searchInputSave(newValue);
  };

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Autocomplete
        id="culinaryTypeOptions"
        freeSolo
        onChange={handleChangeSearchInput}
        options={options.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            color="secondary"
            placeholder="Select or type a cuisine"
            margin="dense"
            variant="outlined"
            size="small"
            className={styles.textField}
          />
        )}
      />
    </div>
  );
};

export default SearchInput;
