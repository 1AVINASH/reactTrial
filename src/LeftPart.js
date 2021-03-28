import React, { Component } from 'react' 
import './LeftPart.css'
import Popup from 'react'

export class LeftPart extends Component {  
    render() {
        return (
            <div style={{float: "left", marginRight:"0px", marginLeft:"0px", width: "720px", height: "100vh"}}>
                <br/>
                <img src = {'assets/Cat-N-Dog-Logo copy@2x.png'}  style={{top: "40px", left: "41px", width: "194px", height: "62px", position: "absolute"}} />
                <div className = "content"><p className = "upperText">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="sampleText"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="img">
                    <img src = {'assets/google-play-badge.png'} className = "googlePlay" style={{backgroundImage: ""}}/> 
                    <img src = {'assets/AppStoreBadge.svg'} className = "appStore" /> 
                </div>
            </div>
        ); 
    }
}
export default LeftPart