
let date = new Date();
console.log(date);
let Today = date.getDay();
if(Today === 0){
 Today = "Sunday"
} 
else if(Today === 1) {
    Today = "Monday"
} 
else if(Today === 2) {
    Today = "Tuesday"
} 
else if(Today === 3) {
    Today = "Wednesday"
} 
else if(Today === 4) {
    Today = "Thursday"
} 
else if(Today === 5) {
    Today = "Friday"
} 
else if(Today === 6) {
    Today = "Saturday"
} 



const current = document.querySelector(".current");
current.append(Today)
const currentDate = document.querySelector(".current-date");
currentDate.append(date)


