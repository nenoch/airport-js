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

});
