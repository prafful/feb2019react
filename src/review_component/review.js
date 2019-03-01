import React from "react"
import ReviewTitle from "./review_child_component/reviewTitle";
import ReviewDescription from "./review_child_component/reviewDescription";
import ReviewRating from "./review_child_component/reviewRating";
import ReviewComment from "./review_child_component/reviewComment";

class Review extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            incComment:parseInt(this.props.noc)
        }
        this.incrementComment=this.incrementComment.bind(this)
    }

    incrementComment = function(){
        console.log("I am called from child component")
        this.setState({incComment: this.state.incComment+1})
    }

    render(){
        return (
            <div>
                    <span>
                        <ReviewTitle>
                            {this.props.children} 
                        </ReviewTitle>
                    </span>
                    <span>
                        <ReviewDescription totalcomment={this.state.incComment}>
                            {this.props.desc}
                        </ReviewDescription>
                    </span>
                    <span>
                        <ReviewRating 
                            rrlike={this.props.like}
                            rrdislike={this.props.dislike}>
                            {this.props.like}
                        </ReviewRating>
                    </span>
                    <span>
                        <ReviewComment incrementCommentByOne={this.incrementComment}>
                           
                        </ReviewComment>
                    </span>
                    <hr></hr>
            </div>    
        )
    }


}



export default Review