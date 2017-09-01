function get_nanopool_info(wallet_addr, success_cb, error_cb) {

    var request_url = "https://api.nanopool.org/v1/eth/user/" + wallet_addr;

    var request = {
        url: request_url,
        method: "get",
        success: success_cb
    };

    if (error_cb) {
        request['error'] = error_cb;
    }

    $.ajax(request);
}

$(document).ready(function(){
    var wallet_addr = "36D2f23854185a00Ff2A24E0AF758762438B3c14";

    $("#wallet_address").text(wallet_addr);

    $("#updatebutton").click(function(e){
        e.preventDefault();
        get_nanopool_info(wallet_addr,
            function(msg){
                console.log(msg);
            });
    });
});