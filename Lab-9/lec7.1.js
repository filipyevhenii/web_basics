const car = {
    speedometer: 0,

    setSpeedometer(value) {
        this.speedometer = value;
        return this;
    },

    getSpeedometer() {
        return this.speedometer;
    },

    clearSpeedometer() {
        this.speedometer = 0;
        return this;
    },

    setSpeed(value) {
        return this.setSpeedometer(value);
    },

    getSpeed() {
        return this.getSpeedometer();
    },

    clearSpeed() {
        return this.clearSpeedometer();
    }
};

car.setSpeed(200).setSpeed(300);
console.log(car.getSpeed());
car.clearSpeed();
console.log(car.getSpeed());
