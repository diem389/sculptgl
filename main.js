import SculptGL from './src/SculptGL';

window.SculptGL = SculptGL;


window.addEventListener('load', function () {
  var app = new window.SculptGL();
  app.start();
});