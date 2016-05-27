//*if this file is linked properly, then console wil lprint out "app.js ready to roll"

console.log("app.js ready to roll");

//where is our database
var databaseURL  = "https://onlinetutoring.firebaseio.com";

//let's create a new database connection

var database = new Firebase(databaseURL);

var peopleList = []; //this is an empty list, for specific type variables - array / list 

//go to the Firebase docs
//find out which function we can use to "retrieve" data from a list

// Get a database reference to our posts
var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");

//for each child of the database, run this function

database.on ("child_added", function (firebaseObject){
  
  // store the value inside person
  
  var person = firebaseObject.val();

  //let's see if person has the right data
  console.log(person);
  
  //add person to the list of people
  //"push" means add to a list" in JS
  
  peopleList.push(person);
  
  
  
  }); //...end of the "child _added" function

$('#details').hide();
$('button').click( function() { 
  // get user input
  var selectedOption = $('select').val(); // this is jQuery val()
  // filter people by user selection
  var resultsList = filterAndSortList(peopleList, selectedOption);
  console.log(resultsList);
  // and show the results
  showList(resultsList);
})
$('#back').click( function(){   
  $('#home').show();
  $('#details').hide();
});













