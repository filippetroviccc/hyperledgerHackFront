// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

$$('#dugmePosalji').on('click',function(){
    myApp.alert('<div id="SuccesReply"><img src="images/checked.png" alt="" class="checkedImg"></div>','Verified!');
    myApp.alert('<div id="ErrorReply"><img src="images/warning.png" alt="" class="checkedImg"></div>','Report!');
})

$$('#dugmePosalji').on('click',function(){
    var data = $$('#idLeka').val();
    console.log(data);
    $$.ajax({
        type: 'get',    
        url:'http://localhost:3000/api/queries/selectCommoditiesByExchange?serialNumber=' + data,
        dataType: 'application/json',
        success: function(data){
            console.log(data);
        },
        error: function(err){
            console.log(err);
        }
    })
})