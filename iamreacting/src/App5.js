import React from 'react';

/**
 * 
 * passing state to child component as props
 * 
 */
class UserPost extends React.Component {

    constructor() {
        super();
        this.state = {
            post:"Hello World",
            author: "Sumit Kawatra",
            comments : [
                {   
                    comment : "Hi There",
                     user: "Puneet"

                },
                {   
                    comment : "Hello Buddy",
                     user: "Rahul"

                },
                 {   
                    comment : "Hola",
                     user: "Mohan"

                },
                 {   
                    comment : "Dilo ka shooter hai mera scooter",
                     user: "Dhinchak Pooja"

                }
            ]
        }

    }

    render () {
        return (
            <div>
                <p>Post   : {this.state.post}</p>
                <p>Author : {this.state.author}</p>
                <table>                    
                    <HeaderRender/>
                    <tbody>
                    {this.state.comments.map( (comment,i) => <CommentRender data = {comment}/> )}
                    </tbody>
                </table>
            </div>
        );

    }


}


class HeaderRender extends React.Component {

    render() {
        return (
            <tr>
                <th>Comment</th>
                <th>User</th>
            </tr>
        );
    }


}


class CommentRender extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.data.comment}</td>
                <td>{this.props.data.user}</td>
            </tr>
        );
    }


}

export default UserPost;