interface DNA {
  position: Matter.Vector;
  force: Matter.Vector;
}

interface CreateRocketDTO {
  initialPosition: Matter.Vector;
  size: Matter.Vector;
  positionLimit: number;
  forceLimit: number;
  ancetrals?: Rocket[];
  TTL?: number;
}

class Rocket {
  private dna: DNA[];
  private currentFrame = 0;
  
  public body: Matter.Body;

  constructor({ initialPosition, size, positionLimit, forceLimit, ancetrals, TTL = 200 }: CreateRocketDTO) {
    this.body = Matter.Bodies.rectangle(initialPosition.x, initialPosition.y, size.x, size.y);
  
    if (ancetrals) {
      this.mate(ancetrals);
    } else {
      this.initialize(positionLimit, forceLimit, TTL);
    }
  }

  public initialize(positionLimit: number, forceLimit: number, TTL: number) {
    for (let frame = 0; frame < TTL; frame++) {
      this.dna[frame].position.x = Math.random() * (0 - positionLimit) + positionLimit;
      this.dna[frame].position.y = Math.random() * (0 - positionLimit) + positionLimit
    
      this.dna[frame].force.x = Math.random() * (0 - forceLimit) + forceLimit;
      this.dna[frame].force.y = Math.random() * (0 - forceLimit) + forceLimit;
    }
  }

  private mate(ancestrals: Rocket[]) {
    // TODO
  }

  public calc() {
    Matter.Body.applyForce(this.body, this.dna[this.currentFrame].position, this.dna[this.currentFrame].force);
    
    this.currentFrame++;
  }
}