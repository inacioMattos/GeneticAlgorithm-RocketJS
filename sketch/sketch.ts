let Engine
let Render
let World
let Bodies

let engine: Matter.Engine;

let render

let boxA: Matter.Body;
let boxB: Matter.Body;
let ground: Matter.Body;

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  console.log(windowWidth, windowHeight);

  // FULLSCREEN CANVAS
  createCanvas(800, 800);

  // SETUP SOME OPTIONS
  rectMode(CENTER).noStroke().frameRate(60);


  Engine = Matter.Engine;
  Render = Matter.Render;
  World = Matter.World;
  Bodies = Matter.Bodies;
  engine = Engine.create();
  render = Render.create({
    element: document.body,
    engine: engine
  });
  boxA = Bodies.rectangle(385, 690, 10, 30);
  // boxB = Bodies.rectangle(450, 50, 10, 30);
  ground = Bodies.rectangle(0, 700, 1600, 50, { isStatic: true });

  Matter.Engine.run(engine)

  World.add(engine.world, [boxA, ground]);

  Matter.Body.applyForce(boxA, Matter.Vector.create(-1, 1), Matter.Vector.create(0.0001, 0));
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  // CLEAR BACKGROUND
  background(180);

  Matter.Engine.update(engine);
  const c = color([180, 12, 44]);
  fill(c);
  rect(boxA.position.x, boxA.position.y, 10, 30);

  

  console.log(boxA.position);

}

// p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// foguete.addForce(10, 30)
