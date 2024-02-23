//Store a person’s name in a variable
var pName = "nida ali";
//* print that person’s name in lowercase
var lName = pName.toLowerCase();
console.log("LowerCase " + lName);
//* print that person’s name in uppercase
var uName = pName.toUpperCase();
console.log("UpperCase " + uName);
//*print that person’s name in Titlecase
var words = pName.split(" ");
var tName = " ";
for (var i = 0; i < words.length; i++) {
    tName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log("Titlecase" + tName);
//let name2:string="Eric";
//* show name in lowercase
//console.log("LowerCase "+name2.toLowerCase());
//* show name in uppercase
//console.log("UpperCase "+name2.toUpperCase());
