function goInfo(id) {
    localStorage.setItem("imo_id", id)
    window.location.href = "./blog-single.html"
}



$(document).ready(

    function imo(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/imo/1",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#imo")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += ` 
                        <figure class="aa-blog-img">
                          <a href="#"><img alt="img" src="img/Imo/KWLead.jpg"></a>
                          <span class="aa-date-tag">${result[i].Criacao}</span>
                        </figure>
                        
                          <h3><a onclick="goInfo(${result[i].ImoId})">${result[i].Name}</a></h3>
                          <p>Na KW Lead trabalhamos sempre focados para que todas as operações sejam sinónimo de vontade e não de necessidade, garantimos que só existem vencedores – proprietários, compradores, parceiros e consultores.</p>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> ${result[i].Name}</a>
                          </div>
                        </div>                   
                      </article>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html

            }

        });
    }
);



$(document).ready(

    function imo(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/imo/2",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#imo2")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += ` 
                        <figure class="aa-blog-img">
                          <a href="#"><img alt="img" src="img/Imo/Century21.png"></a>
                          <span class="aa-date-tag">${result[i].Criacao}</span>
                        </figure>
                        
                          <h3><a onclick="goInfo(${result[i].ImoId})">${result[i].Name}</a></h3>
                          <p>A maior rede de franchising imobiliário do mundo – fundada em 1971 tem mais de 10.000 agências, em 88 países, com mais de 130 mil agentes em sua representação. A marca C21 é um dos principais pilares de seriedade, confiança e conhecimento no que concerne à atividade imobiliária.</p>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> ${result[i].Name}</a>
       
                          </div>
                        </div>                   
                      </article>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html

            }

        });
    }
);


$(document).ready(

    function imo(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/imo/3",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#imo3")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += ` 
                        <figure class="aa-blog-img">
                          <a href="#"><img alt="img" src="img/Imo/Remax.png"></a>
                          <span class="aa-date-tag">${result[i].Criacao}</span>
                        </figure>
                        
                          <h3><a onclick="goInfo(${result[i].ImoId})">${result[i].Name}</a></h3>
                          <p>Em Portugal, desde 2000, a RE/MAX Portugal tem vindo a consolidar a sua liderança. A força da marca, a eficiência do serviço e satisfação dos seus colaboradores têm vindo a ser reconhecidas e premiadas anualmente por várias entidades.</p>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> ${result[i].Name}</a>
                          </div>
                        </div>                   
                      </article>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html

            }

        });
    }
);