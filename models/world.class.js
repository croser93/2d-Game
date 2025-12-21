class World {

    character = new Character();
    enemies = [
        new Archer(),
        new Archer(),
    ]
    background = [
        new Background('./gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Background/Background_01.png'),
        new Background('./gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Background/Background_02.png')
    ]
    
    backgroundassets = [
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_04.png', 0),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png', 80),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png', 160),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png', 240),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png', 320),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png', 400),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png', 480),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png', 560),
        new Backgroundassets('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_08.png', 640),
    ]

    backgroundassetsunderworld = [
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_09.png', 0),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png', 80),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png', 160),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png', 240),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png', 320),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png', 400),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png', 480),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png', 560),
        new Backgroundassetsunder('../gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_13.png', 640),
    ]

    ctx;
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();



    }
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //cleart die funktion

        this.addObjectsToMap(this.background)
        this.addObjectsToMap(this.backgroundassets)
        this.addObjectsToMap(this.backgroundassetsunderworld)
        this.addToMap(this.character)

        this.addObjectsToMap(this.enemies)
        

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
    this.ctx.drawImage(item.img, item.x, item.y, item.height, item.width);

    }

}
