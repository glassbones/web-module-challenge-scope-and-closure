// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    Counter1 is a closure
 * 2. Which of the two uses a closure? How can you tell?
 *    Counter1, becuase it returns a function nested inside of another function
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Counter 1 when you what count to be a private varibale.
 *    Counter 2 when you want count to be a global variable
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round(Math.random() * 2);
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(times, rNG){

  // store each inning score here
  let homeArr = [];
  let awayArr = [];
  // store total scores here
  let totalHome = 0;
  let totalAway = 0;
  // store current inning score here
  let currentHome = 0;
  let currentAway = 0;

  //we loopin boys
  for (let i=times; i > 0; i--){
    // generate current inning scores
    currentHome = rNG();
    currentAway = rNG();
    // push scores to array
    homeArr.push(currentHome);
    awayArr.push(currentAway);
    // add current score to totals
    totalHome+= currentHome;
    totalAway+= currentAway;
  }
  //console.log(homeArr);
  //console.log(awayArr)

  return {"Home":totalHome, "Away":totalAway} 
}
finalScore(9,inning);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(cb, timez){
  let obj = {}
  //loop until timez (counting up from 0)
  for (let i=(timez-timez); i < timez; i++)
  { // fill object with properties describing the inning and randomly values for scores.
    // index is 0 so + 1 and add suffix
    obj[`${humanize(i+1)} inning`] = `${cb()} - ${cb()}`;
  }
  return obj ; 
}

function scoreboard(getIns, cb, timez) {
  //generate object full of innings and scores
  let sBoard = getIns(cb, timez);
  //target score value in inning property
  let scores = Object.values(sBoard);
  // we are storing final scores in these
  let homeTotal = 0;
  let awayTotal = 0;

   //loop until timez (counting up from 0)
  for (let i=(timez-timez); i < timez; i++)
  { //take first and last string character from scores string, parse int and add to totals.
    homeTotal += parseInt(scores[i].charAt(4));
    awayTotal += parseInt(scores[i].charAt(0));
  }
  // add final score
  sBoard[`Final Score`] = `${awayTotal} - ${homeTotal}`;
}

scoreboard(getInningScore, inning, 9);














































// This was my first attempt at the last question, it works but I read the question wrong lol
/*
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

function getIn(timez, inningFunc){
  // empty arrays for home/away scores
  let homeArr = [];
  let awayArr = [];
  
  // looping from 0 to timez
  for (let i=(timez-timez); i <= timez; i++){
    // generate current inning scores
    let currentHome = inningFunc();
    let currentAway = inningFunc();
    // push scores to arrays
    homeArr.push(currentHome);
    awayArr.push(currentAway);
  }
  // smashing both arrays together to return all that sweet data
  let frankenstein = homeArr.concat(awayArr);
  return frankenstein;
}
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function scoreboard(cb, inningFunc , times) {
  // getting the array returned from cb 
  let frankenstein = cb(times, inningFunc);
  // cloning frankenstein with homeArr and then splitting homearr into 2 arrays
  let homeArr = [...frankenstein];
  let awayArr = homeArr.splice(0, (homeArr.length / 2));
  
  // totalscores
  let homeTotal = 0;
  let awayTotal = 0;
  // create scoreboard
  let scoreboardObj = {}

  //fill scoreboardObj with inning scores while adding up totals
  homeArr.forEach(function(value, index){
    //scoreboardObj.1st.. 2nd.. 3rd... inning :     away team score           home team score
    scoreboardObj[`${humanize(index+1)} inning`] = (`${awayArr[index]} - ${homeArr[index]}`);
    // add totals
    homeTotal+= homeArr[index];
    awayTotal+= awayArr[index];
  });

  //add final score to scoreboard 
  scoreboardObj[`finalScore`] = `${awayTotal} - ${homeTotal}`
  //console.log(scoreboardObj);
  return scoreboardObj;
}


scoreboard(getIn, inning, 9);

*/

































/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// THIS IS NOT MY CODE

function humanize(number) {
  if(number % 100 >= 11 && number % 100 <= 13)
      return number + "th";
  
  switch(number % 10) {
      case 1: return number + "st";
      case 2: return number + "nd";
      case 3: return number + "rd";
  }
  
  return number + "th";
}