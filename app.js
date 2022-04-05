const chave = {
    key: 'a5a0eeafd0075e55f3b0a0353db55eeb',
    base: 'https://api.openweathermap.org/data/2.5/weather?',
}

window.addEventListener('load', () => {
    let long,
        lat,
        region = document.getElementById('region'),
        temp = document.getElementById('temp')
        desc = document.getElementById('description');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `${chave.base}lat=${lat}&lon=${long}&appid=${chave.key}`
            
            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                /* console.log(data) */
                temperature = Math.floor(data.main.temp - 273,15)
                temp.innerHTML = temperature + 'ºC'
                locale = data.name
                region.innerHTML = locale
                description = data.weather[0].description
                desc.innerHTML = description
            })
        })
    }
})