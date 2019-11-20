import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Tamagotchi} from './bear.js';

function setAppend(newTama){
  setInterval(() => {
    $('li#food').text(`Food Level: ${newTama.foodLevel}`);
    $('li#rest').text(`Rested Level: ${newTama.restedLevel}`);
    $('li#play').text(`Play Level: ${newTama.playLevel}`);
  }, 10);
}

$(document).ready(function(){

  let newTama = new Tamagotchi();

  $(".userName").submit(function(event){
    event.preventDefault();
    newTama.name = $("input#nameInput").val();
    var pokenumber = $("input#pokenumber").val();
    $('.nameOutput').text(`Tamagotchi name: ${newTama.name}`);
    let request = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokenumber}`
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
      document.getElementById("pokeimage").src = response.sprites.front_default
      console.log(response.sprites.front_default);
    }
    $('.img').show();
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
