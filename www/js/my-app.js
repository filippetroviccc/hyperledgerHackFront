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
    var data = $$('#idLeka').val();
    $$.ajax({
        type: 'get',    
        url:'http://localhost:3000/api/queries/checkForDrug?serialNumber=' + data,
        dataType: 'application/json',
        success: function(data){
            data=JSON.parse(data)
            console.log(data);
            if(data.length>0){
                var location = "";
                for(var i=0;i<data[0].registeredLocations.length;i++){
                    location += data[0].registeredLocations[i]+" ";
                    console.log(data[0].registeredLocations[i]);
                }
                console.log(location)
                myApp.alert('<div id="SuccesReply"><img src="images/checked.png" alt="" class="checkedImg"><div>'+location+'</div></div>',data[0].name + ' verified!');
            }else{
                myApp.alert('<div id="ErrorReply"><img src="images/warning.png" alt="" class="checkedImg"></div>','Report!');
            }
        },
        error: function(err){
            console.log(err);
        }
    })
})