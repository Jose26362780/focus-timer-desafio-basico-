import 
    {buttonPlay, 
    buttonSet, 
    buttonAddMinutes, 
    buttonReduceMinutes,
    buttonForestAudio,  
    buttonCoffeAudio,
    buttonRainAudio,
    buttonFileplaceAudio,
    } 
    from './elements.js'

export default function ({timer, controls, sound}) {

     buttonSet.addEventListener('click', function() {
      timer.reset();
      timer.updateMinutes(newMinutes, 0)
    });

    buttonPlay.addEventListener('click', function() {
        timer.countdown();
    });

    buttonAddMinutes.addEventListener('click', function() {
      let newMinutes = controls.newMinutes();

      timer.updateMinutes(newMinutes, 0);
    });

    buttonReduceMinutes.addEventListener('click', function() {
      let reduceMinutes = controls.reduceMinutes();

      timer.updateMinutes(reduceMinutes, 0);
    });

    buttonForestAudio.addEventListener('click', function() {
      sound.forestAudio.play();	
      controls.playForest();
    });

    buttonCoffeAudio.addEventListener('click', function() {
      sound.coffeAudio.play();
      controls.playCoffe();
    });

    buttonRainAudio.addEventListener('click', function() {
      sound.rainAudio.play();
      controls.playRain();
    });

    buttonFileplaceAudio.addEventListener('click', function(){
      sound.fileplaceAudio.play();
      controls.playFileplace();
    });

    buttonForest.addEventListener("click", function () {
        if (containerForest.classList.contains("enable")) {
          containerForest.classList.remove("enable");
          sound.bgForest.pause();
          return;
        }
    
        containerForest.classList.add("enable");
        sound.bgForest.play();
      });
    
      buttonRain.addEventListener("click", function () {
        if (containerRain.classList.contains("enable")) {
          containerRain.classList.remove("enable");
          sound.bgRain.pause();
          return;
        }
    
        containerRain.classList.add("enable");
        sound.bgRain.play();
      });
    
      buttonCoffee.addEventListener("click", function () {
        if (containerCoffee.classList.contains("enable")) {
          containerCoffee.classList.remove("enable");
          sound.bgCoffee.pause();
          return;
        }
    
        containerCoffee.classList.add("enable");
        sound.bgCoffee.play();
      });
    
      buttonFireplace.addEventListener("click", function () {
        if (containerFireplace.classList.contains("enable")) {
          containerFireplace.classList.remove("enable");
          sound.bgFireplace.pause();
          return;
        }
    
        containerFireplace.classList.add("enable");
        sound.bgFireplace.play();
      });
    


}

