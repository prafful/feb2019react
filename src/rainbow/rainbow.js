import React from 'react';

import './style.css'

class Rainbow extends React.Component {
    
    render() { 

        var alphabetStyle = {
            backgroundColor: this.props.bcol,
            color:this.props.fcol,
            padding: "5px",
            margin: "5px"
        }


        return ( 
            <span /*className="alphabetColor"*/  style={alphabetStyle}> {this.props.children} </span>
         );
    }
}
 
export default Rainbow;