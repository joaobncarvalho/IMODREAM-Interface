
function goInfo(id) {
    localStorage.setItem("pro_id", id)
    window.location.href = "./properties-detail.html"
}

$(document).ready(

    function proprety1(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/1",
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
                    <div class="aa-properties-about">
                    <h3><a onclick="goInfo(${result[i].PropId})">${h2}</a></h3>
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
            url: "https://imodream-api.herokuapp.com/api/proprety/2",
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
            url: "https://imodream-api.herokuapp.com/api/proprety/3",
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
            url: "https://imodream-api.herokuapp.com/api/proprety/4",
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

    function proprety5(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/5",
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

    function proprety6(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/6",
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


