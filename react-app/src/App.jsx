import React from 'react';
import Bar from "./components/bar/Bar";
import {makeStyles} from "@material-ui/core/styles";
import Card from "./components/card/Card";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import AboutPage from "./components/card/AboutPage";

const useStyles = makeStyles(theme =>({
    backgroundStyle:{
        backgroundColor: '#fcfcfc',
        justifyContent: "center",
        display: "flex"
    },
    paperDistance:{
        marginTop:"130px",
    },
    titleStyle:{
        color:'#818181',
        fontFamily:"Verdana"
    }

}));
const App = () => {
    let styles = useStyles();
    let cardsRecomendation = [];

    let [alternText,setAlternText] = React.useState("Restaurantes com maiores avaliações");
    let [hiddenAbout,setHiddenAbout] = React.useState(false);

    let mokup1 =
        {
            name:'A casa do porco',
            cuisineType:'Mexicana',
            rating:4,
            price:'150,00',
            sugarFree:false,
            soyFree: false,
            glutenFree: false,
            lactoseFree:false,
            thematic: false
        };
    let mokup2 =    {
        name:'Churrasqueria do Gaúcho',
        cuisineType:'Brasileira',
        rating:2,
        price:'50,00',
        sugarFree:true,
        soyFree: false,
        glutenFree: true,
        lactoseFree:false,
        thematic: false
    };

    for (let i = 0; i < 15; i++) {
        if (i % 2 === 0){
            cardsRecomendation.push(mokup1);
        }else{
            cardsRecomendation.push(mokup2)
        }

    }
  return(
      <div className={styles.backgroundStyle}>
          <Bar setHiddenAbout={setHiddenAbout} alternText={setAlternText}/>
          <div className={styles.paperDistance}>
              <List>
                  <div hidden={hiddenAbout}>
                      <ListItem>
                          <h2 className={styles.titleStyle}>
                              Sobre
                          </h2>
                      </ListItem>
                      <ListItem>
                          <AboutPage setHiddenAbout={setHiddenAbout} alternText={setAlternText}/>
                      </ListItem>
                  </div>


                  <ListItem>
                      <h2 className={styles.titleStyle}>
                          {alternText}
                      </h2>
                  </ListItem>
                  {cardsRecomendation.map((card) => {
                      return <ListItem>
                          <Card card={card}/>
                      </ListItem>
                  })};
              </List>
          </div>
      </div>
  )
};
export default App;
