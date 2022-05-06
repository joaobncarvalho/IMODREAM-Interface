$(document).ready(

    function(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/one",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#Moradia_Tipo').text(result)
                var down = document.getElementById("Moradia_Tipo");
                var res = [""];
                var obj = JSON.stringify(result);
                for(var i in obj)
                    res.push(obj[i]);

                down.innerHTML = obj[5]+obj[6];

                {

                }
            }

        });
    }
);






