import React from 'react';

class ReviewDescription extends React.Component {
    
    render() { 
        return ( 
            <div>
            <p>{this.props.children}</p>
            <p>Total comments: {this.props.totalcomment}</p>
            </div>
         );
    }
}
 
export default ReviewDescription