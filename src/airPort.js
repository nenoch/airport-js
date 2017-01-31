
var airPort = function() {
  this._planes = [];
}

airPort.prototype.land = function(plane) {
    this._planes.push(plane);
};

airPort.prototype.takeOff = function(plane) {
    this._planes.pop(plane);
};
