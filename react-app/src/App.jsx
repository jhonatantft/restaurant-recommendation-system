import React from 'react';
import Bar from "./components/bar/Bar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./components/card/Card";
import { List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import AboutPage from "./components/card/AboutPage";
import { AiFillCodeSandboxCircle } from 'react-icons/ai';

const useStyles = makeStyles(theme => ({
  backgroundStyle: {
    backgroundColor: '#fcfcfc',
    justifyContent: "center",
    display: "flex"
  },
  paperDistance: {
    marginTop: "130px",
  },
  titleStyle: {
    color: '#818181',
    fontFamily: "Verdana"
  }
}));

const App = ({ restaurants }) => {
  let styles = useStyles();
  let [alternText, setAlternText] = React.useState("Restaurantes com maiores avaliações");
  let [hiddenAbout, setHiddenAbout] = React.useState(false);
  return (
    <div className={styles.backgroundStyle}>
      <Bar setHiddenAbout={setHiddenAbout} alternText={setAlternText} />
      <div className={styles.paperDistance}>
        <List>
          <div hidden={hiddenAbout}>
            <ListItem>
              <h2 className={styles.titleStyle}>
                Sobre
              </h2>
            </ListItem>
            <ListItem>
              <AboutPage setHiddenAbout={setHiddenAbout} alternText={setAlternText} />
            </ListItem>
          </div>
          <ListItem>
            <h2 className={styles.titleStyle}>
              {alternText}
            </h2>
          </ListItem>
          {restaurants.map((card) => {
            return <ListItem data-id={card._id}>
              <Card card={card} />
            </ListItem>
          })};
              </List>
      </div>
    </div>
  )
};
export default App;
