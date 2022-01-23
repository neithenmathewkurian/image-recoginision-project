// https://teachablemachine.withgoogle.com/models/tI7cvPsii/
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );
 function photo(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="appa"  src="'+data_uri+'"/>';
    } )};