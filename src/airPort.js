
var airPort = function(weather) {
  this._planes = [];
  var weather = weather;
  this._weather = weather.randomizer();
}

airPort.prototype.land = function(plane) {
    this._planes.push(plane);
};

airPort.prototype.takeOff = function(plane) {
    if (this._weather === 'stormy') {
      throw new Error("Weather condition too bad to take off!");
    }
    this._planes.pop(plane);
};
