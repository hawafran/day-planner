// DPENDANCIES


// STARTING DATA
// list f ppointments
var timesDiv= $('.times');

var appointment=$('.appointment');
var appointmentForm=$('#appointment-form');
var rowTime= $('.8');
console.log(rowTime)
    var appointments=[ 
      
    //     time: 9,
    //     text:"jquery"

       
    // }
]
    
    // ];

    function renderAppointments() {
       console.log("appointment")
       
        appointments.forEach(function(appointment){
           
           var appointmentCard=$('.appointment-text');
           var cardComment = $('<p>').addClass('appointment-text');
           cardComment.appendTo(appointmentForm);
        })
        }

        var handleFormSubmit = function (event) {
            event.preventDefault();

            localStorage.setItem('appointment-text','textboxValue') 

            renderAppointments()
        }

        var saveValue;
        
        function load(){

        saveValue = localStorage.getItem("appointment");
        document.getElementById("appointment-text").value = saveValue;

        };
        
        function save(){
            
            saveValue = document.getElementById("appointment-text").value;
            
            localStorage.setItem("appointment", saveValue);

        };

        const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));





Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

        appointmentForm.on('submit', handleFormSubmit);

        // document.getElementById("appointment-text").value = getSavedValue("appointment-text"); 

        
        // function saveValue(appointment){
        //     var val=appointment.value 

        //     localStorage.setItem(appointment, val);
        // }

       
        






// var appointmentDisplay=$("#appointment-display");

// var appointments=[ {
//     time:9,
//     topic:"jquery",
//     duration:"1 hour",
// }
// ]



// // FUNCTIONS

// function renderAppointments() {
//     // appointmentDisplay.empty();
//     console.log("rendering appointments")
//     appointments.forEach(function(appointment){
//     // { make appt div
//         var appointmentDiv=$('<div class="col-4 appointmet">')
//         appointmentDiv.text=("I'm an appointment")
//     // place it in appointment display area
//         appointmentDisplay.append(appointmentDiv)
//         appointmentDiv.append(appointmentCard)
// })
// }

// USER INTERCTIONS

// INNITIALIZATIONS
// renderAppointments()