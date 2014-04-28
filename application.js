$(document).ready(function () {


//questions array

    var questions = [{
        questionText: "Which ingredient will NOT be found in a Manhattan?",
        choices: ["Whiskey",  "Sweet Vermouth", "Angostura Bitters", "Vodka"],
        correctAnswer: 3,
        answerText: "Whiskey, not vodka, stands strong in this drink. Don't forget the cherry on top!",
        questionValue: 0
    }, {
        questionText: "A Sazerac is a New Orleans classic made with Whiskey. What is the other key ingredient that makes it special?",
        choices: [ "Chartreuse", "Crushed Mint Leaves","Absinthe","Champagne"],
        correctAnswer: 2,
        answerText: "Absinthe gives this cocktail it's distinct anise flavor.",
        questionValue: 1
    }, {
        questionText: "What technique should be used to combine sugar, bitters, and orange slices in an Old-Fashioned?",
        choices: ["Stirred (not shaken)", "Shaken (not stirred)", "Crush", "Muddle"],
        correctAnswer: 3,
        answerText: "The ingredients are muddled before adding whiskey and ice. Garnish with a cherry and another orange slice!",
        questionValue: 2
    }, {
        questionText: "Wow, we really like whiskey! A martini can be made with Vodka or Gin. What ingredient makes it a &quot;dirty&quot; martini?",
        choices: ["Olive Juice", "Bitters", "Angostura", "Gin and Whiskey combined"],
        correctAnswer: 0,
        answerText: "Juice. Olive Juice, for this classy classic.",
        questionValue: 3
    }, {
        questionText: "This sweet drink is a favorite of &quot;The Dude&quot;.",
        choices: ["Colorado Bulldog", "White Russian", "Kahlua Sunrise","Dark and Stormy"],
        correctAnswer: 1,
        answerText: "In the Big Lebowski, The Dude preferred a White Russian made with Vodka, Kahlua, and (preferably not powdered) cream.",
        questionValue: 4
    }];


//show questions
var numQuestions = 0;
var userAnswer = "";
var i = 0;
console.log("question " + i);
    $('#title').text(questions[i].questionText);
    $('#1stChoice').append(questions[i].choices[0]);
    $('#2ndChoice').append(questions[i].choices[1]);
    $('#3rdChoice').append(questions[i].choices[2]);
    $('#4thChoice').append(questions[i].choices[3]);

//Check guess

$("#submit").on('click',function(event){
    event.preventDefault();
    var userAnswer = $("input[type='radio']:checked").val();
    if (userAnswer == questions[i].correctAnswer){
        $("#feedback").text("You answered correct!");
        $("#next").show();
        $("#answerText").text(questions[i].answerText);
         if (i === 4) {
                $("#next").hide();
                $("#submit").hide();
                $("#replay").show();
            }
    } else {
        $("#feedback").text("Nope. Try again!");
    }

});

//reset Questions
var newQuestion = function(){
    $('#title').text(questions[i].questionText);
    $('#1stChoice').text(questions[i].choices[0]);
    $('#2ndChoice').text(questions[i].choices[1]);
    $('#3rdChoice').text(questions[i].choices[2]);
    $('#4thChoice').text(questions[i].choices[3]);
    $('input:radio').prop('checked', false);

};

//press Next
$("#next").on('click', function(){
    $("#next").hide();
    $("#feedback").text('');
    $("#answerText").text('');
   //$(questions[i].choices.length).hide();
    i = i + 1;
    console.log("question " + i);
    newQuestion();
});

// Reset game. location.reload() reloads the page
    $("#replay").on('click', function () {
        location.reload();
       
    });



});

