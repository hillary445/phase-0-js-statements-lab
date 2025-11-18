const temperature = 90;
const timeOfDay = "morning" ;// "evening" or "night"
let soilMoisture = 30;

//Creating a temperature function which indicated watering on and off when the conditions are met
if ( temperature > 80){
    console.log ("Watering on")
}else{
    console.log("Watering Off")
}
//Creating a time of day function to print lights on or off once conditions are met
 if ( timeOfDay === "morning"){
    console.log("Lights off")
 }else{
    console.log("Lights on")
 }
 //Creting a loop to increase the soil moisture until it reaches 40
while (soilMoisture < 40){
    console.log(soilMoisture)
    //Increaments the soil moisture by 5
    soilMoisture+=5;
}
console.log(soilMoisture);

 
