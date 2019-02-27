import React from 'react';

class ReviewDescription extends React.Component {
    
    render() { 
        return ( 
            <p>{this.props.children}</p>
         );
    }
}
 
export default ReviewDescription