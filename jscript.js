let grade = "C"
// if (grade == "A"){
//     console.log("You did great!")
// }
// else if(grade == "B"){
//     console.log("You did good!")
// }
// else if(grade=="C"){
//     console.log("You did okay!")
// }
// else if(grade=="D"){
//     console.log("You passed...barely!")
// }
// else if(grade=="F"){
//     console.log("YOU FAILED")
// }
// else{
//     console.log(grade, "is not a letter grade!")
// }

switch (grade) {
    case "A":
        console.log("You did great!")
        break;
    case "B":
        console.log("You did good!")
        break
    case "C":
        console.log("You did okay!")
        break
    case "D":
        console.log("You passed...barely!")
        break
    case "F":
        console.log("YOU FAILED")
        break
    default:
        console.log(grade, "is not a letter grade!")

}
