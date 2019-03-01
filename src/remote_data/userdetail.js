import React from 'react';

class UserDetailDisplay extends React.Component {
   
    render() { 
        return (  
            <tr>
                <td>{this.props.ctext}</td>
                <td>{this.props.clike}</td> 
                
            </tr>
        );
    }
}
 
export default UserDetailDisplay;