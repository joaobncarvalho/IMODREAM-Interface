$(document).ready(

    function house1(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/one",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#DimensionPro').text(result)
                var down = document.getElementById("list");
                var obj = JSON.stringify(result);
                console.log(obj);
                var res = [""];

                for(var i in result) {
                    res.push(obj[i]);
                    //down.innerHTML = obj[i];
                    let h2 = document.createElement("p");
                    h2.innerText = result[i].Dimension + " - " + result[i].Measurments;
                    down.appendChild(h2);
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
                //down.innerHTML = obj[i];
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