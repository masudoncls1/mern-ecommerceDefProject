import React,{Component} from "react";

import './profile.style.css';


import Bio from "./Bio";

import Skills from "./Skills";

import Links from "./Links";


class Profile extends Component{
    me={
        name:'Masud Rana',
        title:'Compreativie Programming, Mern Stack Developer',
        skilla:'C',
        skillb:'C++',
        skillc:'Java',
        skilld:'JavaScript'
    }
    render(){
        return(
            <div className="container">
             <Bio name={this.me.name}
                  title={this.me.title}/>
            <Skills 
                skilla={this.me.skilla} 
                skillb={this.me.skillb} 
                skillc={this.me.skillc}
                skilld={this.me.skilld}
            />
                <Links/>
            </div>
        )
    }
}
export default Profile;