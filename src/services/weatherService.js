
// const API_KEY = 'YOUR API KEY';
// const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
const BASE_URL = `http://localhost:3000/weather/`;


const show = async (city) => {
    try {
        const res = await fetch(BASE_URL + city);
        const data = await res.json();
        console.log("Data:", data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

// Example function 
// show("New Orleans");

export { show };



