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

    IMAGES_WALK = [
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_000.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_001.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_002.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_003.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_004.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_005.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_006.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_007.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_008.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_009.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_010.png',
            'gameassets/Elves/PNG/PNG Sequences/Running/0_Dark_Elves_Running_011.png',
    ];

    currentImage = 0;
    world;
    endOfMap = 620
    movement = this.IMAGES_IDLE

    constructor() {
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/Kicking/0_Dark_Elves_Kicking_000.png')
        this.loadImages(this.movement);
        this.animate();

    }


    animate() {
        setInterval(() => {

            if (this.world.keyboard.RIGHT && this.x < this.endOfMap) {
                this.x += this.speed;
                this.otherDirection = false;
            }  

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        },1000 / 60);

        {

        
            setInterval(() => {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageChache[path];
                this.currentImage++;
            }, 
            1000 / 10);
        }
    }
}

