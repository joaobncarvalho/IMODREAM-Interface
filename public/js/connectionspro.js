
function goInfo(id) {
    alert(id)
    localStorage.setItem("pro_id", id)
    window.location.href = "./properties-detail.html"
}

$(document).ready(

    function proprety1(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety1")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].AreaName
                    let h3 = result[i].Dimension + " - " + result[i].Measurments
                    html += `<div class="aa-properties-info">
                    <span>${h3}</span> 
                    </div>
                    <div class="aa-properties-about">
                    <h3><a href="#">${h2}</a></h3>
                    <p>Apartamento nas torres do restelo, bem situado e zona pouco movimentada.</p>
                    </div>
                    <div class="aa-properties-detial">
                    <span className="aa-price">${result[i].Price}
                    </span>
                    <a class="aa-secondary-btn" onclick="goInfo(${result[i].PropId})">Ver Detalhes</a>
                    </div>`

                }
                console.log("aaaaa"+html)

                teste.innerHTML=html
            }

        });
    }

);

function teste() {
    alert("tt")
}