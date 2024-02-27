
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let usernames:string[]=["Admin","Alice","David","Rock","Daniel"]
function greeting(username:string[]):void{
        // • If the list is empty, print the message We need to find some users!
        if(usernames.length === 0){
            console.log(`We need to find some users! `)
            return;}
            // console.log(`usernames :`,key)}
             for( let key in usernames){
                    if(usernames[key] === "Admin"){
                      // • If the username is 'admin', print a special greeting, such as Hello admin
                        console.log(`Hello Admin `)}
                        else{
                            // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
                console.log(`Hello ${usernames[key]},thank you for logging in again.`)
                       }  
                }
             }
            
             console.log(`For non empty array \n`)
             greeting(usernames)
        
// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames=[]
console.log(`For emty array \n`)
greeting(usernames)
            
    export{}
