/*
 * Create a list that holds all of your cards
 */


var cards = [$(".card i").each(function(){
    $(this).find("i").attr("class")})];
var list = [];
var match_num = 0;
var startTime = new Date().getTime();
var endTime = new Date().getTime();

function init(){
    $(".open").removeClass("open");
    $(".show").removeClass("show");
    $(".match").removeClass("match");
    $('.moves').text(0);
    $('.stars').html('<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>');
    match_num = 0;
    startTime = new Date().getTime();
    var endTime = new Date().getTime();
}

function match(){
    $('li').find('open').addClass('match');
}

function add_counter(){
    var count_num = Number($('.moves').text());
    count_num += 1;
    $('.moves').text(count_num);

    if(count_num % 2 === 0){
        $(".stars").find('li:last-child').remove();
    }
}

function again(){
    $('#again').click(function(){
        $('#bg').fadeOut(300);
    init();
    });
}

function checker(){
    if(list.length ===2){
        if(list[0] === list[1]){
            list.pop();
            list.pop();
            $(".open,.show").addClass("match");
            match();
            match_num += 1;
        }else{

            $(".open,.show").removeClass("open show");
            list.pop();
            list.pop();
            add_counter();
        }
    }
    if(match_num === 8){
        var endTime = new Date().getTime();
        $("#bg").fadeIn(500);
        $("#alertBox").fadeIn(500);
        again();
        $("#score").text("Your score is: " +( Math.round(Math.max(3-Number($(".moves").text())/2,0))));
        $("#time").text("Your time is: " +(endTime-startTime)/1000 +"s");
    }
}

function enlist(kind){
    list.push(kind);
}

function finish_checker(){
    $('li').each(function(){
        match_num = $(this).attr('class');
        console.log(match_num);
    });
}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



$('#alertBox').hide();
$('#bg').hide();
shuffle(cards);

$('.restart').click(function(){
    init();
})

$('.card').click(function(){
    if( $(this).hasClass("open")){

    }else{
	$(this).addClass("open");
	$(this).addClass("show");
    enlist($(this).find('i').attr('class'));
    checker();
    }
});

