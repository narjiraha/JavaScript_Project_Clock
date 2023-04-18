function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session = document.getElementById('sessions');
    var greeting = document.getElementById('greeting');


    //  Show greeting based on the clock timing // below the clock
    var greetingElement = document.getElementById('breakfast_heading');

    // If it's between 6am and 12pm, display "GOOD MORNING WAKE UP!!"
    if (hrs >= 6 && hrs < 12) {
        greeting.innerHTML = 'GOOD MORNING WAKE UP!!';
    }

    // If it's between 12pm and 4pm, display "GOOD AFTERNOON!!"
    else if (hrs >= 12 && hrs < 16) {
        greeting.innerHTML = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
    }

    // If it's between 4pm and 8pm, display "GOOD EVENING!!"
    else if (hrs >= 16 && hrs < 20) {
        greeting.innerHTML = 'GOOD EVENING !!';
    }

    // If it's after 8pm or before 6am, display "GOOD NIGHT!!"
    else {
        greeting.innerHTML = 'GOOD NIGHT !!';
    }

    // for alarm1 (set wake up time)
    document.getElementById("setAlarmBtn").addEventListener("click", function () {
        var optionList1 = document.getElementById("optionList1");
        var selectedOption = optionList1.options[optionList1.selectedIndex].text;

        document.getElementById("alarm1").innerHTML = "Set wake up time: " + selectedOption;

        var optionList2 = document.getElementById("optionList2");
        var selectedOption = optionList2.options[optionList2.selectedIndex].text;

        document.getElementById("alarm2").innerHTML = "Set lunch time: " + selectedOption;

        var optionList3 = document.getElementById("optionList3");
        var selectedOption = optionList3.options[optionList3.selectedIndex].text;

        document.getElementById("alarm3").innerHTML = "Set nap time: " + selectedOption;

        var optionList4 = document.getElementById("optionList4");
        var selectedOption = optionList4.options[optionList4.selectedIndex].text;

        document.getElementById("alarm4").innerHTML = "Set night time: " + selectedOption;
    });


    // Changing text according to the clock // left container
    if (hrs >= 6 && hrs < 12) {
        // If it's between 6am and 12pm, display "GOOD MORNING WAKE UP!!"
        greetingElement.innerHTML = 'GOOD MORNING WAKE UP!!';
    } else if (hrs >= 12 && hrs < 16) {
        // If it's between 12pm and 4pm, display "GOOD AFTERNOON!!"
        greetingElement.innerHTML = 'LET\'S HAVE SOME LUNCH !!';
    } else if (hrs >= 16 && hrs < 20) {
        // If it's between 4pm and 8pm, display "GOOD EVENING!!"
        greetingElement.innerHTML = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!';
    } else {
        // If it's after 8pm or before 6am, display "GOOD NIGHT!!"
        greetingElement.innerHTML = 'CLOSE YOUR EYES AND GO TO SLEEP!';
    }

    // Changing image according to the clock timing // below thw clock

    // Check if the current time is between 6am and 12pm
    if (hrs >= 6 && hrs < 12) {
        // Change the image to the good morning 
        document.querySelector('.goodmornigimg').src = './image/component.jpg';
    }

    // Check if the current time is between 12pm and 4(16)pm
    else if (hrs >= 12 && hrs < 16) {
        // Change the image to the good good afternoon
        document.querySelector('.goodmornigimg').src = './image/afternoon_image.png';
    }

    // Check if the current time is between 4(16)pm and 8(20)pm
    else if (hrs >= 16 && hrs < 20) {
        // Change the image to good evening image
        document.querySelector('.goodmornigimg').src = './image/evening_image.png';
    }


    // Check if the current time is between 8pm and 11:59pm
    else if (hrs >= 20 && hrs <= 23) {
        // Change the image to good night image
        document.querySelector('.goodmornigimg').src = './image/night_image.png';
    }

    // Check if the current time is between 12am and 6am
    else if (hrs >= 0 && hrs < 6) {
        // Change the image to good morning image
        document.querySelector('.goodmornigimg').src = './image/night_image.png';
    }

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 1000);


