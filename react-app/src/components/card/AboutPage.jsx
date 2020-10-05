import React from "react";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import DialogForm from "../dialog/DialogForm";

const useStyles = makeStyles(({
  titleStyle: {
    color: '#818181',
    fontFamily: "Verdana"
  },
  paper: {
    width: '1200px',
    marginLeft: '10px',
    marginRight: '10px'
  },

  fontDescription: {
    color: '#727272',
    fontFamily: 'Arial'
  },

  fontSize: {
    fontSize: 17
  },

  buttonColor: {
    color: '#d50000'
  },

  list: {
    marginTop: '20px',
    marginBottom: '-15px'
  }
}));

const AboutPage = ({ alternText, setHiddenAbout }) => {
  let styles = useStyles();
  return (
    <div>
      <Paper elevation={4} className={styles.paper}>
        <List>
          <ListItem>
            <Typography variant={"h6"} className={styles.fontDescription}>
              Essa plataforma utiliza a técnica de IA de raciocínio baseado em casos e
              tem como objetivo fazer recomendações de restaurantes de acordo
              com a similaridade das preferências.
              </Typography>
          </ListItem>
          <ListItem className={styles.list}>
            <Typography variant={"h6"} className={clsx(styles.fontDescription, styles.fontSize)}>
              Deseja preencher o formulário para iniciar? Clique no botão abaixo ou na barra superior
            </Typography>
          </ListItem>
          <ListItem>
            <DialogForm setHiddenAbout={setHiddenAbout} alternText={alternText} hasToBeWhite={false} />
          </ListItem>
        </List>
      </Paper>
    </div>
  )
};
export default AboutPage;