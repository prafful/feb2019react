import React from 'react';


class ReviewRating extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            like: parseInt(this.props.rrlike),
            dislike: parseInt(this.props.rrdislike)
        }

        this.changeLike = this.changeLike.bind(this)
        this.changeDisLike = this.changeDisLike.bind(this)
    }

    changeLike = function(){
        this.setState({like: this.state.like + 1})
    }

    changeDisLike = function(){
        this.setState({dislike: this.state.dislike - 1})
    }
    
    render() { 
        return ( 
            <span>
                <button onClick={this.changeLike}> + </button> {this.state.like}
                <button onClick={this.changeDisLike}> - </button> {this.state.dislike}
            </span>
         );
    }
}
 
export default ReviewRating;