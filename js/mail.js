function sendMail() {
    var link = "mailto:info@Instastaff.com"
             + "?cc=jeff.richards@instastaff.com"
             + "&subject=" + escape("RE: Seeking Information on InstaStaff")
            //  + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Thank you for your interest in Steadfast! We will get back to you within 48 hours.";
//   }