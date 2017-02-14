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
       //  userNumber: null, //Stores user number as it progresses.
  
      gameCorrect: function (){
        this.correct += 1;
      },

      gameIncorrect: function() {
        this.incorrect += 1;
      },

      // displayScore: function() {

      // }
    };

//     var timer = {

//       count: 10,

//       counter: setInterval(timer, 1000),

//         runTimer: function(){
          
//          this.count=this.count-1;
//           console.log(this.count);
//           if (this.count <= 0)
//           {
//           clearInterval(counter);
//           alert("times up")
//           }

//           $("#timer").text("Time Remaining " + this.count);

//         }

//      };
//       // }
  
// timer.runTimer();
 




//Waits for document to be ready.
 $(document).ready(function(){

  alert("Press Ok to start. You have 10 seconds to anwser each Question");

  quest1.askQuestion();

  var count=5;

  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer()
  {
    count=count-1;
    if (count <= 0)
    {
     clearInterval(counter);
     alert("times up")
    }

    $("#timer").text( count);

  }

//check for on answrs

  $(".answers button").on("click", function(){
  var answerClick= $(this).attr("id");
  console.log("something " + answerClick);
  });
  


});


//   //Runs start game method and clears wins losses.
//   game.startGame();
  
//   //Runs method to generate random values for jewels.
//   randomJewel.initJewels();

//   // This function looks for a click among the jewels buttons.
//   $("#jewels button").on("click", function() {

//     //This variable selects the specific button pressed (this) and gets the value 
//     //through the id (attr)
//     var gem = $(this).attr("id");
    
//     //Logs the color of the jewel that is clicked
//     console.log("Color: " + gem);

//     //Logs the value of the jewel that is clicked
//     console.log("Color value: " + randomJewel[gem]);

//     //This takes the current userNumber and adds it to the old 
//     //userNumber to create the new userNumber 
//     game.userNumber += randomJewel[gem];

//     console.log("New user number: " + game.userNumber);

//     //Checks if the current user number matches the jewel number
//     if (game.userNumber === randomJewel.magicNumber){
//       $("#userNumber").text(game.userNumber);  //Appends the user number.
//       game.winGame();                          //Runs method to add 1 win.
//       console.log("Game won");
//       game.reset();                            //Runs method to reset game.
//       randomJewel.initJewels();                //Runs method to randomize jewels.
//     }
    
//     else if (game.userNumber > randomJewel.magicNumber) {
//       $("#userNumber").text(game.userNumber);  //Appends the user number.
//       game.loseGame();                         //Runs method to add 1 loss.
//       console.log("Game lost");               
//       game.reset();                            //Runs method to reset game.
//       randomJewel.initJewels();                //Runs method to randomize jewels.
//     }
    
//     else {
//        $("#userNumber").text(game.userNumber); //Appends the user number.
//     }




// });

	