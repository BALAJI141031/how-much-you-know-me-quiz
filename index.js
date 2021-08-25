var readlineSync=require('readline-sync')

//var rows=readlineSync.question('how many rows you want: ')

//console.log(rows)
/*var revRows=rows
for(var i=0;i<rows;i++){
  
  var emptyString=''
  for(var g=0;g<revRows;g++){
    emptyString+="* "
  }
  
  console.log(emptyString)
  revRows=revRows-1
}*/
//groceryitemlist

//var groceryList=['pen','chaco','toy','shampoo','soap']

/*console.log(groceryList[0])
console.log(groceryList[2])
var lastIndex=groceryList.length-1
console.log(groceryList[lastIndex])*/

/*for(var i=0;i<groceryList.length;i++){
  console.log(groceryList[i])
}*/

/*var batman={
  color:"red",
  legs:2,
  eyes:2,
  power:100,


}

var batman={
  color:'red',
  legs:2,
  eyes:2,
  power:0,

}

var questionOne={
  question:'Who is my fav cricket player: ',
  answer:'rohit sharma'
}

var questionTwo={
  question:'who i admire most: ',
  answer:'ramcharan'
}*/


var score=0
 var userInput=readlineSync.question('hi what is your name: ')

  console.log('hi',userInput,'welcome to my quiz')

function play(question,answer){
 

  var userAnswer=readlineSync.question(question)

  if(userAnswer===answer){
    console.log('right')
    score+=1
    console.log('your score is:',score)
  }else{
    console.log('wrong')
    score-=1
    console.log('your score is: ',score)
  }
  

}

questionsList=[{question:'who is my fav cric player ',answer:'rohit'},{question:'who is my fav movie player ',answer:'ramcharan'},{question:'who is my fav comedian player ',answer:'raju'},{question:'who is my fav cartoon player ',answer:'tommy'},{question:'who is my fav footbal player ',answer:'ronaldo'}]

for(i=0;i<questionsList.length;i++){
  var currentQuestion=questionsList[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log('your final score is: ',score)
console.log('---------------------')
if(score>5){
    console.log('Yay Awesome you are my best buddy keep loving each other')
  }else{
    console.log('ohh sorry you are not my best buddy')
  }
