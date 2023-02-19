//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make,model,year,color, mileage);

        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(numOfPassengers) {
        if(numOfPassengers <= 5) {
            this.passenger = numOfPassengers
            console.log(`There is enough available room!`)
            return this.passenger
        } else {
            numOfPassengers = this.passenger
            console.log(`There is not enough room. The maximum passengers is ${this.maxPassenger}.`)
            return this.passenger
        }
    }

    start(fuelPercentage) {
        if(fuelPercentage > 0) {
            this.ignition = true;
            console.log(`The car is starting!`);
            return this.ignition = true
        } else {
            this.ignition = false;
            console.log(`Due to fuel levels, the car cannot start.`);
            return this.ignition =  false
        }
    }

    
    checkService() {
        if(this.mileage > 30000) {
            this.scheduleService = true;
            console.log(`Car service due. Current Odometer: ${this.mileage}`)
            return this.scheduleService
        } else {
            console.log(`Car service is up to date. Service due after 30000 miles. Current Odometer: ${this.mileage}`)
        }
    }

}

let newCar = new Car ('Mercury', 'Sedan', '1998', 'White', '27000')
newCar.start(9)
newCar.loadPassenger(5)
newCar.checkService()


