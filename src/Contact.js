import React, {Component} from "react";
import './Contact.css'

export class Contact extends Component{
    render(){
        return(
            <div className="overLay">
            <div className="contactForm"> 
                <p style={{position: "fixed", top: "246px", left: "511px", width: "419px", height: "45px", textAlign: "left", fontWeight: "bold", fontSize: "42px", color: "#495057", display: "flexbox"}}> Contact</p>
                <p style={{position: "fixed", top: "292px", left: "511px", width: "294px", height: "14px", textAlign: "left", letterSpacing: "0.48px", color: "#ADB5BD", fontWeight: "light", fontSize: "12px", lineHeight: "38px", display: "flexbox"}}> Lorem Ipsum is simply dummy text of the printing </p>
                <form action ="./" method="post">
                    <div id="name">
                        <label for="fname" style={{position:"fixed", fontSize: "12px",top: "353px", left: "539px", width: "34px",height: "14px", textAlign: "left",letterSpacing: "0.48px", color: "#495057"}}>Name</label>
                        <input type="text" name="fname" style={{border: "none", position: "relative", top: "10px", width: "300px", left: "30px", backgroundColor: "#F8F9FA"}} / ><br/>
                    </div>
                    <div id="mail">
                        <label for="mail" style={{position:"fixed", fontSize: "12px",top: "410px", left: "539px", width: "37px",height: "14px", textAlign: "left",letterSpacing: "0.48px", color: "#495057"}}>E-mail</label>
                        <input type="text" name="mail" style={{border: "none", position: "relative", top: "10px", width: "300px", left: "30px", backgroundColor: "#F8F9FA"}}/ ><br/>
                    </div>
                    <div id="message">
                        <label for="message" style={{position:"fixed", fontSize: "12px",top: "465px", left: "539px", width: "52px",height: "14px", textAlign: "left",letterSpacing: "0.48px", color: "#495057"}}>Message</label>
                        <input type="text" name="message" style={{border: "none", position: "relative", top: "10px", width: "300px", width: "300px", left: "30px", backgroundColor: "#F8F9FA"}}/ ><br/>
                    </div>
                    <input type="submit" value="Submit" id="submit"/>
                    <img  onClick={this.props.closePopup} id="closeButton"/ >
                    <p id="footer"> Need more info? hello@newzera.com </p>
                </form>
            </div>
            </div>
        );
    }
}

export default Contact;