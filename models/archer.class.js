class Archer extends MovableObject{
    
        IMAGES_IDLE = [
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_001.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_002.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_003.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_004.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_005.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_006.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_007.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_008.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_009.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_010.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_011.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_012.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_013.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_014.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_015.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_016.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_017.png',
        ];
        
        IMAGES_WALK = [
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_000.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_001.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_002.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_003.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_004.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_005.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_006.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_007.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_008.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_009.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_010.png',
            'gameassets/Archer_2/PNG/PNG Sequences/Running/0_Archer_Running_011.png',
    ];

    world;
    currentImage = 0;

    constructor(){
        super().loadImage('../gameassets/Archer_2/PNG/PNG Sequences/Idle/0_Archer_Idle_000.png')
        this.x = 500 + Math.random() * 150

        this.loadImages(this.IMAGES_WALK);
        this.speed = 0.15 + Math.random() * 0.2; 
        this.otherDirection = true;
        this.animateEnemiesRunLeft()
        this.applyGravity();
        

        
    }

        animateEnemiesRunLeft() {
            setInterval(() => {
                this.playAnimation(this.IMAGES_WALK)
            }, 1000 / 10);

            setInterval(() =>{
            this.moveLeft();
            }, 1000 / 60);
            
        }
    
}