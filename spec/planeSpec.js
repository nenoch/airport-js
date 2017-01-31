describe('Plane', function() {

  beforeEach(function(){
  plane = new Plane();
  airport = new airPort();
  });

it('confrims plane has landed',function() {
  airport.land(plane)
  expect(plane.isLanded).toBeTruthy();

});



});
