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

    IMAGES_JUMPING = [
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_000.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_001.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_002.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_003.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_004.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_005.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Loop/0_Dark_Elves_Jump Loop_000.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Loop/0_Dark_Elves_Jump Loop_001.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Loop/0_Dark_Elves_Jump Loop_002.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Loop/0_Dark_Elves_Jump Loop_003.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Loop/0_Dark_Elves_Jump Loop_004.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Loop/0_Dark_Elves_Jump Loop_005.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_005.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_004.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_003.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_001.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_002.png',
            'gameassets/Elves/PNG/PNG Sequences/Jump Start/0_Dark_Elves_Jump Start_000.png',
    ];

    IMAGES_HURT = [
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_000.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_001.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_002.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_003.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_004.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_005.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_006.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_007.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_008.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_009.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_010.png',
        'gameassets/Elves/PNG/PNG Sequences/Hurt/0_Dark_Elves_Hurt_011.png',
    ]

        IMAGES_DYING = [
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_000.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_001.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_002.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_003.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_004.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_005.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_006.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_007.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_008.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_009.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_010.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_011.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_012.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_013.png',
        'gameassets/Elves/PNG/PNG Sequences7Dying70_Dark_Elves_Dying_014.png',  
    ]


    currentImage = 0;
    world;
    endOfMap = 620
    live = 100;


    constructor() {
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/Kicking/0_Dark_Elves_Kicking_000.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.animate();
        this.applyGravity();

    }


    animate() {
        setInterval(() => {

            if (this.world.keyboard.RIGHT && this.x < this.endOfMap) {
                this.moveRight()
                this.otherDirection = false;
            }  

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft()
                this.otherDirection = true;
            }

            if(this.world.keyboard.UP && !this.isAboveGround()){
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        },1000 / 60);

        
        setInterval(() => {
        if (this.isAboveGround()) {
           this.playAnimation(this.IMAGES_JUMPING)  
        }else{
            this.playAnimation(this.IMAGES_IDLE)
            }
        }, 
        1000 / 10);
        
    }

    hit() {
        this.live -= 5 ;
        if (this.live < 0) {
            this.live = 0
            
        }else{

        this.playAnimation(this.IMAGES_HURT)   
        }
    }
}

