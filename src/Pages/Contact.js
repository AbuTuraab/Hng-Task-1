function Contact() {
    return(

<div>

<form>      
  <input  type="text" class="feedback-input" placeholder="First Name" id="first_name" /> 
   <input  type="text" class="feedback-input" placeholder="Last Name" id="last_name" /> 
  <input  type="text" class="feedback-input" placeholder="Email" id="email" />
  <textarea  class="feedback-input" placeholder="Message" id="message"></textarea>
  <input id="btn__submit" type="submit" value="SUBMIT"/>
</form>
</div>
)
}

export default Contact;