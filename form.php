<?php
if(!isset($_POST['submit'])){
  //this page should be reached indirectly
  echo "error;you need to submit the form";
}
echo "Thanks! <a href=\"http:\/\/samuelboomer.kaarilandry.com\">home</a>";
$who = $_POST['who'];
$answer = $_POST['answer'];
$food = $_POST["food"];
$else = $_POST["else"];

$email_fromk = "kaari@secondseven.ca";
$email_froms = "samuelrboomer@gmail.com";
$email_subject = "RSVP";
$email_body = "rsvp message\n".
        "who:". $who ."\n".
        "answer:". $answer ."\n".
        "food " . $food .  "\n".
        "else:" . $else . "\n".
$tok = "kaari@secondseven.ca";
$tos = "samuelrboomer@gmail.com";
$headers = "From. $email_fromk \r\n";
//send email
mail($tok,$email_subject,$email_body,$headers);
$headers = "From. $email_froms \r\n";
mail($tos,$email_subject,$email_body,$headers);
//done redirect to thank you page
