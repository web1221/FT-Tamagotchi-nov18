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
      this.die(hungryInterval);
      this.sick();
      this.foodLevel--;
    }, 3000);

  }
  areYouHungry() {
    if (this.foodLevel < 0) {
      return false;
    } else {
      return true;
    }
  }
  feed() {
    return this.foodLevel = 10;
  }

  // sleep related --------
  setRested() {
  let restInterval = setInterval(() => {
    this.die(restInterval)
      this.restedLevel--;
    }, 3000);
  }
  rest(){
    this.restedLevel = 10;
  }
  // Play related ---------
  setPlay(){
    let playInterval = setInterval(() => {
      this.die(playInterval)
      this.playLevel--;
    }, 3000);

  }

  play() {
    this.playLevel = 10;
  }

  // LEVEL UP
  levelUp(){
    setInterval(() => {
      this.level += 1;
    },3000);
  }

  sick() {
    if(this.restedLevel === 3 || this.playLevel === 3){
      this.foodLevel -= 3;
    }
  }
    die(interval){
      if(this.restedLevel <= 0 && this.playLevel <= 0 || this.foodLevel <= 0) {
        clearInterval(interval);
      } else {
        return false;
      }
    }


}
