// import shake from "./shakejs/shake";


var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});
console.log('shake')
myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {

    //put your own code here etc.
    alert('shake!');

    // Redirect to stestimonial.html
    window.location.href = 'stestimonial.html';
    myShakeEvent.stop();
}