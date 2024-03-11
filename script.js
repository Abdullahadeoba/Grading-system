var song = "failure.mp3"
      var songfail = new Audio(song)

      var pass = "credit.mp3"
      var songcredit = new Audio(pass)

      var Average = "average.mp3"
      var songaverage = new Audio(Average)

      var Credit = "pass1.mp3"
      var songpass = new Audio(Credit)

      var Good = "good.mp3"
      var songgood = new Audio(Good)

      var Excellent = "audience clapping.mp3"
      var songexcellent = new Audio(Excellent)
      function gradeMe(){
        
    if (scoreOfUser.value == ""){
        Jago.value = "INVALID"
    }
    else if(scoreOfUser.value >=0 && scoreOfUser.value<40) {
        Jago.value = "F - Fail🥴"
        songfail.play()
    }
    else if(scoreOfUser.value >= 40 && scoreOfUser.value < 45){
        Jago.value = "E - Pass😔"
        songpass.play()
        
    }
    else if(scoreOfUser.value>=45 && scoreOfUser.value<50){
        Jago.value = "D - Average😬"
        songaverage.play()
        
      
    }
    else if(scoreOfUser.value>=50 && scoreOfUser.value<60){
        Jago.value = "C - Credit🤔"
        songcredit.play()
        
        
    }
    else if(scoreOfUser.value>=60 && scoreOfUser.value<70){
        Jago.value = "B - Good🙂"
        songgood.play()
       
        
    }

    else if(scoreOfUser.value >=70 && scoreOfUser.value <=100){
        Jago.value = "A - Excellent😀"
        songexcellent.play()
       
      
    }
   
    else{
        Jago.value = "Not recognised"
        

    }
    }