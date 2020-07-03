(function () {

var nm= ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < nm.length; i++) {

  var firstLetter = nm[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
   console.log("GoodBye " +nm[i]);
  } else {
    console.log("Hello " +nm[i]);
  }
}

})();