function getPropretyList() {

    $.ajax({
        url: "https://imodream-api.herokuapp.com/api/proprety/one",
        type: "GET",
        dataType: 'json',
        success: function(result) {
            console.log(result);
            $('#Moradia_Tipo').innerText=result;
        }
    });
}getPropretyList();