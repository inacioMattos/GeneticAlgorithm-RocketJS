interface CreatePopulationDTO {
  engine: Matter.Engine;

  targetPosition: Matter.Vector;
  
  populationNumber: number;

  initialRocketPosition: Matter.Vector;
  rocketSize: Matter.Vector;
  positionLimit: number;
  forceLimit: number;
  TTL?: number;
}

class Population {
  private engine: Matter.Engine;

  private targetPosition: Matter.Vector;
  
  private population: Rocket[];
  private populationNumber: number;
  private initialRocketPosition: Matter.Vector;
  private rocketSize: Matter.Vector;
  private positionLimit: number;
  private forceLimit: number;
  private TTL: number;

  constructor({ engine, targetPosition, populationNumber, initialRocketPosition, rocketSize, positionLimit, forceLimit, TTL }: CreatePopulationDTO) {
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

  private newGeneration() {
    this.population = [];

    for (let i = 0; i < this.populationNumber; i++) {
      this.population.push(new Rocket({
        positionLimit: this.positionLimit,
        forceLimit: this.forceLimit,
        TTL: this.TTL,
        initialPosition: this.initialRocketPosition,
        size: this.rocketSize
      }));
    }
  }

  private getFittest(): Rocket[] {
    // TODO
  }

  private fit(rocket: Rocket): number {
    // TODO
    return Math.random();
  }

  public calc(frameNumber: number) {
    if (frameNumber === this.TTL) {
      this.newGeneration();
    } else {
      this.population.forEach(rocket => rocket.calc());
    }
  }
}