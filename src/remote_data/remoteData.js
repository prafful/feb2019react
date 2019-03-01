import React from 'react';

import axios from "axios";
import UserDetailDisplay from './userdetail';

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            remoteUsers:[]
        }
    }
    
    componentWillMount(){
        this.getRemoteData()
    }

    getRemoteData(){
        axios.get("http://localhost:3000/comments")
                .then((mydata)=>{
                    console.log(mydata.data)
                    this.setState({remoteUsers: mydata.data})
                })
    }

    renderRemoteData(){
        return this.state.remoteUsers.map((comment)=>{
            return (
                <UserDetailDisplay
                    key={comment.id}
                    ctext={comment.commentText}
                    clike={comment.commentlike}
                ></UserDetailDisplay>
            )
        })
    }

    render() { 
        return ( 
            <div>
                <h2>Data from REST API!!!!</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Comment Text</th>
                                <th>Like</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRemoteData()}
                        </tbody>
                        
                    </table>
                    
            </div>
         );
    }
}

export default RemoteData;
