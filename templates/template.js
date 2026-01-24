function mobileBtn(){
    return `      
        <div id="hud" class="hud">
            <div class="mobileBtnLine content_beg_1440px">
              <div class="mobilBtnfield">
                <button id="btnLeft" class="mobileBtn"><img src="./gameassets/img/icons/arrow-left-square-svgrepo-com.svg" alt="Button Left"/></button>
                <button id="btnRight" class="mobileBtn rotate180deg"><img src="./gameassets/img/icons/arrow-left-square-svgrepo-com.svg" alt="Button Right"/></button>
              </div>
              <div class="mobilBtnfield">
                <button id="btnUp" class="mobileBtn rotate90deg"><img src="./gameassets/img/icons/arrow-left-square-svgrepo-com.svg" alt="Button UP"/></button>
                <button id="btnAttack" class="mobileBtn attackBtn"><img src="./gameassets/img/icons/attack.svg" alt="Button Attack" /></button>
              </div>
            </div>
          </div>`
}

function burgerMenu(current){
    return`
        <div id="burgerDialog" class="${current}">
            <button id="burgerSoundmode"><div id="burgerSoundIcon" class="soundImg sound-off" onclick="toggleSoundmode()"></div></button>
            <button id="burgerFullscreen"><img class="burgerIcon"src="./gameassets/img/icons/fullscreen.png" alt="Fullscreen Button"onclick="fullscreen()"/>
            <button id="burgerInfo"><img class="burgerIcon"src="./gameassets/img/icons/info.png" alt="Info Button"onclick="openInfoDialog()"/></button>
        </div>`
}

function winOrLoseImage(result) {
  return`
        <div class="winScreen"> 
          <img  class="resultImage" src="./gameassets/img/${result}.png" alt="${result} screen">
          <div class="buttonLineWinOrLose">
              <button class="golden-button" onclick="goHome()"><span class="golden-text">Go Home</span></button>
              <button class="golden-button" onclick="restartGame()"><span class="golden-text">Restart</span></button>
          </div>
      </div>`
  
}