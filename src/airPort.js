
var airPort = function() {
  this._planes = [];
}

airPort.prototype.land = function(plane) {
    this._planes.push(plane);
};
