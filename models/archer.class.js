class Archer extends MovableObject{

    constructor(){
        super().loadImage('gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png')
        this.x = 500 + Math.random() * 150
    }
    
}