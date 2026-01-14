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

    IMAGES_LONG_IDLE = [
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_000.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_001.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_002.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_003.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_004.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_005.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_006.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_007.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_008.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_009.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_010.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_011.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_012.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_013.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_014.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_015.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_016.png',
        'gameassets/Elves/PNG/PNG Sequences/Idle Blinking/0_Dark_Elves_Idle Blinking_017.png',
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
    ];

        IMAGES_DYING = [
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_000.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_001.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_002.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_003.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_004.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_005.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_006.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_007.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_008.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_009.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_010.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_011.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_012.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_013.png',
        'gameassets/Elves/PNG/PNG Sequences/Dying/0_Dark_Elves_Dying_014.png',  
    ];


    currentImage = 0;
    world;
    endOfMap = 3600;
    live = 100;
    mana = 50;
    coin = 20;
    lastHit;
    dead = false
    intervals = [];

    walkSound = SOUNDS.character.WALKING
    hurtSound = SOUNDS.character.HURT
    deadSound = SOUNDS.character.DEAD
    idleSound = SOUNDS.character.LONG_IDLE
    jumpSound = SOUNDS.character.JUMPING

    

    hitboxOffsetX = 20;
    hitboxOffsetY = 10;
    hitboxWidth = 60;
    hitboxHeight = 80;


    constructor() {
        super().loadImage('gameassets/Elves/PNG/PNG Sequences/Idle/0_Dark_Elves_Idle_000.png')
        this.loadImageChar()
        this.animate();
        this.applyGravity();
        this.startIdleTimer();
    }

    loadImageChar(){
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_LONG_IDLE);

    }


    animate() {
        if (!this.dead) {
        this.keyboardInterval();
        this.playAnimationKeyboard ();
        }   
    }  

   keyboardInterval() {
        let animateInterval = setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.endOfMap) {
                this.moveRight()
                this.otherDirection = false;
            }  
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft(2)
                this.otherDirection = true;
            }
            if(this.world.keyboard.UP && !this.isAboveGround()){
                this.setSpeedY(15)
            }
            this.world.camera_x = -this.x + 100;
        },1000 / 60);
        this.intervals.push(animateInterval);
    }
    

        playAnimationKeyboard () {
        let animationInterval = setInterval(() => {
        if (this.isAboveGround()) 
           this.jump(); 
        else if (this.isHurt()){
            this.isHurtDamage()}
        else if((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.isAboveGround)
            this.walk ();
        else if(this.live <= 0)
            this.dead()  
        else if (this.isLongIdle) 
        this.longIdle()  
        else
        this.idle()   
        },     
      1000 / 10);
      this.intervals.push(animationInterval);      
    }

    walk (){
        this.playAnimationLoop(this.IMAGES_WALK);
        playSound(this.walkSound);

    }

    dead(){
        this.playAnimationOnce(this.IMAGES_DYING);   
        playSound(this.deadSound)     
    }

    jump(){
      this.playAnimationLoop(this.IMAGES_JUMPING);
        playSound(this.jumpSound);  
    }

    isHurtDamage(){
        this.playAnimationLoop(this.IMAGES_HURT);
        playSound(this.hurtSound);  
    }

    longIdle(){
        this.playAnimationOnce(this.IMAGES_LONG_IDLE);
        
    }

    idle(){
        this.playAnimationLoop(this.IMAGES_IDLE); 
    }
    


    hit(damage) {
        this.live -= damage;  
        if (this.live <= 0) {
            this.live = 0
            this.dead = true;       
        }else
            this.lastHit = new Date().getTime();     
    }

    collect(type, amount){
        this[type] += amount;
        if (this[type] > 100) {
            this[type] = 100    
        }    
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit
        timepassed = timepassed / 1000
        return timepassed < 0.2
    }

    startIdleTimer() {
        this.idleTime = 0;
        this.isLongIdle = false;
    
    let longIdleInterval = setInterval(() => {
            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && 
                !this.world.keyboard.SPACE && !this.world.keyboard.UP) {
                this.idleTime += 100;
                if (this.idleTime >= 15000 && !this.isLongIdle) {
                    this.isLongIdle = true;
                    // playSound(this.idleSound);
                }
            } else {
                this.resetIdle();
                // playSound(this.idleSound);
            }
        }, 100);
        this.intervals.push(longIdleInterval);
    }

    resetIdle() {
    this.idleTime = 0;
    this.isLongIdle = false;

    }

}

