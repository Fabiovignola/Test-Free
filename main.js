var dataBase = [];

mainOne();

function mainOne() {
    fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "GET",

    }).then(function (response) {
        if (response.ok) {
            console.log(2);
            return response.json();
        }

    }).then(function (json) {
        data = json;
        console.log(json);
        dataBase = json;
        mainTwo();

    }).catch(function (error) {
        console.log("Request failed:" + error.message);
    });
}

function mainTwo() {
    var client = dataBase.slice(0, 10);
    console.log(client);
    var estructura = document.getElementById("client");
    for (var j = 0; j < client.length; j++) {
        var allClient = client[j];
        var print = document.createElement("li");
        var readMore = document.createElement("a");
        var button = document.createElement("button");
        button.innerHTML = " Read More";
        readMore.innerHTML = " Link";
        readMore.setAttribute("href", allClient.thumbnailUrl);
        print.innerHTML = client[j].title;
        print.appendChild(button);
        print.appendChild(readMore);
        estructura.appendChild(print);
    }
}
