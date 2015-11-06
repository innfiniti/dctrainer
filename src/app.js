var workouta = [
  {
    title: "chest",
    body: "3 bench press 11 rest pause"
  },
  {
    title: "calves",
    body: "3 jumps 11 rest pause"
  },
  {
    title: "quads",
    body: "3 ass 11 rest pause"
  }
];
var workoutb = [
  {
    title: "biceps",
    body: "2 barra z 11-20 rest-pause 4 mancuernas sentado 11-20 rest-pause 6 mauina biceps 11-20 rest-pause"
  },
  {
    title: "forearm",
    body: "2 martillos 10-20 4 barra muñecas 10-20 6 jalar cable desde abajo 10-20"
  },
  {
    title: "Calves",
    body: "2 prensa 10-12 4 talon de aquiles 10-"
    },
  {
    title: "Hamstrings",
    body: "2 maquina pierna boca abajo 15-30 rest-pause 4 prensa (feet high and wide, press with heels) 15-25 6 maquina pierna sentado 15-30 rest-pause"
    },
  {
    title: "Quadriceps",
    body: "2 Squats 4-8 20 4 Hack squats 4-8 206 Leg presses 4-8 20"
  }
];
var UI = require('ui');
var main = new UI.Card({
  title: 'GET READY',
  body: 'Press up for A workout Press Down for B workout'
});
main.show();
main.on('click', 'up', function(e) {
var menua = new UI.Menu({
  sections: [{
    title: 'WORK OUT A',
    items: workouta
  }]
});
menua.on('select', function(e) {
   var carda = new UI.Card({
    title: workouta[e.itemIndex].title,
    body: workouta[e.itemIndex].body
  });
  carda.show();
   });
  menua.show();
 });
main.on('click', 'down', function(e) {
var menub = new UI.Menu({
  sections: [{
    title: 'WORK OUT B',
    items: workoutb
  }]
});
menub.on('select', function(e) {
   var cardb = new UI.Card({
    title: workoutb[e.itemIndex].title,
    body: workoutb[e.itemIndex].body
  });
  cardb.show();
  });
  menub.show();
 });