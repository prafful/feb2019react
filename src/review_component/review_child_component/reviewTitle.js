import React from "react";

class ReviewTitle extends React.Component{

    render(){
        return(
            <h4>{this.props.children}</h4>
        )
    }
}

export default ReviewTitle