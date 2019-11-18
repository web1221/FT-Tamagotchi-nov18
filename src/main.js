import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Tamagotchi} from './bear.js';

function setAppend(newTama){
  // let tamaArray = [];
  setInterval(() => {
    $('li#food').text("Food Level: " + newTama.foodLevel);
    $('li#rest').text("Rested Level: " + newTama.restedLevel);
    $('li#play').text("Play Level: " + newTama.playLevel);

    // tamaArray.push(newTama.foodLevel, newTama.restedLevel, newTama.playLevel)
  }, 10)
  // console.log(tamaArray)
  // return tamaArray
}

$(document).ready(function(){
  let newTama = new Tamagotchi();
  $(".userName").submit(function(event){
    event.preventDefault();
    newTama.name = $("#nameInput").val();
    console.log(newTama);

  });
  newTama.setHunger();
  newTama.setRested();
  newTama.setPlay();
  setAppend(newTama);
  console.log(newTama.playLevel);
  $("#feedButton").click(function(){
    // $("ul").html("<li>" + newTama.feed() + "</li>");
    newTama.feed();

  });
  $("#restButton").click(function(){
    newTama.rest();
  });
  $("#playButton").click(function(){
    newTama.play();
  });


});
