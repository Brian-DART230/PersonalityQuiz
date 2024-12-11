let points = 0;

$("#ending1").hide();
$("#ending2").hide();
$("#ending3").hide();
$("#ending4").hide();


$("#button1").on("click", question2);
$("#button2").on("click", question2);
$("#button3").on("click", question2);
$("#button4").on("click", question2);

$("#button1").on("click", points1);
$("#button2").on("click", points2);
$("#button3").on("click", points3);
$("#button4").on("click", points4);


function points1 () {
    points+= 1;
}
function points2 () {
    points+= 2;
}
function points3 () {
    points+= 3;
}
function points4 () {
    points+= 4;
}


function question2() {
    $("#questions").text("Question #2: Which animal do you prefer?");
    $("#button1").text("Fish");
    $("#button2").text("Whale");
    $("#button3").text("Shark");
    $("#button4").text("Stingray");
    $("#button1").on("click", question3);
    $("#button2").on("click", question3);
    $("#button3").on("click", question3);
    $("#button4").on("click", question3);
}

function question3() {
    $("#questions").text("Question #3: What kind of food do you like?");
    $("#button1").text("Sweet");
    $("#button2").text("Sour");
    $("#button3").text("Umami");
    $("#button4").text("Spicy");
    $("#button1").on("click", question4);
    $("#button2").on("click", question4);
    $("#button3").on("click", question4);
    $("#button4").on("click", question4);
}

function question4() {
    $("#questions").text("Question #4: What is your tool of choice?");
    $("#button1").text("Shield");
    $("#button2").text("Bow and Arrows");
    $("#button3").text("Sword");
    $("#button4").text("Gun");
    $("#button1").on("click", question5);
    $("#button2").on("click", question5);
    $("#button3").on("click", question5);
    $("#button4").on("click", question5);
}

function question5() {
    $("#questions").text("Question #5: What drink do you like?");
    $("#button1").text("Water");
    $("#button2").text("Tea");
    $("#button3").text("Coffee");
    $("#button4").text("Soda");
    $("#button1").on("click", question6);
    $("#button2").on("click", question6);
    $("#button3").on("click", question6);
    $("#button4").on("click", question6);
}

function question6() {
    $("#questions").text("Question #6: How do you sleep?");
    $("#button1").text("On your stomach");
    $("#button2").text("On your sides");
    $("#button3").text("On your back");
    $("#button4").text("Sitting upright");
    $("#button1").on("click", question7);
    $("#button2").on("click", question7);
    $("#button3").on("click", question7);
    $("#button4").on("click", question7);
}

function question7() {
    $("#questions").text("Question #7: What is your favorite genre?");
    $("#button1").text("Romance");
    $("#button2").text("Comedy");
    $("#button3").text("Action");
    $("#button4").text("Horror");
    $("#button1").on("click", question8);
    $("#button2").on("click", question8);
    $("#button3").on("click", question8);
    $("#button4").on("click", question8);
}

function question8() {
    $("#questions").text("Question #8: What will your catchphrase be?");
    $("#button1").text("'My faith will show me the way.'");
    $("#button2").text("'I will explore what this world has to offer.'");
    $("#button3").text("'I am the maker of my own path.'");
    $("#button4").text("'Everywhere I go the road yields to me.'");
    $("#button1").on("click", question9);
    $("#button2").on("click", question9);
    $("#button3").on("click", question9);
    $("#button4").on("click", question9);
}

function question9() {
    $("#questions").text("Question #9: What's the funniest word?");
    $("#button1").text("Skibidibop");
    $("#button2").text("Dingolinga");
    $("#button3").text("Harginibazingaboingo");
    $("#button4").text("Grunkelafworp");
    $("#button1").on("click", question10);
    $("#button2").on("click", question10);
    $("#button3").on("click", question10);
    $("#button4").on("click", question10);
}

function question10() {
    $("#questions").text("Question #10: You are in the midst of war. There is a group of survivors, but you can only save one. Who will you choose?");
    $("#button1").text("A young woman with a child");
    $("#button2").text("A doctor who dislikes violence");
    $("#button3").text("An intelligent scientist with no tools");
    $("#button4").text("A formidable soldier");
    $("#button1").on("click", ending);
    $("#button2").on("click", ending);
    $("#button3").on("click", ending);
    $("#button4").on("click", ending);
}

function ending(){
    $("#questions").text("You are aligned with:");
    $("#button1").hide();
    $("#button2").hide();
    $("#button3").hide();
    $("#button4").hide();
    
if (points > 0 && points< 11) {
        $("#ending1").show();
    }

if (points > 11 && points< 21) {
        $("#ending2").show();
    }

if (points > 21 && points< 31) {
        $("#ending3").show();
    }

if (points > 31 && points< 41) {
        $("#ending4").show();
    }
}