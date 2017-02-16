// This object generates the random numbers that will be assigned to jewels
// and it assigns a random number to the main number
  var  quest1= {
        
      question: "What country is Angkor Wat in?",
      answers: ["Chile", "Norway", "Egypt", "Cambodia" ],
      correctA: "Cambodia",

      askQuestion: function (){

      $("#numberOne").text(this.answers[2]);
      $("#numberTwo").text(this.answers[1]);
      $("#numberThree").text(this.answers[3]);
      $("#numberFour").text(this.answers[0]);
      $("#question").text(this.question);
      // $(".answers").index(this.answers);
      
    }


  };

  var  quest2= {
        
      question: "How many countries does Africa have ?",
      answers: [46, 54, 23, 37 ],
      correctA: 54,

      askQuestion: function (){

      $("#numberOne").text(this.answers[1]);
      $("#numberTwo").text(this.answers[0]);
      $("#numberThree").text(this.answers[2]);
      $("#numberFour").text(this.answers[3]);
      $("#question").text(this.question);
      // $(".answers").index(this.answers);
      
    }


  };

  var  quest3= {
        
      question: "What is the longest river in North America?",
      answers: ["Missouri", "Mississippi", "Yukon", "Rio Grande" ],
      correctA: "Missouri",

      askQuestion: function (){

      $("#numberOne").text(this.answers[3]);
      $("#numberTwo").text(this.answers[1]);
      $("#numberThree").text(this.answers[0]);
      $("#numberFour").text(this.answers[2]);
      $("#question").text(this.question);
      // $(".answers").index(this.answers);
      
    }


  };

  var  quest4= {
        
      question: "What country is Angkor Wat in?",
      answers: ["Chile", "Norway", "Egypt", "Cambodia" ],
      correctA: "Cambodia",

      askQuestion: function (){

      $("#numberOne").text(this.answers[2]);
      $("#numberTwo").text(this.answers[1]);
      $("#numberThree").text(this.answers[3]);
      $("#numberFour").text(this.answers[0]);
      $("#question").text(this.question);
      // $(".answers").index(this.answers);
      
    }


  };

  var  quest5= {
        
      question: "What country is Angkor Wat in?",
      answers: ["Chile", "Norway", "Egypt", "Cambodia" ],
      correctA: "Cambodia",

      askQuestion: function (){

      $("#numberOne").text(this.answers[2]);
      $("#numberTwo").text(this.answers[1]);
      $("#numberThree").text(this.answers[3]);
      $("#numberFour").text(this.answers[0]);
      $("#question").text(this.question);
      // $(".answers").index(this.answers);
      
    }


  };

// //This is my game object that contains the main properties and methods that are used to run.
  var game = {
      correct: 0,    // Stores number of wins
      incorrect: 0,  // Stores number of losses
      answer: null, 
      count: 10,
       //  userNumber: null, //Stores user number as it progresses.
  
      correct: function (){
        this.correct += 1;
        clearInterval(this.counter);
        this.count = null;

         $("#timer").text(0);
         $(".answers").remove();
        $("#question").text("Correct!");

      },

      incorrect: function() {
        this.incorrect += 1;
         clearInterval(this.counter);
        this.count = null;
        $(".answers").remove();
        $("#question").text("Inorrect!");
        $("#timer").text(0);

      },

  
      timer: function () {
        if(this.count > 0) {
          console.log(game.count);
          $("#timer").text( this.count);
          this.count--;
        } 
        else if (this.count === 0){
           console.log(game.count);
          $("#timer").text( this.count);
          clearInterval(this.counter);
          $(".answers").remove();
          $("#question").text("Times Up!");
   
         }
      },
  
      counter: function() {
        //we return the setInterval object to be found to this.counter
        return setInterval(function() {
      
        //since "this" is pointing to window, we have to pass the object's name
        game.timer();
      
      }, 1000);
    }
  };

 

      // displayScore: function() {

      // }
    // };


 




//Waits for document to be ready.
 $(document).ready(function(){

  alert("Press Ok to start. You have 10 seconds to anwser each Question");

  quest1.askQuestion();

  game.timer();
  game.counter();

  

  $(".answers button").on("click", function(){
    
    var answerClick= $(this).attr("id");
    
    console.log("something " + answerClick);
  
    /*If the button clicked has the id of numberThree(correct answer for this question)
    then remove the answers and show correct as a message! Stop the counter and make it zero*/
    if (answerClick === "numberThree"){  
      game.correct();
      // $(".answers").remove();
      // $("#question").text("Correct!");
      // clearInterval(counter);
      $("#timer").text(0);
      
    }

    else if (answerClick !== "numberThree"){   
      
      game.incorrect();

      // clearInterval(counter);
      setTimeout(cambodia, 2000);
      function cambodia(){
        $("#question").text("Cambodia");
      }; 

    }
  });
    

     

  







});


