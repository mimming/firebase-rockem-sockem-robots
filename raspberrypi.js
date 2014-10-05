var five = require("raspi-io");
var Firebase = require("firebase");

var board = new five.Board();
var firebase = new Firebase("https://robots.firebaseio.com/robots");

board.on("ready", function() {
  var red = new five.Button(24);
  var blue = new five.Button(26);

  red.on("up", function () {
    firebase.child("red").once("value", function(snap) {
      firebase.child("red").set(snap.val() + 1);
  });

  blue.on("up", function () {
    firebase.child("blue").once("value", function(snap) {
      firebase.child("blue").set(snap.val() + 1);
  });
});

