let age = prompt("Entrez votre age");

if (age <= 14){
    console.log("Vous etes un enfant")
    document.write("Vous etes un enfant")
} 
else if (age <= 25){
    console.log("Vous etes un adolescent")
    document.write("Vous etes un adolescent")
}
else if (age <= 64){
    console.log("Vous etes un adulte")
    document.write("Vous etes un adulte")
    
} 
else{
    console.log("Vous etes vieux")
    document.write("Vous etes vieux")
}




















// let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogye", "Double bogey", "Go Home"]

// function golfScore(par, strokes) {
//     if (strokes == 1) {
//         return names[0]
//     } else if(strokes <= par - 2){
//         return names[1]
//     } else if (strokes == par - 1){
//         return names[2]
//     } else if (strokes == par) {
//         return names[3]
//     } else if (strokes == par + 1) {
//         return names[4]
//     } else if (strokes == par + 2) {
//         return names[5]
//     } else if (strokes >= par + 3) {
//         return names[6]
//     }
// }

// console.log(golfScore(5, 4)); 