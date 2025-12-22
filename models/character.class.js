class Character extends MovableObject{

    speed = 2;
    IMAGES_IDLE = [
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_000.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_001.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_002.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_003.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_004.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_005.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_006.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_007.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_008.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_009.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_010.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_011.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_012.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_013.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_014.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_015.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_016.png',
            'gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_017.png',
    ];
    world;
    currentImage = 0;

    constructor() {
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/Kicking/0_Dark_Elves_Kicking_000.png')
        this.loadImages(this.IMAGES_IDLE);
    }



    animate() {
          setInterval(() => {
        if(this.world.keyboard.RIGHT) {
            this.x += this.speed;
            this.otherDirection = false;
        }  

        if(this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
        }  
    },1000 / 60);

        if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 1000 / 10);
    }
    }
}