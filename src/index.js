import React from 'react';
import ReactDOM from 'react-dom';
import  WelcomeReact from "./component/myFirstReactComponent";
import Review from './review_component/review';


var location = document.getElementById('myreactroot')
var reviewLocation = document.getElementById('review')

ReactDOM.render(    <div>
                        <WelcomeReact></WelcomeReact>
                    </div>
                    , location )

ReactDOM.render(   <div>
                    <Review desc="Cool gadget for creative people" like="25" dislike="5">Samsung Note 9</Review>
                    <Review desc="Record your lives in 4K" like="125" dislike="55">Go Pro Action Camera</Review>
                    <Review desc="find a friend in google" like="265" dislike="51">Google Home 4</Review>
                    <Review desc="take your drive off grid" like="250" dislike="15">Tesla Drive</Review>
                   </div>

    
    , reviewLocation)