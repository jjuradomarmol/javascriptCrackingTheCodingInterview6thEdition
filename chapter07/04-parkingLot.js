class ParkingLot {
  constructor(spaces) {
    this.limit = spaces;
    this.number = 0;
    this.cars = {};
  }

  park(car) {
    if (this.available()) {
      if (this.cars[car] !== undefined) {
        console.log("car is already inside parking lot");
      } else {
        console.log(`Your car ${car} has been parked`);
        this.cars[car] = car;
        this.number++;
      }
    } else {
      console.log("the parking lot is full!");
    }
  }

  exit(car) {
    if (this.number === 0) {
      console.log("there are no cars in the parking lot");
    } else if (this.cars[car] === undefined) {
      console.log("the car is not in the parking lot");
    } else {
      console.log(`Your car ${car} has exited`);
      delete this.cars[car];
      this.number--;
    }
  }

  available() {
    return this.number < this.limit;
  }
}

// Proofs

var parkingLot = new ParkingLot(2);
parkingLot.park("Tesla");
parkingLot.park("Mercedes");
parkingLot.park("Range Rover");
parkingLot.exit("Tesla");
