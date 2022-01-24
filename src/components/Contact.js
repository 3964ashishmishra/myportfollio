import React from 'react'
import emailjs from "emailjs-com"

const Contact = () => {

    const sendEmail = (e) =>{
            e.preventDefault();
            const res = emailjs.sendForm("service_w4s415m","template_wsaud9a",e.target,"user_PbGqZHLNrGknGol5HMFXW")
            console.log(res);
    }

	const msgAlert = () =>{
		alert("Thank You For Contacting Me");
	}
    return (
        <>
 
 
 <div class="contact mt-5" id="contact">
			<div class="content">
			<h3>Contact <span className="vice"> Me</span></h3>
			<p>if you have any question, please contact us:)</p>
				<div class="column">
					<div class="text-field-name-1">
							<form>
								<input type="text" class="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = ' Enter your name';}" placeholder="Enter Your Name"/>
								</form>
					</div>
					<div class="text-field-email-1">
							<form>
								<input type="text" class="text"  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter your email';}" placeholder="Enter Your Email"/>
							</form>
					</div>
					<div class="text-field-subject-1">
							<form>
								<input type="text" class="text"  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = ' Subject';}" placeholder="Enter Your Phone"/>
							</form>
					</div>
				</div>
				<div class="column">
						<div class="text-field-area-">
							<form>
								<textarea placeholder="message" onfocus="if(this.value == 'Message') this.value='';" onblur="if(this.value == '') this.value='Message';"></textarea>
							</form>
						</div>
						<div class="button">
							<form>
								<input type="submit" onClick= {msgAlert} value="send message"/>
							</form>
						</div>
				</div>
			</div>
		</div>
        </>
    )
}

export default Contact
