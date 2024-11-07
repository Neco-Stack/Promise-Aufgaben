import WeatherType from "./weather-type";

const weatherType : Promise<WeatherType> = new Promise((resolve, reject) => {
    const randomZahl = Math.floor(Math.random()*10)
    if (randomZahl >=0 && randomZahl <=6){
        resolve(randomZahl as WeatherType)
    } else {
        reject("Weather forecast could not be determined")
    }
})

weatherType
.then((result) => {
    console.log(`Die Wettervorjhersage: ${WeatherType[result]}`);  
})
.catch((error) => {
    console.log(`Fehler: ${error}`);
}); 
