class World {
    
    level_1 = level_1
    character = new Character();
    enemies = level_1.enemies;
    background = level_1.background;
    backgroundassets = level_1.backgroundassets;
    backgroundassetsunderworld = level_1.backgroundassetsunderworld;
    statusBar = new StatusBar();
    manaBar = new ManaBar();
    collecableBar = new CollectableBar();
    coins = new CollectableItem();
    strong = new CollectableStrong();
    attack = [];
   
    

    keyboard;
    ctx;
    camera_x = 0;
    constructor(canvas, keyboard){
        this.setWorld();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.draw();
        this.run(); 
    }
    
    
    setWorld() {
        this.character.world = this; 
    }
    
    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkAttack();
            
        }, 60
        )
    }

    checkCollisions(){
    this.level_1.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)){
                    this.character.hit()
                    this.statusBar.setPercentage(this.character.live)                       
                }})} 


    checkAttack() {
    if (this.keyboard.SPACE) {
        let newattack = new Attack(this.character.x, this.character.y);
        this.attack.push(newattack);

        this.keyboard.SPACE = false;
    }
}

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //cleart die funktion

        this.ctx.translate(this.camera_x, 0)

        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.backgroundassets);
        this.addObjectsToMap(this.backgroundassetsunderworld);
        this.addObjectsToMap(this.attack);
        this.addToMap(this.character);
        this.addToMap(this.coins)
        this.addToMap(this.strong)

        
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.manaBar);
        this.addToMap(this.collecableBar);
        this.ctx.translate(this.camera_x, 0)


        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x, 0);
        

        // Draw wird immer wieder aufgrufen / this funktioniert nicht mehr, daher wird es in eine variable gespeichert
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        });

    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o)
        })

    }

    addToMap(item, x) {
        if (item.otherDirection) {
            this.ctx.save();
            this.ctx.translate(item.width, 0);
            this.ctx.scale(-1, 1);
            item.x = item.x * -1;    
        }
        
        item.drawItem(this.ctx);
        item.drawFrame(this.ctx)

        if (item.otherDirection) {
            item.x = item.x * -1 ;
            this.ctx.restore();   
        }

    }

}
