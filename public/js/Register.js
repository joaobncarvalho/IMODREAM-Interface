$(document).ready(function() {

    $('#btnSubmit').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnSubmit").prop("disabled", true);

        const formData = {
            name: jQuery('[Name=name]').val(),
            email: jQuery('[name=email]').val(),
            phoneN: jQuery('[name=phoneN]').val(),
            pw: jQuery('[name=pw]').val(),
            morada: jQuery('[name=morada]').val(),
            bdate: jQuery('[name=bdate]').val(),
            utype: jQuery('[name=utype]').val()
        };

        $.ajax({
            url : "https://imodream-api.herokuapp.com/api/users/add_users",
            type: "POST",
            data : formData, // data in json format
            async : false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
            success: function(response, textStatus, jqXHR) {
                console.log(response);
                localStorage.setItem("user", JSON.stringify(response))
                window.location = "https://imodashboard.herokuapp.com/pages/dashboard.html"
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
});