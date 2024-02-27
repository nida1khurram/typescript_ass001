//  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.



//make an array
let names:string[]=["Nida","Zahid Ali","Shahina Begum"]

//create index error
let invalidindex = 5;
//index error
    console.log(`name at index ${invalidindex}:`,names[invalidindex])
for(let i of names){console.log(i)}


export{}