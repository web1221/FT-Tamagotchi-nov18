import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Tamagotchi} from './bear.js';

function setAppend(newTama){
  setInterval(() => {
    $('li#food').text("Food Level: " + newTama.foodLevel);
    $('li#rest').text("Rested Level: " + newTama.restedLevel);
    $('li#play').text("Play Level: " + newTama.playLevel);
  }, 10);
}

$(document).ready(function(){
  let newTama = new Tamagotchi();
  $(".userName").submit(function(event){
    event.preventDefault();
    newTama.name = $("#nameInput").val();
    $('.nameOutput').text(`Tamagotchi name: ${newTama.name}`);
  });
  newTama.setHunger();
  newTama.setRested();
  newTama.setPlay();
  setAppend(newTama);


  $("#feedButton").click(function(){
    newTama.feed();
  });

  $("#restButton").click(function(){
    newTama.rest();
  });

  $("#playButton").click(function(){
    newTama.play();
  });

});
