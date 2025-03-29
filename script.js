const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("mail");
const number = document.getElementById("num");
const subject = document.getElementById("sub");
const message = document.getElementById("msg")
function sendEmail(){
    const bodyMessage = `Full Name:${fullName.value}<br> Email:${email.value}<br> Pnumber:${number.value}<br> 
    sub:${subject.value}<br>msg:${message.value}`;
    Email.send({
        Host : "s1.maildns.net",
        Username : "syamannaluru@gmail.com",
        Password : "878C1DD9DE4395842BB773A97F9EBA5A822C",
        To : 'syamannaluru@gmail.com',
        From : "syamannaluru@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          
        }
      }
    );

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
})