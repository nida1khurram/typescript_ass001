
// Album: Write a function called make_album() that builds a Object describing a music album.

//  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//func
function make_album(artist:string,title:string,track?:number):
//object
{artist:string,title:string,track?:number}
{const album={
            artist,
            title,
            track,
        }; 
    return album;
}
//func call
const album1=make_album(`atif aslam`,`jal pari`);
const album2=make_album(`ali zafar`,`jhoom`);
const album3=make_album(`noor jahan`,`har lahza momin`,32);
//print
console.log(album1);
console.log(album2);
console.log(album3);


// let person:{
//         artist_name:string,
//         song:string,
//         album_title:string,
//     };
//     person={
//         artist_name:"atif aslam",
//         song:"jal",
//         album_title:"jal pari",
//     };
//     console.log(person);
    export{} 