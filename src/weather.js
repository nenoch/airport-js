var Weather = function(){
  this._conditions = ['sunny', 'stormy', 'windy'];
}

Weather.prototype.randomizer = function(){
  return this._conditions[Math.floor (Math.random() * this._conditions.length)]
};
