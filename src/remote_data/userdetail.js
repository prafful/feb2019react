import React from 'react';

class UserDetailDisplay extends React.Component {
   
    render() { 
        return (  
            <div>
                {this.props.name} | {this.props.username} | {this.props.email}
            </div>
        );
    }
}
 
export default UserDetailDisplay;