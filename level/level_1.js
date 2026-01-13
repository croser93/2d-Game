let levelGenerator ;
let level_1 ;


function initLevel () {
    levelGenerator = new LevelGenerator();
    level_1 = levelGenerator.generateLevel();
    }

class LevelGenerator {
    constructor() {
        this.mapLength = 3600;
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
        this.bossPlatformLength = 416;
        
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
            spikes: 'gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Platformer/Spikes.png',
            backgrounds: [
                './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Background/Background_01.png',
                './gameassets/Levels/DUNGEON CARTOON 2D PLATFORMER TILESET/PNG/Background/Background_02.png',
            ]
        };
    }

    generateLevel() {
        const backgrounds = this.generateBackgrounds();
        const { ground, underground, bridges, spikes } = this.generatePlatforms();
        const enemies = this.generateEnemies([]);
        const collectables = this.generateCollectables([]);
        
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

    generateBackgrounds() {
        const backgrounds = [];
        for (let x = -this.screenWidth; x < this.mapLength + 720; x += this.screenWidth) {
            backgrounds.push(new Background(this.tiles.backgrounds[0], x));
            backgrounds.push(new Background(this.tiles.backgrounds[1], x));
        }
        return backgrounds;
    }

    generatePlatforms() {
        const ground = [];
        const underground = [];
        const bridges = [];
        const spikes = [];
        
        this.generateProceduralPlatforms(ground, underground, bridges, spikes);
        this.generateBossTransition(bridges, spikes);
        this.generateBossPlatform(ground, underground);
        
        return { ground, underground, bridges, spikes };
    }

    generateProceduralPlatforms(ground, underground, bridges, spikes) {
        let x = 0;
        while (x < this.generatedMapEnd) {
            x = this.addPlatformSegment(ground, underground, x);
            if (x < this.generatedMapEnd) {
                x = this.addGapSegment(bridges, spikes, x);
            }
        }
    }

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

    getTileType(index, totalTiles) {
        if (index === 0) {
            return { groundTile: this.tiles.ground.start, underTile: this.tiles.underground.start };
        } else if (index === totalTiles - 1) {
            return { groundTile: this.tiles.ground.end, underTile: this.tiles.underground.end };
        } else {
            return { groundTile: this.tiles.ground.middle, underTile: this.tiles.underground.middle };
        }
    }

    addGapSegment(bridges, spikes, startX) {
        const spikeCount = Math.floor(Math.random() * 5) + 1;
        const gapSize = spikeCount * this.spikeWidth;
        const actualGapSize = Math.min(gapSize, this.generatedMapEnd - startX);
        
        this.addBridges(bridges, startX, actualGapSize);
        this.addSpikes(spikes, startX, actualGapSize);
        
        return startX + actualGapSize;
    }

    addBridges(bridges, startX, gapSize) {
        const bridgeCount = Math.ceil(gapSize / this.bridgeWidth);
        for (let i = 0; i < bridgeCount; i++) {
            const tileX = startX + (i * this.bridgeWidth);
            if (tileX >= this.generatedMapEnd) break;
            const bridge = this.createBridge(tileX, i);
            bridges.push(bridge);
        }
    }

    createBridge(x, index) {
        const bridgeTile = this.tiles.bridge[index % 2];
        const bridge = new Backgroundassets(bridgeTile, x, this.bridgeY);
        bridge.width = this.bridgeWidth;
        bridge.height = this.bridgeWidth;
        return bridge;
    }

    addSpikes(spikes, startX, gapSize) {
        const spikeCount = Math.ceil(gapSize / this.spikeWidth);
        for (let i = 0; i < spikeCount; i++) {
            const tileX = startX + (i * this.spikeWidth);
            if (tileX >= this.generatedMapEnd) break;
            const spike = this.createSpike(tileX);
            spikes.push(spike);
        }
    }

    createSpike(x) {
        const spike = new Backgroundassetsunder(this.tiles.spikes, x, this.spikesY);
        spike.width = this.spikeWidth;
        return spike;
    }

    generateBossTransition(bridges, spikes) {
        spikes.push(this.createSpike(this.bossSpikeX));
        for (let i = 0; i < 9; i++) {
            const tileX = this.bossSpikeX + (i * this.bridgeWidth);
            bridges.push(this.createBridge(tileX, i));
        }
    }

    generateBossPlatform(ground, underground) {
        const tileCount = this.bossPlatformLength / this.tileWidth;
        for (let i = 0; i < tileCount; i++) {
            const tileX = this.bossPlatformStart + (i * this.tileWidth);
            const { groundTile, underTile } = this.getBossTileType(i);
            ground.push(new Backgroundassets(groundTile, tileX, this.groundY));
            underground.push(new Backgroundassetsunder(underTile, tileX, this.undergroundY));
        }
    }

    getBossTileType(index) {
        if (index === 0) {
            return { groundTile: this.tiles.ground.start, underTile: this.tiles.underground.start };
        } else if (index === 5) {
            return { groundTile: this.tiles.ground.end, underTile: this.tiles.underground.end };
        } else {
            return { groundTile: this.tiles.ground.middle, underTile: this.tiles.underground.middle };
        }
    }

    generateEnemies() {
        const enemies = [];
        const enemyCount = Math.floor(Math.random() * 20 + 8);
        
        for (let i = 0; i < enemyCount; i++) {
            const x = 380 + Math.random() * 2800;
            const archer = new Archer();
            archer.x = x;
            enemies.push(archer);
        }
        
        const boss = new Endboss();
        boss.x = 3470;
        enemies.push(boss);
        
        return enemies;
    }

    generateCollectables() {
        const coins = this.generateCoins();
        const strong = this.generateStrong();
        const live = this.generateLive();
        return { coins, strong, live };
    }

    generateCoins() {
        const coins = [];
        for (let i = 0; i < 5; i++) {
            const coin = new CollectableItem();
            coin.x = 200 + Math.random() * (this.mapLength - 400);
            coins.push(coin);
        }
        return coins;
    }

    generateStrong() {
        const strong = [];
        for (let i = 0; i < 3; i++) {
            const mana = new CollectableStrong();
            mana.x = 200 + Math.random() * (this.mapLength - 400);
            strong.push(mana);
        }
        return strong;
    }

    generateLive() {
        const live = [];
        for (let i = 0; i < 3; i++) {
            const health = new CollectableLive();
            health.x = 200 + Math.random() * (this.mapLength - 400);
            live.push(health);
        }
        return live;
    }

    getSafeZones(gaps) {
        const zones = [];
        let lastEnd = 0;
        
        gaps.forEach(gap => {
            if (gap.start - lastEnd > 200) {
                zones.push({ start: lastEnd + 100, end: gap.start - 100 });
            }
            lastEnd = gap.end;
        });
        
        if (this.mapLength - lastEnd > 200) {
            zones.push({ start: lastEnd + 100, end: this.mapLength - 100 });
        }
        return zones;
    }
}
