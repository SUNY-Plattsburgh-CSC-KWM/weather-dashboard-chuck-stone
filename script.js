const api = "https://api.open-meteo.com/v1"

function getAllArguments(){
    let latitude = document.getElementById("latitude").value + document.getElementById("latDirection").value;
    let longitude = document.getElementById("longitude").value + document.getElementById("longDirection").value;
    let time = document.getElementById("time").value;
    let units = document.getElementById("units").value;
    if (time == "forecast"){
        document.getElementById("more").innerHTML += "choose amount of days: ";
        document.getElementById("more").innerHTML += "<input type='text'id='days'>";
        var date = document.getElementById("more").innerHTML += "<button onclick='getTimeInformation(0)'>submit</button>";
    }else{
        document.getElementById("more").innerHTML += "<h3>start date</h3>";
        document.getElementById("more").innerHTML += "day";
        document.getElementById("more").innerHTML += "<input type='text' id='dayS'>"
        document.getElementById("more").innerHTML += "month";
        document.getElementById("more").innerHTML += "<input type='text' id='monthS'>";
        document.getElementById("more").innerHTML += "year";
        document.getElementById("more").innerHTML += "<input type='text' id=yearS>";
        document.getElementById("more").innerHTML += "<h3>end date</h3>";
        document.getElementById("more").innerHTML += "day";
        document.getElementById("more").innerHTML += "<input type='text' id='dayE'>"
        document.getElementById("more").innerHTML += "month";
        document.getElementById("more").innerHTML += "<input type='text' id='monthE'>";
        document.getElementById("more").innerHTML += "year";
        document.getElementById("more").innerHTML += "<input type='text' id=yearE>";
        var date = document.getElementById("more").innerHTML += "<button onclick='getTimeInformation(1)'>submit</button>";
    }
    console.log(date);
}

function getTimeInformation(bool){
    if (bool == 0){
        var date = "forecast+days=" + document.getElementById("days").value;
    }else{
        var date = "start_date=" + document.getElementById("yearS").value + "-" + document.getElementById("monthS").value + "-" + document.getElementById("dayS").value + "&end_date=" + document.getElementById("yearE").value + "-" + document.getElementById("monthE").value + "-" + document.getElementById("dayE").value;
    }
    return date; 
}

