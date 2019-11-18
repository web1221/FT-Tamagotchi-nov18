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
    setInterval(() => {
      // this.die();
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
    setInterval(() => {
      this.restedLevel--;
    }, 3000);
  }
  rest(){
    this.restedLevel = 10;
  }
  // Play related ---------
  setPlay(){
    setInterval(() => {
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
   if(this.restedLevel <= 0 && this.playLevel <= 0 || this.foodLevel <= 0) {
      clearInterval( setInterval());
    }else if(this.restedLevel === 3 || this.playLevel === 3){
      this.foodLevel -= 3;
  }
  // die(){
  //   if(this.restedLevel <= 0 && this.playLevel <= 0 || this.foodLevel <= 0) {
  //
  //     clearInterval(this.setHunger());
  //   } else {
  //     return false;
  //   }
  // }

}
}
