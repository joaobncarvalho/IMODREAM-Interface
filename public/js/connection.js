$(document).ready(

    function house1(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/one",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#DimensionPro').text(result)
                var down = document.getElementById("h1");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h2 = document.createElement("p");
                    h2.innerText = result[i].Dimension + " - " + result[i].Measurments;
                    down.appendChild(h2);
                }
            }

        });
    }
);

$(document).ready(

    function house11(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/one",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#DimensionPro').text(result)
                var down = document.getElementById("h11");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h11 = document.createElement("p");
                    h11.innerText = result[i].PropretyType;
                    down.appendChild(h11);
                }
            }

        });
    }
);

$(document).ready(
    function house12(){
        $.ajax({
        url: "https://imodream-api.herokuapp.com/api/proprety/one",
        type: "GET",
        dataType: 'json',
        success: function(result) {
            console.log(result);
            $('#LocPro').text(result)
            var down = document.getElementById("h12");
            var obj = JSON.stringify(result);
            console.log(obj);
            var res = [""];

            for(var i in result) {
                res.push(obj[i]);
                let h12 = document.createElement("i");
                h12.innerText = result[i].StreetName;
                down.appendChild(h12);
                }
            }

        });
    }

);


$(document).ready(
    function house13(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/one",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#PricePro').text(result)
                var down = document.getElementById("h13");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    //down.innerHTML = obj[i];
                    let h13 = document.createElement("h");
                    h13.innerText = result[i].Price;
                    down.appendChild(h13);
                }
            }

        });
    }

);




$(document).ready(

    function house2(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/two",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#DimensionPro').text(result)
                var down = document.getElementById("h2");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h2 = document.createElement("p");
                    h2.innerText = result[i].Dimension + " - " + result[i].Measurments;
                    down.appendChild(h2);
                }
            }

        });
    }
);

$(document).ready(

    function house21(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/two",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#DimensionPro').text(result)
                var down = document.getElementById("h21");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h21 = document.createElement("p");
                    h21.innerText = result[i].PropretyType;
                    down.appendChild(h21);
                }
            }

        });
    }
);

$(document).ready(
    function house22(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/two",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#LocPro').text(result)
                var down = document.getElementById("h22");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h22 = document.createElement("i");
                    h22.innerText = result[i].StreetName;
                    down.appendChild(h22);
                }
            }

        });
    }

);


$(document).ready(
    function house23(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/two",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#PricePro').text(result)
                var down = document.getElementById("h23");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    //down.innerHTML = obj[i];
                    let h23 = document.createElement("h");
                    h23.innerText = result[i].Price;
                    down.appendChild(h23);
                }
            }

        });
    }

);

$(document).ready(

    function house3(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/3",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#DimensionPro').text(result)
                var down = document.getElementById("h3");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h2 = document.createElement("p");
                    h2.innerText = result[i].Dimension + " - " + result[i].Measurments;
                    down.appendChild(h2);
                }
            }

        });
    }
);

$(document).ready(

    function house31(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/3",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#DimensionPro').text(result)
                var down = document.getElementById("h31");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h21 = document.createElement("p");
                    h21.innerText = result[i].PropretyType;
                    down.appendChild(h21);
                }
            }

        });
    }
);

$(document).ready(
    function house22(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/3",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#LocPro').text(result)
                var down = document.getElementById("h32");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h22 = document.createElement("i");
                    h22.innerText = result[i].StreetName;
                    down.appendChild(h22);
                }
            }

        });
    }

);


$(document).ready(
    function house23(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/3",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#PricePro').text(result)
                var down = document.getElementById("h33");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    let h23 = document.createElement("h");
                    h23.innerText = result[i].Price;
                    down.appendChild(h23);
                }
            }

        });
    }

);