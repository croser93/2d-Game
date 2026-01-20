class Endboss extends MovableObject {
    height = 300;
    width = 300;
    y = 100;
    currentImage = 0;
    world;
    live = 250;
    dead = false;
    intervals = []
    firstContact = false
    world;
    damage = 20;
    arenaLeft = 3150;
    arenaRight = 3600;
    x = 3600;
    walkSpeed = 3;
    jumpSpeed = 7
   

    hitboxOffsetX = 80;
    hitboxOffsetY = 60;
    hitboxWidth = 140;
    hitboxHeight = 200;

    IDLE = MOVABELS.boss.IMAGES_IDLE
    WALK = MOVABELS.boss.IMAGES_WALK
    DYING = MOVABELS.boss.IMAGES_DYING
    ATTACK = MOVABELS.boss.IMAGES_ATTACK
    JUMP = MOVABELS.boss.IMAGES_JUMP

    SCREAM = SOUNDS.boss.SCREAM
    SLASH = SOUNDS.boss.SLASH
    JUMPING = SOUNDS.boss.JUMP

    intervals = [];

    constructor() {
        super().loadImage('gameassets/Hell_Knight/PNG/PNG Sequences/Idle/0_Hell_Knight_Idle_000.png')
        this.loadImages(this.IDLE);
        this.loadImages(this.DYING);
        this.loadImages(this.ATTACK);
        this.loadImages(this.WALK);
        this.loadImages(this.JUMP);
        this.currentAction = null;
        this.actionCounter = 0;
        this.actionRepeats = 0;
        this.applyGravity();
        this.animate();
        this.attackSoundPlayed = false;
        this.jumpSoundPlayed = false;
    }

 /**
 * Checks if the endboss is above the ground level.
 * @returns {boolean} True if above ground, false otherwise.
 */
    isAboveGround(){    
        return this.y < 90;
    }

/**
 * Triggers the first contact event when the character enters the boss arena.
 */    
    firstContactWithBoss(){
        if (world.character.x >= 3150 && !this.firstContact){
            playSound(this.SCREAM)
            this.firstContact = true 
        } else return 
    }

/**
 * Main animation loop for the endboss behavior.
 */
    animate() {
    let bossInterval = setInterval(() => {
    this.firstContactWithBoss()
    if(this.firstContact)
            if ((this.actionCounter >= this.actionRepeats) && this.firstContact)
                this.chooseRandomAction();
            
            this.otherDirection = true;
            this.executeCurrentAction();
            this.actionCounter++;
        }, 1000 / 20);
         this.intervals.push(bossInterval)
    }

/**
 * Randomly selects the next action for the endboss.
 */
    chooseRandomAction() {
        const random = Math.random();
        
        if (random < 0.3) {
            this.currentAction = 'walk';
            this.actionRepeats = Math.floor(Math.random() * 20) + 10;
            this.walkDirection = Math.random() < 0.5 ? -1 : 1;
        } else if (random < 0.5 && this.y === 100) {
            this.currentAction = 'jump';
            this.actionRepeats = 30;
        } else if (random < 0.75) {
            this.currentAction = 'attack';
            this.actionRepeats = this.ATTACK.length * 1;
        } else {
            this.currentAction = 'idle';
            this.actionRepeats = Math.floor(Math.random() * 30) + 20;
        }
        this.actionCounter = 0;
    }

/**
 * Executes the current action based on the endboss state.
 */    
    executeCurrentAction() {
        switch(this.currentAction) {
            case 'walk':
                this.walkInArena();
                break;
            case 'idle':
                this.idleState();
                break;
            case 'attack':
                this.attackState();
                break;
            case 'jump':
                this.jumpState();
                break;
        }
    }

/**
 * Handles the walking behavior within the arena boundaries.
 */
    walkInArena() {
        if (this.walkDirection === -1 && this.x >= this.arenaLeft) 
            this.inArenaLeft(this.walkSpeed)
        else if (this.walkDirection === 1 && this.x <= this.arenaRight) 
            this.inArenaRight(this.walkSpeed) 
        this.playAnimationLoop(this.WALK);
        this.returnHitbox
    }

/**
 * Resets the hitbox after Attack to default values.
 */
    returnHitbox(){
    this.hitboxOffsetX = 80;
    this.hitboxOffsetY = 60;
    this.hitboxWidth = 140;
    this.hitboxHeight = 200;
    }

/**
 * Moves the endboss to the left within the arena.
 * @param {number} speed - The movement speed.
 */
    inArenaLeft(speed){
        this.x -= speed;
        this.otherDirection = true;
    }

/**
 * Moves the endboss to the right within the arena.
 * @param {number} speed - The movement speed.
 */
    inArenaRight(speed){
        this.x += speed;
        this.otherDirection = false;
    }

/**
 * Handles the attack state animation and hitbox changes.
 */
    attackState() {
        this.attackSoundPlayed = false;
        this.isAttacking = true;
        this.hitboxOffsetX = 20;
        this.hitboxWidth = 200;
        this.playAnimationLoop(this.ATTACK);
        this.playSoundOnce(this.SLASH, 'attackSoundPlayed');
    }

/**
 * Handles the jump state with directional movement.
 */
    jumpState() {
        this.jumpDirectionX = this.jumpingCalculation();
        this.returnHitbox();
        
        if (this.jumpDirectionX === -1 && this.x > this.arenaLeft) 
            this.inArenaLeft(this.jumpSpeed);
         else if (this.jumpDirectionX === 1 && this.x < this.arenaRight) 
            this.inArenaRight(this.jumpSpeed);
        
        this.playAnimationLoop(this.JUMP);
        this.playSoundOnce(this.JUMPING, 'jumpSoundPlayed');
    }

/**
 * Calculates the jump direction and initiates the jump.
 * @returns {number} The jump direction (-1 for left, 1 for right).
 */
    jumpingCalculation(){
        if (this.actionCounter === 0 && !this.isAboveGround()) {
            this.speedY = 22;
            this.jumpSoundPlayed = false;
            this.jumpDirectionX = Math.random() < 0.5 ? -1 : 1;
            if ((this.jumpDirectionX === -1 && this.x <= this.arenaLeft) || 
                (this.jumpDirectionX === 1 && this.x >= this.arenaRight)) {
                this.jumpDirectionX *= -1;
            }       
        }
        return this.jumpDirectionX;
    }

/**
 * Handles the idle state animation and hitbox reset.
 */
    idleState() {
        this.isAttacking = false;
        this.hitboxOffsetX = 80;
        this.hitboxWidth = 140;
        this.playAnimationLoop(this.IDLE);
    }

/**
 * Plays a sound once using a flag to prevent repeated playback.
 * @param {string} sound - The sound to play.
 * @param {string} flagName - The flag name to track if sound was played.
 */
    playSoundOnce(sound, flagName) {
        if (!this[flagName]) {
            playSound(sound);
            this[flagName] = true;
        }
    }

/**
 * Stops all intervals and plays the dying animation.
 */
    stopInterval(){
        this.intervals.forEach(clearInterval);
        this.playAnimationOnce(this.DYING);}


}
