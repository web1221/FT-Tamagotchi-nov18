export class HungryBear {

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
      this.foodLevel--;
    }, 1000);
  }
  areYouHungry() {
  if (this.foodLevel < 0) {
    return false;
  } else {
    return true;
  }
}
feed() {
  this.foodLevel = 10;
}

// sleep related --------
setRested() {
  setInterval(() => {
    this.restedLevel--;
  }, 1000)
}
rest(){
  this.restedLevel = 10;
}
// Play related ---------
setPlay(){
  setInterval(() => {
    this.playLevel--
  }, 1000)
}

play() {
  this.playLevel = 10;
}

// LEVEL UP
levelUp(){
  setInterval(() => {
    this.level += 1;
  },1000)
}

}
