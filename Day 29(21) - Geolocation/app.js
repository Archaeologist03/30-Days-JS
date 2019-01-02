const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(data => {
    console.log(data.coords);
    speed.textContent = `lat: ${data.coords.latitude.toFixed(2)} / lng: ${data.coords.longitude.toFixed(2)}`;

    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, err(err) => {
    console.log(err);
    
})
