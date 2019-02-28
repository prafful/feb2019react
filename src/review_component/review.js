import React from "react"
import ReviewTitle from "./review_child_component/reviewTitle";
import ReviewDescription from "./review_child_component/reviewDescription";
import ReviewRating from "./review_child_component/reviewRating";
import ReviewComment from "./review_child_component/reviewComment";

class Review extends React.Component{

    render(){
        return (
            <div>
                    <span>
                        <ReviewTitle>
                            {this.props.children}
                        </ReviewTitle>
                    </span>
                    <span>
                        <ReviewDescription>
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
                        <ReviewComment>
                            
                        </ReviewComment>
                    </span>
                    <hr></hr>
            </div>    
        )
    }


}



export default Review