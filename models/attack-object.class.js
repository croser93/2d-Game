class Attack extends MovableObject {


    IMAGE_ATTACK = ['gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_1.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_2.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_3.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_4.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_5.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_6.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_7.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_8.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_9.png',
                    'gameassets/gameassets/Elves/PNG/PNG Sequences/attack/Explosion_10.png',

    ];

    currentImage = 0;
    world;

    hitboxOffsetX = 0;
    hitboxOffsetY = 0;
    hitboxWidth = 0;
    hitboxHeight = 0;
    x = 100;
    y = 100;


    constructor(x, y){
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/attack/Explosion_3.png')
        this.loadImages(this.IMAGE_ATTACK);
        this.trow ()
        this.x = x;
        this.y = y;
        
    }

    trow (){   
        this.speedY = 20 ;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 60)
    }
}