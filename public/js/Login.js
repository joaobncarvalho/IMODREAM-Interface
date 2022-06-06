$(document).ready(function() {

    $('#btnLogin').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        let email = document.getElementById('email').value
        let password = document.getElementById('password').value


        $.ajax({
            url: 'https://imodream-api.herokuapp.com/api/users/login/'+email+'/'+password,
        type: "GET",
            dataType: 'json',
            success: function(response) {
                console.log(Object.keys(response).length)
                if(Object.keys(response).length==0){
                    alert("Garciou")
                }else{
                    alert("Login Efetuado com Relativo Sucesso!")
                    localStorage.setItem("user", JSON.stringify(response))
                    window.location = "https://imodashboard.herokuapp.com/pages/dashboard.html"
                }



        },
        error: function (response) {
            alert("Garciou")
            $("#btnSubmit").prop("disabled", false)
        }
    });

    });
});