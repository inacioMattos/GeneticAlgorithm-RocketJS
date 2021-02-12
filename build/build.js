var Rocket = (function () {
    function Rocket(_a) {
        var body = _a.body, ancetrals = _a.ancetrals;
        this.body = body;
        if (ancetrals) {
            this.mate(ancetrals);
        }
        else {
            this.initialize();
        }
    }
    Rocket.prototype.initialize = function () {
    };
    Rocket.prototype.mate = function (ancestrals) {
    };
    return Rocket;
}());
var Engine;
var Render;
var World;
var Bodies;
var engine;
var render;
var boxA;
var boxB;
var ground;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    console.log(windowWidth, windowHeight);
    createCanvas(800, 800);
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
    ground = Bodies.rectangle(0, 700, 1600, 50, { isStatic: true });
    Matter.Engine.run(engine);
    World.add(engine.world, [boxA, ground]);
    Matter.Body.applyForce(boxA, Matter.Vector.create(-1, 1), Matter.Vector.create(0.0001, 0));
}
function draw() {
    background(180);
    Matter.Engine.update(engine);
    var c = color([180, 12, 44]);
    fill(c);
    rect(boxA.position.x, boxA.position.y, 10, 30);
    console.log(boxA.position);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map