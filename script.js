var searchEl = document.getElementById('searchbar')
var searchButtonEl = document.getElementById('search-button')


var citySubmitHandler = function(event) {
    //prevent page refresh
    event.preventDefault();
    console.log('button clicked')

    var userCity = searchEl.value.trim();
    console.log(userCity)

    if (userCity) {
        getCityInfo(userCity);
        //clear old content
        // searchEl.textContent = "";
        searchEl.value = "";
    } else {
        alert('Please enter a city.')
    }
}

var getCityInfo = function(userCity) {

    fetch('api.openweathermap.org/data/2.5/forecast?q='+ userCity +'&appid=03e67ad9d19f7487630889924f45288b')
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayInfo(data.items);
                console.log(data)
            });
        } else {
            alert("error: " + response.statusText);
        }
    });
}




searchButtonEl.addEventListener('click', citySubmitHandler); 
