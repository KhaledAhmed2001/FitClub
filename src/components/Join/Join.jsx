import React , { useRef }  from 'react'
import './Join.css'
// import emailjs from '@emailjs/browser';
import emailjs from '@emailjs/browser'


function Join() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qk9975p', 'template_0693c0n', form.current,'qfrHrg7jja1QnNWOr' )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div className="">
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP</span>
            </div>
            <div className="">
            <span >YOUR BODY </span>
            <span className='stroke-text'>WITH US ?</span>
            </div>
            </div>


        <div className="right-j">
            <form action="" ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='enter your email address' />
                <button className='btn btn-j'>join now</button>
            </form>
        </div>
    </div>
    )
}

export default Join