describe ('Weather', function() {

  beforeEach(function(){
    weather = new Weather();
  });

  describe('generate random weather', function(){
    it('returns weather condition randomly', function(){
      spyOn(Math, 'random').and.returnValue(0.7)
      expect(weather.randomizer()).toEqual('windy')
    });
  });


});
