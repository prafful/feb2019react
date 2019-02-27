import React from 'react';


class ReviewRating extends React.Component {
    
    render() { 
        return ( 
            <span>
                <button> + </button> {this.props.rrlike}
                <button> - </button> {this.props.rrdislike}
            </span>
         );
    }
}
 
export default ReviewRating;