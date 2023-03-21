$(document).ready(()=>{
    $('#btnlookup').click(function(){
        if($('#txtsearch').val().trim() != ""){ 
            getResult();
        }
    });
    
    function getResult(){
        data = {"txtsearch" : $('#txtsearch').val() };  
        $.get("http://localhost:8080", data)
            .done(showResult)
            .fail(noResult);
    }

    function showResult(data){ 
        $("#content").html(data.toString());
    }
    
    function noResult (error){ 
        $('#content').html(error);
    }
});