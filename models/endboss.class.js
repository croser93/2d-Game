class Endboss extends MovableObject {

    IMAGES_IDLE = [
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_001.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_002.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_003.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_004.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_005.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_006.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_007.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_008.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_009.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_010.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_011.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_012.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_013.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_014.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_015.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_016.png',
            'gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_017.png',
    ];

    IMAGES_DYING = [
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_000.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_001.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_002.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_003.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_004.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_005.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_006.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_007.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_008.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_009.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_010.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_011.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_012.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_013.png',
            'gameassets/Archer/PNG/PNG Sequences/Dying/0_Archer_Dying_014.png',

    ];
    height = 300;
    width = 300;
    y= 100;
    currentImage = 0;
    world;
    live = 100;
    dead = false;
    intervals = []

    hitboxOffsetX = 80;
    hitboxOffsetY = 60;
    hitboxWidth = 140;
    hitboxHeight = 200;

    constructor() {
        super().loadImage('gameassets/Archer/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DYING);
        this.x = 700;
        this.otherDirection = true;
        this.animateBoss();
    }

     animateBoss() {
        const animateBoss = setInterval(() => {
            this.playAnimationLoop(this.IMAGES_IDLE)
         }, 
            1000 / 10);
            this.intervals.push(animateBoss);
        }
    
    stopInterval(){
            this.intervals.forEach(clearInterval)
            this.playAnimationOnce(this.IMAGES_DYING);
        }
}
