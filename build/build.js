var Population = (function () {
    function Population(_a) {
        var engine = _a.engine, targetPosition = _a.targetPosition, populationNumber = _a.populationNumber, initialRocketPosition = _a.initialRocketPosition, rocketSize = _a.rocketSize, positionLimit = _a.positionLimit, forceLimit = _a.forceLimit, TTL = _a.TTL;
        this.engine = engine;
        this.targetPosition = targetPosition;
        this.populationNumber = populationNumber;
        this.initialRocketPosition = initialRocketPosition;
        this.rocketSize = rocketSize;
        this.positionLimit = positionLimit;
        this.forceLimit = forceLimit;
        this.TTL = TTL || 200;
        this.newGeneration();
    }
    Population.prototype.newGeneration = function () {
        this.population = [];
        for (var i = 0; i < this.populationNumber; i++) {
            this.population.push(new Rocket({
                positionLimit: this.positionLimit,
                forceLimit: this.forceLimit,
                TTL: this.TTL,
                initialPosition: this.initialRocketPosition,
                size: this.rocketSize
            }));
        }
    };
    Population.prototype.getFittest = function () {
    };
    Population.prototype.fit = function (rocket) {
        return Math.random();
    };
    Population.prototype.calc = function (frameNumber) {
        if (frameNumber === this.TTL) {
            this.newGeneration();
        }
        else {
            this.population.forEach(function (rocket) { return rocket.calc(); });
        }
    };
    return Population;
}());
var Rocket = (function () {
    function Rocket(_a) {
        var initialPosition = _a.initialPosition, size = _a.size, positionLimit = _a.positionLimit, forceLimit = _a.forceLimit, ancetrals = _a.ancetrals, _b = _a.TTL, TTL = _b === void 0 ? 200 : _b;
        this.currentFrame = 0;
        this.body = Matter.Bodies.rectangle(initialPosition.x, initialPosition.y, size.x, size.y);
        if (ancetrals) {
            this.mate(ancetrals);
        }
        else {
            this.initialize(positionLimit, forceLimit, TTL);
        }
    }
    Rocket.prototype.initialize = function (positionLimit, forceLimit, TTL) {
        for (var frame = 0; frame < TTL; frame++) {
            this.dna[frame].position.x = Math.random() * (0 - positionLimit) + positionLimit;
            this.dna[frame].position.y = Math.random() * (0 - positionLimit) + positionLimit;
            this.dna[frame].force.x = Math.random() * (0 - forceLimit) + forceLimit;
            this.dna[frame].force.y = Math.random() * (0 - forceLimit) + forceLimit;
        }
    };
    Rocket.prototype.mate = function (ancestrals) {
    };
    Rocket.prototype.calc = function () {
        Matter.Body.applyForce(this.body, this.dna[this.currentFrame].position, this.dna[this.currentFrame].force);
        this.currentFrame++;
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