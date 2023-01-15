import React, { Component } from "react";


export class ReadAbout extends Component{


    render (){
    const {icon, name, descr, index} = this.props
        
    return <>    
        <div>
                    <div className="read_img">
                        <img src={icon} alt={name} />
                    </div>
                    <div className="read_descr">
                        {descr}
                    </div>
                    <button className="read_btn" id = {'btn'+index}>Read More</button>
                </div>
    </>

}
    
}