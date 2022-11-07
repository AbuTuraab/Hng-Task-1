function Contact() {
    return(

<div>

<div className="tex">
<h1>Contact Me</h1>
<h4>Hi there, contact me to ask me about anything you have in mind.</h4>
</div>

<form>      
  <input  type="text" class="feedback-input" placeholder="First Name" id="first_name" /> 
   <input  type="text" class="feedback-input" placeholder="Last Name" id="last_name" /> 
  <input  type="text" class="feedback-input" placeholder="Email" id="email" />
  <textarea  class="feedback-input" placeholder="Message" id="message"></textarea>
   
 
  <div>
    <label class="container">You agree to providing your data to Aliyu who may contact you
    <input type="checkbox" id="checkbox" />
      <span class="checkmark"></span>
    </label>
  </div>
     
   <input id="btn__submit" type="submit" value="SUBMIT"/>
</form>
</div>
)
}

export default Contact;