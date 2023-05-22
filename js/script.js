$(document).ready(function () {
    /**Get current date */
    const date = new Date();
    const hour = date.getHours();
    let message = "";
    if (hour <= 12) {
        message = "Good Morning";
    }
    if (hour > 12) {
        message = "Good Afternoon";
    }
    if (hour >= 17) {
        message = "Good Evening"
    }
    $('#headingText-Time').empty().append(message + " From Hour Phalla")
})

// $(document).ready(function () {
//     $('#headingText-Time').append("Hey!")
// })