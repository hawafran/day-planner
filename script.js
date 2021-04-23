// DPENDANCIES


// STARTING DATA
// list f ppointments
var appointments =[

    time: 8
    topic: 
    duration:
]



// FUNCTIONS
// render appointments
funciton renderAppointments() {
    appointmentsDisplayDiv.empty();
    
    appointments.forEach(functions(appointment)
    // { make appt div
        var appointmentDiv=$('<div class="col-4 appointmet">')
        appointmentDiv.text=("I'm an appointment")
    // place it in appointment display area
        appointmentDisplayDiv.append(appointmentDiv)
    })
}

// USER INTERCTIONS

// INNITIALIZATIONS
// render appointments