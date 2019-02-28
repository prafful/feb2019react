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
        axios.get("https://jsonplaceholder.typicode.com/users")
                .then((mydata)=>{
                    console.log(mydata.data)
                    this.setState({remoteUsers: mydata.data})
                })
    }

    renderRemoteData(){
        return this.state.remoteUsers.map((user)=>{
            return (
                <UserDetailDisplay
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                ></UserDetailDisplay>
            )
        })
    }

    render() { 
        return ( 
            <div>
                <h2>Data from REST API!!!!</h2>
                    {this.renderRemoteData()}

                    
            </div>
         );
    }
}

export default RemoteData;
