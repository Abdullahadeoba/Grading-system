      var song = "audio/failure.mp3"
      var songfail = new Audio(song)

      var pass = "audio/credit.mp3"
      var songcredit = new Audio(pass)

      var Average = "audio/average.mp3"
      var songaverage = new Audio(Average)

      var Credit = "audio/good.mp3"
      var songpass = new Audio(Credit)

      var Good = "audio/pass1.mp3"
      var songgood = new Audio(Good)

      var Not = "audio/notrecognise.mp3"
      var songnot = new Audio(Not)

      var Good = "audio/invalid.mp3"
      var songinvalid = new Audio(Invalid)

      var Excellent = "audio/excellent.mp3"
      var songexcellent = new Audio(Excellent)

      
      function Checkgrade(){
    if (userInput.value == ""){
        Jago.value = "Input Your Score" 
        songinvalid.play()
    }
    else if(userInput.value >=0 && userInput.value<40) {
        Jago.value = "F - Fail🥴"
        songfail.play()
    }
    else if(userInput.value >= 40 && userInput.value < 45){
        Jago.value = "E - Pass😔"
        songpass.play()
        
    }
    else if(userInput.value>=45 && userInput.value<50){
        Jago.value = "D - Average😬"
        songaverage.play()
        
      
    }
    else if(userInput.value>=50 && userInput.value<60){
        Jago.value = "C - Credit🤔"
        songcredit.play()
        
        
    }
    else if(userInput.value>=60 && userInput.value<70){
        Jago.value = "B - Good🙂"
        songgood.play()
       
        
    }

    else if(userInput.value >=70 && userInput.value <=100){
        Jago.value = "A - Excellent😀"
        songexcellent.play()
       
      
    }
   
    else{
        Jago.value = "Not recognised"
        songnot.play()
        

    }
    }