import React from 'react'
import {Link} from "react-router-dom";


class About extends React.Component{
    gotohome=()=>{
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <h1>About</h1>
                {/* <Link to="/">Go to home</Link> */}
                <button onClick={this.gotohome}>Go to home</button>
            </div>
        )
    }
}
export default About;