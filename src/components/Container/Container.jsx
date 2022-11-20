import React from "react";
import Card from "../Card/Card";

import "./container.css";

const Container = () => {
  return (
    <div id="container">
      <Card name='Lionel Messi' img='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1011x335:1013x333)/origin-imgresizer.eurosport.com/2022/06/01/3385867-69197608-2560-1440.jpg' />
      <Card name='Cristiano Ronaldo' img='https://www.corriere.it/methode_image/2022/08/26/Sport/Foto%20Sport%20-%20Trattate/44.0.1279883136-knUE-U33708753187638D-656x492@Corriere-Web-Sezioni.jpg' />
      <Card name='Neymar' img='https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=original'/>
    </div>
  );
};

export default Container;
