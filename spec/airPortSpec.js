describe('airPort', function() {

    beforeEach(function() {
     airport = new airPort()
     plane = new Plane()


    });

  describe('instruct airport to land plane', function() {

    it('lands a plane', function() {
      airport.land(plane)
      expect(airport._planes).toContain(plane);
    });

  });

  describe('instruct the airport to take off', function(){

    it('takes off plane', function()  {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport._planes).not.toContain(plane);

    });

    it('prevents plane to takes off when stormy', function()  {
      airport.land(plane)
      console.log(weather)
      spyOn(weather, 'randomizer').and.returnValue('stormy');
      expect( function(){airport.takeOff(plane);} ).toThrow(new Error("Weather condition too bad to take off!"));

    });
  });




});
