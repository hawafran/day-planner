
var timesDiv= $('.times');

var appointment=$('.appointment');
var appointmentForm=$('#appointment-form');
var appointmentCard=$('.appointment-text');

var NowMoment = moment();
var eDisplayMoment = document.getElementById('moment');
eDisplayMoment.innerHTML = NowMoment.format('dddd MM/DD/YYYY h:mmA');

    var appointments=[];

    function renderAppointments() {
       console.log("appointment")
       
        appointments.forEach(function(appointment){
           
           
           var cardComment = $('<p>').addClass('appointment-text');
           cardComment.appendTo(appointmentForm);
        })
        }

        var handleFormSubmit = function (event) {
            event.preventDefault();

            localStorage.setItem('textbox-value',JSON.stringify(appointments.value));

            renderAppointments()
        }

        var saveValue;
        
        function load(){

        saveValue = localStorage.getItem("appointment");
        document.getElementById("appointment-text").value = saveValue;

        };
        
        // function save(){
            
        //     saveValue = document.getElementById("appointment-text").value;
            
        //     window.localStorage.setItem("appointment", saveValue);

        // };

        appointmentForm.on('submit', handleFormSubmit);
       
