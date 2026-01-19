class Archer extends MovableObject{
    world;
    currentImage = 0;
    hitboxOffsetX = 27;
    hitboxOffsetY = 25;
    hitboxWidth = 45;
    hitboxHeight = 60;
    damageMultiplier = 1.8;
    y = 260
    live = 100;
    dead = false;
    intervals = [];
    damage = 5;

    IDLE = MOVABELS.archer.IMAGES_IDLE
    WALK = MOVABELS.archer.IMAGES_WALK
    DYING = MOVABELS.archer.IMAGES_DYING

    SOUND = SOUNDS.enemies.SCREAM


    constructor(){
        super().loadImage('gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png')
        this.loadImages(this.IDLE);
        this.loadImages(this.WALK);
        this.loadImages(this.DYING);
        this.speed = 0.15 + Math.random() * 1.5; 
        this.x = 400 + Math.random() * 3000;
        this.otherDirection = true;
        // this.animateEnemiesRunLeft()
        this.applyGravity();
    }

        animateEnemiesRunLeft() {
            const enemiesAnimationInterval = setInterval(() => {
                this.playAnimationLoop(this.WALK)    
       
            }, 1000 / 10 );
            const enemiesLeftInterval = setInterval(() =>{ 
            this.moveLeft();   
            this.playRandomEnemySound();

            }, 1000 / 60);
            this.intervals.push(enemiesAnimationInterval);
            this.intervals.push(enemiesLeftInterval);            
        }

        stopInterval(){
            this.intervals.forEach(clearInterval)
            this.playAnimationOnce(this.DYING);
        }

        playRandomEnemySound() {
            let random = Math.floor(Math.random() * 1000) === 0 ? 1 : 0;
            if (random >= 1 && !this.dead){
            playSound(this.SOUND)
            }
            
            
        
        }
}
