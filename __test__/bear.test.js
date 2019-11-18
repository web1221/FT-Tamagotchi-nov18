import { HungryBear } from './../src/bear.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
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
  test('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.areYouHungry()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.areYouHungry()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
  test('should have a rested level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.restedLevel).toEqual(7);
  });
  test('should have a rested level of ten if rested', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.rest();
    expect(fuzzy.restedLevel).toEqual(10);
  });

  test('should have a play level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.playLevel).toEqual(7);
  });
  test('should have a play level of ten if played with', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.play();
    expect(fuzzy.playLevel).toEqual(10);
  });

  test('should level up after 120001', function() {
    jest.advanceTimersByTime(1001);
    fuzzy.levelUp();
    expect(fuzzy.level).toEqual(2);

  });


});
