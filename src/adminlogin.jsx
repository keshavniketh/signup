import React, { Component } from 'react';
class adminlogin extends Component {
    constructor(props) {
        super(props);
        this.state = { aid:" " }
    }
    keshav = () => {
        var value=this;
     alert(sessionStorage.getItem('aid'));
      };

    render() { 
        return ( 
            <body onLoad={this.keshav()}>

            </body>
         );
    }
}
 
export default adminlogin;