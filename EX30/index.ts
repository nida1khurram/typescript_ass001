
//  Make a array of five or more usernames, including the name 'admin'.Hello Admin: 

let usernames:string[]=["Admin","Alice","David","Rock","Daniel"]

//  Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
    for( let key in usernames){
        if(usernames[key] === "Admin"){
          // • If the username is 'admin', print a special greeting, such as Hello admin
            console.log(`Hello Admin `)}
            else{
                // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    console.log(`Hello ${usernames[key]},thank you for logging in again.`)
           }  
    }
