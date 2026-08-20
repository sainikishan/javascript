let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let mycreated= new Date(2026,0,23,5,3)
console.log(mycreated.toLocaleString());

let date= new Date("2023-01-14")
console.log(date.toLocaleString());
//timestamp
let timestamp = Date.now()
console.log(timestamp); 
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate)
console.log(newDate.getUTCDate())
console.log(newDate.getUTCDay())