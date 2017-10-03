/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE
function daysUntilDate(dob){
	d1 = new Date();
	d2 = new Date(dob);
	var ydiff = d1.getYear() - d2.getYear();
  var ddiff = 365 * ydiff;
	var diff = Math.abs(d2-d1);
	days = diff / (1000*60*60*24);
	days = Math.round(days);
	days = days-ddiff;
	days = Math.abs(days);
	return days;
};


function birthdayReminder(people){
	for (var i = 0; i <people.length; i++){
		daysUntilDate(peoplelist[i].dob);
		console.log(peoplelist[i].name +" birthday is in "+ daysUntilDate(peoplelist[i].dob)+ " days");

  }
}
