'use strict';

class Car {


  static getSpecs({maxSpeed, speed, isOn, distance, price}) {
    console.log(`Maxspeed: ${maxSpeed}, Speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`);
  }

  constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    const acceleratedValue = this.speed + value;

    if (acceleratedValue <= this.maxSpeed) {
      this.speed = acceleratedValue;
    }
  
  }

  decelerate(value) {
    const deceleratedValue = this.speed - value;

    if (deceleratedValue >= 0) {
      this.speed = deceleratedValue;
    }
  }


  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }

}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

