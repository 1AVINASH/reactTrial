import React, { Component } from 'react' 
import './ToolBar.css'
import 'reactjs-popup/dist/index.css';
import Contact from './Contact'

export class ToolBar extends Component{
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        if(this.state.showPopup){
            document.body.style.overflow = 'hidden';
        }
            document.body.style.overflow = 'unset';
        
    };

    render(){
        return(
            <div>
                <div className = "topnav">
                <a href ="" style={{position: "fixed", top: "48px", left: "1171px", width: "34px", height: "14px"}}> About </a>
                <a href ="" style={{position: "fixed", top: "48px", left: "1226px", width: "25px", height: "14px"}}> Blog </a>
                <a href ="" style={{position: "fixed", top: "48px", left: "1272px", width: "43px", height: "14px"}}> Careers </a>
                <a className="contactLink" style={{position: "fixed", top: "47.5px", left: "1335px", display: "flexbox", zIndex: "2", fontWeight: "100px", color: "#f7f7f7", fontSize: "12px"}} onClick={this.togglePopup.bind(this)}
                    > Contact</a>
                     {this.state.showPopup ? 
          <Contact
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
                </div>
                </div>
        );
    }
}

export default ToolBar;