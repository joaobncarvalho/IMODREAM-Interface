$(document).ready(

    function house1(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/one",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#house1")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<span class="aa-top-slider-catg">${result[i].PropretyType}</span>
            <h2 class="aa-top-slider-title">${h2}</h2>
            <p class="aa-top-slider-location"><i class="fa fa-map-marker"></i>${result[i].StreetName} </p>
            <span class="aa-top-slider-off">Redução de preço</span>
            <p class="aa-top-slider-price">${result[i].Price}</p>
            <a href="#" class="aa-top-slider-btn">Read More <span class="fa fa-angle-double-right"></span></a>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
            }

        });
    }
);