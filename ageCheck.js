let age = prompt("Enter your age:");
age = parseInt(age);

if (age < 13){
    console.log("You are a child.");
}else if (age >= 13 && age < 20){
    console.log("You are a teenager.");
}else{
    console.log("You are an adult.");
}