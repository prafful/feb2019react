import React from 'react';

class ReviewComment extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            createComment:"",
            postComment:""
        }

        this.commentChange = this.commentChange.bind(this)
        this.postComment = this.postComment.bind(this)
    }

    commentChange(event){
        //console.log(event)
        console.log(event.target.value)
        this.setState({createComment: event.target.value})
        console.log("State Value:")
        console.log(this.state.createComment)
    }

    postComment(){
        console.log("I will post comment to server...")
        this.setState({postComment: this.state.createComment})

        this.props.incrementCommentByOne()

    }
    
    render() { 
        return ( 
            <div>
                Comment:
                <input type="text" onChange={this.commentChange}></input>
                <button onClick={this.postComment}>Add Comment</button>
               
                <br></br>
                {this.state.postComment}
            </div>
         );
    }
}
 
export default ReviewComment;