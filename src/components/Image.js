
import React,{Component} from 'react';
import Img from './image1.jpg';

class Image extends Component{
    render(){
        return(
            <center>
                <img src={Img} alt="image1"/>
                </center>
        )
    }
}

export default Image