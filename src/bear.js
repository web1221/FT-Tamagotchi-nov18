export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.restedLevel = 10;
    this.playLevel = 10;
    this.level = 1;
  }
  // food related -------
  setHunger() {
    let hungryInterval = setInterval(() => {
      this.foodLevel--;
      this.sick();
      this.die(hungryInterval);
    }, 2000);

  }

  feed() {
    this.foodLevel = 10;
  }

  // sleep related --------
  setRested() {
    let restInterval = setInterval(() => {
      this.restedLevel--;
      this.die(restInterval);
    }, 2000);
  }
  rest(){
    this.restedLevel = 10;
  }
  // Play related ---------
  setPlay(){
    let playInterval = setInterval(() => {
      this.playLevel--;
      this.die(playInterval);
    }, 2000);

  }
  play() {
    this.playLevel = 10;
  }

  // LEVEL UP
  levelUp(){
    setInterval(() => {
      this.level += 1;
    },2000);
  }

  sick() {
    if(this.restedLevel === 4 || this.playLevel === 4){
      this.foodLevel -= 3;
      // alert("your tamagotchi is sick!:(");
    }
  }

  die(interval){
    if(this.restedLevel <= 0 || this.playLevel <= 0 || this.foodLevel <= 0) {
      clearInterval(interval);
    }
  }


}
