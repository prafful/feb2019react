import React from 'react';


class WelcomeReact extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            like:0,
            dislike:0,
            title:"prafful"
        }

        this.changeLike = this.changeLike.bind(this)
        this.changeDisLike = this.changeDisLike.bind(this)

    }

    changeLike = function(){
       this.setState({like: this.state.like+1})
    }

  
    changeDisLike(){
        this.setState({dislike: this.state.dislike-1})
    }


    render() { 
        return ( 
            <span>
                <h1>Welcome To React 16</h1>
                <button onClick={this.changeLike}>+</button>{this.state.like} 
             -  <button onClick={this.changeDisLike}>-</button>{this.state.dislike} 
             -  {this.state.title}
            </span>
         );
    }
}
 
export default WelcomeReact;
