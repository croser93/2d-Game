let levelGenerator;
let level_1;

/**
 * Initializes the level by creating a level generator and generating the level.
 */
function initLevel() {
    levelGenerator = new LevelGenerator();
    level_1 = levelGenerator.generateLevel();
}

class LevelGenerator {
    constructor() {
        this.mapLength = 3750;
        this.tileWidth = 80;
        this.screenWidth = 720;
        this.groundY = 340;
        this.undergroundY = 420;
        this.bridgeY = 340;
        this.spikesY = 400;
        this.bridgeWidth = 16;
        this.spikeWidth = 80;
        this.generatedMapEnd = 3040;
        this.bossSpikeX = 3040;
        this.bossPlatformStart = 3184;
        this.bossPlatformLength = 566;
        
        this.enemyCount = this.randomBetween(15, 25);
        this.coinCount = this.randomBetween(5, 10);
        this.strongCount = this.randomBetween(2, 3)
        this.liveCount = this.randomBetween(2, 4)
        
        this.tiles = {
            ground: {
                start: './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_04.png',
                middle: './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_02.png',
                end: './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_08.png',
            },
            underground: {
                start: './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_09.png',
                middle: './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_06.png',
                end: './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Ground_13.png',
            },
            bridge: [
                './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Bridge_01.png',
                './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Bridge_02.png',
            ],
            spikes: './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Spikes.png',
            backgrounds: [
                './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Background/Background_01.png',
                './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Background/Background_02.png',
            ]
        };
    }

    /**
 * Generates a random number between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random number between min and max.
 */
    randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }

/**
 * Generates the complete level with all elements.
 * @returns {Level} The generated level object.
 */
    generateLevel() {
        const backgrounds = this.generateBackgrounds();
        const { ground, underground, bridges, spikes } = this.generatePlatforms();
        const enemies = this.generateEnemies();
        const collectables = this.generateCollectables();
        return new Level(
            enemies,
            backgrounds,
            ground,
            underground.concat(bridges).concat(spikes),
            collectables.coins,
            collectables.strong,
            collectables.live
        );
    }

/**
 * Generates background layers for the level.
 * @returns {Array} Array of background objects.
 */
    generateBackgrounds() {
        const backgrounds = [];
        for (let x = -this.screenWidth; x < this.mapLength + 720; x += this.screenWidth) {
            backgrounds.push(new Background(this.tiles.backgrounds[0], x));
            backgrounds.push(new Background(this.tiles.backgrounds[1], x));
        }
        return backgrounds;
    }

/**
 * Generates all platform elements including ground, underground, bridges, and spikes.
 * @returns {Object} Object containing arrays of ground, underground, bridges, and spikes.
 */
    generatePlatforms() {
        const ground = [];
        const underground = [];
        const bridges = [];
        const spikes = []
        this.generateProceduralPlatforms(ground, underground, bridges, spikes);
        this.generateBossTransition(bridges, spikes);
        this.generateBossPlatform(ground, underground)
        return { ground, underground, bridges, spikes };
    }

/**
 * Generates procedural platforms with gaps for the main level area.
 * @param {Array} ground - Array to store ground tiles.
 * @param {Array} underground - Array to store underground tiles.
 * @param {Array} bridges - Array to store bridge tiles.
 * @param {Array} spikes - Array to store spike objects.
 */
    generateProceduralPlatforms(ground, underground, bridges, spikes) {
        let x = 0;
        while (x < this.generatedMapEnd) {
            x = this.addPlatformSegment(ground, underground, x);
            if (x < this.generatedMapEnd) {
                x = this.addGapSegment(bridges, spikes, x);
            }
        }
    }

/**
 * Adds a platform segment to the level.
 * @param {Array} ground - Array to store ground tiles.
 * @param {Array} underground - Array to store underground tiles.
 * @param {number} startX - The starting x-coordinate.
 * @returns {number} The ending x-coordinate of the platform segment.
 */
    addPlatformSegment(ground, underground, startX) {
        const platformLength = Math.floor(Math.random() * 5 + 3) * this.tileWidth;
        const actualLength = Math.min(platformLength, this.generatedMapEnd - startX);
        const tileCount = Math.floor(actualLength / this.tileWidth);
        
        for (let i = 0; i < tileCount; i++) {
            const tileX = startX + (i * this.tileWidth);
            const { groundTile, underTile } = this.getTileType(i, tileCount);
            ground.push(new Backgroundassets(groundTile, tileX, this.groundY));
            underground.push(new Backgroundassetsunder(underTile, tileX, this.undergroundY));
        }
        return startX + actualLength;
    }

/**
 * Determines the tile type based on position in the platform.
 * @param {number} index - The current tile index.
 * @param {number} totalTiles - The total number of tiles in the platform.
 * @returns {Object} Object containing groundTile and underTile paths.
 */
    getTileType(index, totalTiles) {
        if (index === 0) {
            return { groundTile: this.tiles.ground.start, underTile: this.tiles.underground.start };
        } else if (index === totalTiles - 1) {
            return { groundTile: this.tiles.ground.end, underTile: this.tiles.underground.end };
        } else {
            return { groundTile: this.tiles.ground.middle, underTile: this.tiles.underground.middle };
        }
    }

/**
 * Adds a gap segment with bridges and spikes.
 * @param {Array} bridges - Array to store bridge tiles.
 * @param {Array} spikes - Array to store spike objects.
 * @param {number} startX - The starting x-coordinate.
 * @returns {number} The ending x-coordinate of the gap segment.
 */
    addGapSegment(bridges, spikes, startX) {
        const spikeCount = Math.floor(Math.random() * 5) + 1;
        const gapSize = spikeCount * this.spikeWidth;
        const actualGapSize = Math.min(gapSize, this.generatedMapEnd - startX);
        this.addBridges(bridges, startX, actualGapSize);
        this.addSpikes(spikes, startX, actualGapSize);
        return startX + actualGapSize;
    }

/**
 * Adds bridge tiles across a gap.
 * @param {Array} bridges - Array to store bridge tiles.
 * @param {number} startX - The starting x-coordinate.
 * @param {number} gapSize - The size of the gap.
 */
    addBridges(bridges, startX, gapSize) {
        const bridgeCount = Math.ceil(gapSize / this.bridgeWidth);
        for (let i = 0; i < bridgeCount; i++) {
            const tileX = startX + (i * this.bridgeWidth);
            if (tileX >= this.generatedMapEnd) break;
            const bridge = this.createBridge(tileX, i);
            bridges.push(bridge);
        }
    }

/**
 * Creates a bridge tile object.
 * @param {number} x - The x-coordinate.
 * @param {number} index - The bridge index for alternating tiles.
 * @returns {Backgroundassets} The bridge object.
 */
    createBridge(x, index) {
        const bridgeTile = this.tiles.bridge[index % 2];
        const bridge = new Backgroundassets(bridgeTile, x, this.bridgeY);
        bridge.width = this.bridgeWidth;
        bridge.height = this.bridgeWidth;
        return bridge;
    }

/**
 * Adds spike objects across a gap.
 * @param {Array} spikes - Array to store spike objects.
 * @param {number} startX - The starting x-coordinate.
 * @param {number} gapSize - The size of the gap.
 */
    addSpikes(spikes, startX, gapSize) {
        const spikeCount = Math.ceil(gapSize / this.spikeWidth);
        for (let i = 0; i < spikeCount; i++) {
            const tileX = startX + (i * this.spikeWidth);
            if (tileX >= this.generatedMapEnd) break;
            const spike = this.createSpike(tileX);
            spikes.push(spike);
        }
    }

/**
 * Creates a spike object.
 * @param {number} x - The x-coordinate.
 * @returns {Backgroundassetsunder} The spike object.
 */
    createSpike(x) {
        const spike = new Backgroundassetsunder(this.tiles.spikes, x, this.spikesY);
        spike.width = this.spikeWidth;
        return spike;
    }

/**
 * Generates the transition area before the boss arena.
 * @param {Array} bridges - Array to store bridge tiles.
 * @param {Array} spikes - Array to store spike objects.
 */
    generateBossTransition(bridges, spikes) {
        spikes.push(this.createSpike(this.bossSpikeX));
        for (let i = 0; i < 9; i++) {
            const tileX = this.bossSpikeX + (i * this.bridgeWidth);
            bridges.push(this.createBridge(tileX, i));
        }
    }

/**
 * Generates the boss arena platform.
 * @param {Array} ground - Array to store ground tiles.
 * @param {Array} underground - Array to store underground tiles.
 */
    generateBossPlatform(ground, underground) {
        const tileCount = this.bossPlatformLength / this.tileWidth;
        for (let i = 0; i < tileCount; i++) {
            const tileX = this.bossPlatformStart + (i * this.tileWidth);
            const { groundTile, underTile } = this.getBossTileType(i);
            ground.push(new Backgroundassets(groundTile, tileX, this.groundY));
            underground.push(new Backgroundassetsunder(underTile, tileX, this.undergroundY));
        }
    }

/**
 * Determines the tile type for the boss platform.
 * @param {number} index - The current tile index.
 * @returns {Object} Object containing groundTile and underTile paths.
 */
    getBossTileType(index) {
        if (index === 0) {
            return { groundTile: this.tiles.ground.start, underTile: this.tiles.underground.start };
        } else if (index === 7) {
            return { groundTile: this.tiles.ground.end, underTile: this.tiles.underground.end };
        } else {
            return { groundTile: this.tiles.ground.middle, underTile: this.tiles.underground.middle };
        }
    }

/**
 * Generates all enemy objects for the level.
 * @returns {Array} Array of enemy objects.
 */
    generateEnemies() {
        const enemies = [];
        
        for (let i = 0; i < this.enemyCount; i++) {
            enemies.push(new Archer());
        }
        enemies.push(new Endboss());
        return enemies;
    }

/**
 * Generates all collectable items for the level.
 * @returns {Object} Object containing arrays of coins, strong, and live collectables.
 */
    generateCollectables() {
        const coins = [];
        const strong = [];
        const live = [];
        
        for (let i = 0; i < this.coinCount; i++) {
            coins.push(new CollectableItem());
        }    
        for (let i = 0; i < this.strongCount; i++) {
            strong.push(new CollectableStrong());
        }
        for (let i = 0; i < this.liveCount; i++) {
            live.push(new CollectableLive());
        }
        return { coins, strong, live };
    }
}
