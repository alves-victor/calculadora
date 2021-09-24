function insert(param){
    let text = $('#screen-result').text();

    $('#screen-result').text(text + param);  
    
    $('#screen-erase').css('display', 'block');
}

function erase(){
    $('#screen-result').text("");

    $('#screen-erase').css('display', 'none');
}

function goBack(){
    let text = $('#screen-result').text();

    $('#screen-result').text(text.substring(0, text.length -1)); 

    if (text.length === 1){
        $('#screen-erase').css('display', 'none');
    }
}

function result(){
    let text = $('#screen-result').text();

    if(text){
        $('#screen-result').text(eval(text));
    }
}
