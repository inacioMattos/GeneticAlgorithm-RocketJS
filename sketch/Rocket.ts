interface SingleDNA {
  position: Matter.Vector;
  force: Matter.Vector;
}

interface DNA {
  frame: SingleDNA[];
}

interface CreateRocketDTO {
  body: Matter.Body;
  ancetrals?: Rocket[];
  
}

class Rocket {
  private dna: DNA;
  public body: Matter.Body;

  constructor({ body, ancetrals }: CreateRocketDTO) {
    this.body = body;

    if (ancetrals) {
      this.mate(ancetrals);
    } else {
      this.initialize()
    }
  }

  public initialize() {

  }

  private mate(ancestrals: Rocket[]) {
    // TODO
  }
}