var conn = new WebSocket('ws://' +socket_host+':'+socket_port);
console.log('ws://' +socket_host+':'+socket_port);
conn.onmessage = function(e) { console.log(e.data); };
conn.onopen = function(e) {
    console.log("Connection established!");
    conn.send('Hello Me!');
};

/**
 * Submit has been pressed excute sending
 * to server.
 */
$('.btn-send').on('click', function() {
    var input_value = $('.client_chat').val();
    conn.send(input_value);

    $('.client_chat').val('')});