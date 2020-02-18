import React, { Component } from 'react';
class studentlogin extends Component {
    constructor(props) {
        super(props);
        this.state = { sid:" " }
    }
    keshav = () => {
        var value=this;
     alert(sessionStorage.getItem('sid'));
      };

    render() { 
        return ( 
            <body onLoad={this.keshav()}>

            </body>
         );
    }
}
 
export default studentlogin;