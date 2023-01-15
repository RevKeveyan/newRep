import React, { Component } from "react";


export class List1 extends Component{


    render () {

        const {img,name,profession,descr,social} = this.props

        return<>
            <div className="social_wrapper">
                         <div className="social_img">
                         <img src={img} alt={name} />
                         </div>   

                         <div className="social_info">
                            <div>
                             <div className="social_title">{name}</div>
                             <div className="social_subtitle">{profession}</div>
                             <div className="social_descr">{descr}</div></div>
                             <div className="scoial_icons">
                             {social.map((icon,index)=>{
                            return <div key = {index}>
                               <a href={icon.link}><img src={icon.icon} alt={icon.name} /></a>
                            </div>
                           })}
                            </div>
                        </div>
                    </div>
        </>
    }

}