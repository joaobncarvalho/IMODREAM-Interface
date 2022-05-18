$(document).ready(

    function proprety1(){
        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/proprety/one",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#proprety1")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].PropretyType + " - " + result[i].AreaName
                    html += `<div className="aa-properties-info"><span>${result[i].Dimension}</span><span>${result[i].Measurments}</span></div><div className="aa-properties-about"><h3><a href="#">${h2}</a></h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam oditvitae.</p></div><div className="aa-properties-detial"><span className="aa-price">${result[i].Price}</span><a className="aa-secondary-btn" href="#">Ver Detalhes</a></div></div>`

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