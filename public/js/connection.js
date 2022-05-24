function goInfo(id) {
    localStorage.setItem("pro_id", id)
    window.location.href = "./properties-detail.html"
}



$(document).ready(

    function house1(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/1",
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
            <a class="aa-top-slider-btn" onclick="goInfo(${result[i].PropId})" >Read More <span class="fa fa-angle-double-right"  ></span></a>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
            }

        });
    }
);


$(document).ready(

    function house2(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/2",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#house2")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<span class="aa-top-slider-catg">${result[i].PropretyType}</span>
            <h2 class="aa-top-slider-title">${h2}</h2>
            <p class="aa-top-slider-location"><i class="fa fa-map-marker"></i>${result[i].StreetName} </p>
            <span class="aa-top-slider-off">Redução de preço</span>
            <p class="aa-top-slider-price">${result[i].Price}</p>
            <a class="aa-top-slider-btn" onclick="goInfo(${result[i].PropId})" >Read More <span class="fa fa-angle-double-right"  ></span></a>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
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

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#house3")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<span class="aa-top-slider-catg">${result[i].PropretyType}</span>
            <h2 class="aa-top-slider-title">${h2}</h2>
            <p class="aa-top-slider-location"><i class="fa fa-map-marker"></i>${result[i].StreetName} </p>
            <span class="aa-top-slider-off">Redução de preço</span>
            <p class="aa-top-slider-price">${result[i].Price}</p>
            <a class="aa-top-slider-btn" onclick="goInfo(${result[i].PropId})" >Read More <span class="fa fa-angle-double-right"  ></span></a>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
            }

        });
    }
);


$(document).ready(

    function house4(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/4",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#house4")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<span class="aa-top-slider-catg">${result[i].PropretyType}</span>
            <h2 class="aa-top-slider-title">${h2}</h2>
            <p class="aa-top-slider-location"><i class="fa fa-map-marker"></i>${result[i].StreetName} </p>
            <span class="aa-top-slider-off">Redução de preço</span>
            <p class="aa-top-slider-price">${result[i].Price}</p>
            <a class="aa-top-slider-btn" onclick="goInfo(${result[i].PropId})" >Read More <span class="fa fa-angle-double-right"  ></span></a>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
            }

        });
    }
);


$(document).ready(

    function house9(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/9",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#house9")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<span class="aa-top-slider-catg">${result[i].PropretyType}</span>
            <h2 class="aa-top-slider-title">${h2}</h2>
            <p class="aa-top-slider-location"><i class="fa fa-map-marker"></i>${result[i].StreetName} </p>
            <span class="aa-top-slider-off">Redução de preço</span>
            <p class="aa-top-slider-price">${result[i].Price}</p>
            <a class="aa-top-slider-btn" onclick="goInfo(${result[i].PropId})" >Read More <span class="fa fa-angle-double-right"  ></span></a>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
            }

        });
    }
);

$(document).ready(

    function house11(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/11",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#house11")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<span class="aa-top-slider-catg">${result[i].PropretyType}</span>
            <h2 class="aa-top-slider-title">${h2}</h2>
            <p class="aa-top-slider-location"><i class="fa fa-map-marker"></i>${result[i].StreetName} </p>
            <span class="aa-top-slider-off">Redução de preço</span>
            <p class="aa-top-slider-price">${result[i].Price}</p>
            <a class="aa-top-slider-btn" onclick="goInfo(${result[i].PropId})" >Read More <span class="fa fa-angle-double-right"  ></span></a>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
            }

        });
    }
);


$(document).ready(

    function proprety1(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/5",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety1")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <div class="aa-properties-item-content">
                    <div class="aa-properties-info">
                    <span>${h3}</span> 
                    </div>
                    <div class="aa-properties-about" >
                    <h3><a onclick="goInfo(${result[i].PropId})" >${h2}</a></h3>
                    </div>
                    <div class="aa-properties-detial">
                    <span class="aa-price">${result[i].Price}
                    </span>
                    <a class="aa-secondary-btn" onclick="goInfo(${result[i].PropId})">Ver Detalhes</a>
                    </div>
                    </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);


$(document).ready(

    function proprety2(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/11",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety2")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <div class="aa-properties-item-content">
                    <div class="aa-properties-info">
                    <span>${h3}</span> 
                    </div>
                    <div class="aa-properties-about" >
                    <h3><a onclick="goInfo(${result[i].PropId})" >${h2}</a></h3>
                    </div>
                    <div class="aa-properties-detial">
                    <span class="aa-price">${result[i].Price}
                    </span>
                    <a class="aa-secondary-btn" onclick="goInfo(${result[i].PropId})">Ver Detalhes</a>
                    </div>
                    </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);

$(document).ready(

    function proprety3(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/8",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety3")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <div class="aa-properties-item-content">
                    <div class="aa-properties-info">
                    <span>${h3}</span> 
                    </div>
                    <div class="aa-properties-about" >
                    <h3><a onclick="goInfo(${result[i].PropId})" >${h2}</a></h3>
                    </div>
                    <div class="aa-properties-detial">
                    <span class="aa-price">${result[i].Price}
                    </span>
                    <a class="aa-secondary-btn" onclick="goInfo(${result[i].PropId})">Ver Detalhes</a>
                    </div>
                    </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);


$(document).ready(

    function proprety4(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/9",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety4")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <div class="aa-properties-item-content">
                    <div class="aa-properties-info">
                    <span>${h3}</span> 
                    </div>
                    <div class="aa-properties-about" >
                    <h3><a onclick="goInfo(${result[i].PropId})" >${h2}</a></h3>
                    </div>
                    <div class="aa-properties-detial">
                    <span class="aa-price">${result[i].Price}
                    </span>
                    <a class="aa-secondary-btn" onclick="goInfo(${result[i].PropId})">Ver Detalhes</a>
                    </div>
                    </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);

$(document).ready(

    function proprety2(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/4",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety5")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <div class="aa-properties-item-content">
                    <div class="aa-properties-info">
                    <span>${h3}</span> 
                    </div>
                    <div class="aa-properties-about" >
                    <h3><a onclick="goInfo(${result[i].PropId})" >${h2}</a></h3>
                    </div>
                    <div class="aa-properties-detial">
                    <span class="aa-price">${result[i].Price}
                    </span>
                    <a class="aa-secondary-btn" onclick="goInfo(${result[i].PropId})">Ver Detalhes</a>
                    </div>
                    </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);

$(document).ready(

    function proprety2(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/3",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety6")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].StreetName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `
                    <div class="aa-properties-item-content">
                    <div class="aa-properties-info">
                    <span>${h3}</span> 
                    </div>
                    <div class="aa-properties-about" >
                    <h3><a onclick="goInfo(${result[i].PropId})" >${h2}</a></h3>
                    </div>
                    <div class="aa-properties-detial">
                    <span class="aa-price">${result[i].Price}
                    </span>
                    <a class="aa-secondary-btn" onclick="goInfo(${result[i].PropId})">Ver Detalhes</a>
                    </div>
                    </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);






$(document).ready(

    function agent1(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/users/sellers",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#agent1")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += ` <h4><a href="#">${result[i].name}</a></h4>
                      <span>Top Agent</span>
                      <div class="aa-agent-social">`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html
            }

        });
    }
);