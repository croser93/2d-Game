class Character extends MovableObject{

    speed = 2;
    currentImage = 0;
    world;
    endOfMap = 3750;
    live = 100000;
    mana = 50;
    coin = 20;
    lastHit;
    dead = false
    intervals = [];
    x = 3000

    walkSound = SOUNDS.character.WALKING
    hurtSound = SOUNDS.character.HURT
    deadSound = SOUNDS.character.DEAD
    idleSound = SOUNDS.character.LONG_IDLE
    jumpSound = SOUNDS.character.JUMPING

    IDLE = MOVABELS.character.IMAGES_IDLE
    WALK = MOVABELS.character.IMAGES_WALK
    HURT = MOVABELS.character.IMAGES_HURT
    DYING = MOVABELS.character.IMAGES_DYING
    JUMPING = MOVABELS.character.IMAGES_JUMPING
    LONG_IDLE = MOVABELS.character.IMAGES_LONG_IDLE

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
        this.loadImages(this.IDLE);
        this.loadImages(this.WALK);
        this.loadImages(this.HURT);
        this.loadImages(this.DYING);
        this.loadImages(this.JUMPING);
        this.loadImages(this.LONG_IDLE);

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
        this.playAnimationLoop(this.WALK);
        playSound(this.walkSound);

    }

    dead(){
        this.playAnimationOnce(this.DYING);   
        playSound(this.deadSound)     
    }

    jump(){
      this.playAnimationLoop(this.JUMPING);
        playSound(this.jumpSound);  
    }

    isHurtDamage(){
        this.playAnimationLoop(this.HURT);
        playSound(this.hurtSound);  
    }

    longIdle(){
        this.playAnimationOnce(this.LONG_IDLE);
        
    }

    idle(){
        this.playAnimationLoop(this.IDLE); 
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

