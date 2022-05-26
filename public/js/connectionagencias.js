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
                          <a href="#"><img alt="img" src="img/blog-img-1.jpg"></a>
                          <span class="aa-date-tag">${result[i].Criacao}</span>
                        </figure>
                        
                          <h3><a onclick="goInfo(${result[i].ImoId})">${result[i].Name}</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio est quaerat magnam exercitationem voluptas, voluptatem sed quam ab laborum voluptatum tempore dolores itaque, molestias vitae.</p>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> Admin</a>
                            <a class="aa-blog-comments" href="#"><i class="fa fa-comment-o"></i>6</a>
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
                          <a href="#"><img alt="img" src="img/blog-img-1.jpg"></a>
                          <span class="aa-date-tag">${result[i].Criacao}</span>
                        </figure>
                        
                          <h3><a onclick="goInfo(${result[i].ImoId})">${result[i].Name}</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio est quaerat magnam exercitationem voluptas, voluptatem sed quam ab laborum voluptatum tempore dolores itaque, molestias vitae.</p>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> Admin</a>
                            <a class="aa-blog-comments" href="#"><i class="fa fa-comment-o"></i>6</a>
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
                          <a href="#"><img alt="img" src="img/blog-img-1.jpg"></a>
                          <span class="aa-date-tag">${result[i].Criacao}</span>
                        </figure>
                        
                          <h3><a onclick="goInfo(${result[i].ImoId})">${result[i].Name}</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio est quaerat magnam exercitationem voluptas, voluptatem sed quam ab laborum voluptatum tempore dolores itaque, molestias vitae.</p>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> Admin</a>
                            <a class="aa-blog-comments" href="#"><i class="fa fa-comment-o"></i>6</a>
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