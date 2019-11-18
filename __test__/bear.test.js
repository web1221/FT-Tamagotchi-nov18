import { Tamagotchi } from './../src/bear.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Tamagotchi("Fuzzy");
    fuzzy.setHunger();
    fuzzy.setRested();
    fuzzy.setPlay();
    fuzzy.levelUp();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level, rested level, entertained level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
    expect(fuzzy.restedLevel).toEqual(10);
    expect(fuzzy.playLevel).toEqual(10);
    expect(fuzzy.level).toEqual(1);
  });


  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });
  test('should get very hungry if the food level drops below zero', () => {
    fuzzy.foodLevel = 0;
    expect(fuzzy.areYouHungry()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.areYouHungry()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
  test('should have a rested level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.restedLevel).toEqual(7);
  });
  test('should have a rested level of ten if rested', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.rest();
    expect(fuzzy.restedLevel).toEqual(10);
  });

  test('should have a play level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.playLevel).toEqual(7);
  });
  test('should have a play level of ten if played with', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.play();
    expect(fuzzy.playLevel).toEqual(10);
  });

  test('should level up after 1001', () => {
    jest.advanceTimersByTime(1001);
    fuzzy.levelUp();
    expect(fuzzy.level).toEqual(2);
  });
  test('should give hit to food level if restedLevel is below 3. Making the animal sick', () => {
    fuzzy.restedLevel = 2;
    expect(fuzzy.sick()).toEqual(fuzzy.foodLevel - 3);
  });
  test('should check if tamagotchi is dead', () => {
    fuzzy.restedLevel = 0;
    expect(fuzzy.die()).toEqual(true);
});

});
