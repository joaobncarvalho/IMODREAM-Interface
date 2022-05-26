let id = localStorage.getItem("imo_id")



$(document).ready(

    function imo(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/imo/"+id,
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#agency")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += ` 
                         <h2>${result[i].Name}</h2>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> Admin</a>
                            <a class="aa-blog-comments" href="#"><i class="fa fa-comment-o"></i>6</a>
                          </div>
                          <p>${result[i].Criacao}</p>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html

            }

        });
    }
);