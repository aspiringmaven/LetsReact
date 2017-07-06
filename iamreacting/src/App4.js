import React from 'react';
/**
 * 
 * After props this is state in a React Controller
 * 
 */
class BetterProject extends React.Component{


    constructor() {
        super();
        this.state = {
            code : 11111,
            name : "Empower USA",
            team : ["Surendar ", "Deepak ", "Sumit " ],
            teamSize : function (dummy) {
                return "I do not know " + dummy;
            },
            stack : {
                frontend : "React Java",
                service : "Spring Boot",
                architecture : "Microservices",
                infra : "AWS",
                db : "Oracle"
            },
            printStack : function (stack) {
                return JSON.stringify(stack);
            }
        }
    }


    render () {
        return (
            <div>
                <div>Project Name : {this.state.name}</div>
                <div>Project Code : {this.state.code}</div>
                <div>Project Team : {this.state.team}</div>
                <div>Team Size    : {this.state.teamSize("what to do")} </div>
                <div>Technology Stack: {this.state.printStack(this.state.stack)} </div>


            </div>
        );
    }
}

export default BetterProject;