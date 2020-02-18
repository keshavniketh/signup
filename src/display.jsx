import React from 'react';
import logo from './logo.svg';
//import './App.css';
//import Logo from './logo.jpg';



// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="logo" />;
// }
// export default Header;
class Time extends React.Component
// {constructor(props)
//     {
//         super(props)
//         this.state={day:'',room:''}
        
//         this.change=this.change.bind(this)
       
//         this.handle=this.handle.bind(this)

     

        
//     } 


//     change(event)
//     {
        
//         // if(!(/^[a-z\s]+$/i.test(this.state.name)))
//         // {
//         //     alert("Name should not contain numbers or special characters");
//         //     event.preventDefault();
//         // }

//         if(this.state.sem === "day")
//         {
//             alert("enter SEM");
//             event.preventDefault();
//         }

//         else if(this.state.number=== "room")
//         {
//             alert("enter YEAR");
//             event.preventDefault();
//         }
     




//     }

//     handle(e)
//     {
//         const day = e.target.day;
//         const val = e.target.value;

//         this.setState({[day]: val})
//         // alert(this.state.name) 
//         // alert(this.state.number)
//         // alert(this.state.date)
//         // alert(this.state.code)
//     }
{constructor(props){
  super(props);

  this.state = {
      fields1: {},
     errors1: {}

}
}
handleValidation1(){
let fields1 = this.state.fields1;
let errors1 = {};
let formIsValid1 = true;

//Name
if(!fields1["sem"]){
  formIsValid1 = false;
  errors1["sem"] = "Cannot be empty";
}

// if(typeof fields1["sem"] !== "undefined"){
//   if(!fields1["sem"].match(/[1-8]/)){
//      formIsValid1 = false;
//      errors1["sem"] = "Only 1-8";
//   }        
// }

//Email
if(!fields1["day"]){
  formIsValid1 = false;
  errors1["day"] = "Cannot be empty";
}




// if(typeof fields1["day"] !== "undefined"){
//    if(!fields1["day"].match(/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/)){
//       formIsValid1 = false;
//       errors1["day"] = "Only from MONDAY-FRIDAY";
//    }        
// }

if(!fields1["room"]){
  formIsValid1 = false;
  errors1["room"] = "Cannot be empty";
}
//Email
if(!fields1["year"]){
   formIsValid1 = false;
   errors1["year"] = "Cannot be empty";
}

 
// if(typeof fields1["year"] !== "undefined"){
//     if(!fields1["year"].match(/2019/)){
//        formIsValid1 = false;
//        errors1["year"] = "Only 2019";
//     }        
//  }

this.setState({errors1: errors1});
return formIsValid1;
}


contactSubmit1(e){


if(this.handleValidation1()){
  // alert("Form submitted");
}else{
  alert("Form has errors.")
  e.preventDefault();
}

}
handleChange1(field, e){         
   let fields1 = this.state.fields1;
   fields1[field] = e.target.value;        
   this.setState({fields1});
}

// handleValidation2(){
//    let fields2 = this.state.fields2;
//    let errors2 = {};
//    let formIsValid2 = true;

//    //Name
//    if(!fields2["sem"]){
//       formIsValid2 = false;
//       errors2["sem"] = "Cannot be empty";
//    }

//    if(typeof fields2["sem"] !== "undefined"){
//       if(!fields2["sem"].match(/[1-8]/)){
//          formIsValid2 = false;
//          errors2["sem"] = "Only 1-8";
//       }        
//    }

//    //Email
//    if(!fields2["day"]){
//       formIsValid2 = false;
//       errors2["day"] = "Cannot be empty";
//    }

   

    
//    if(typeof fields2["day"] !== "undefined"){
//        if(!fields2["day"].match(/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/)){
//           formIsValid2 = false;
//           errors2["day"] = "Only from MONDAY-FRIDAY";
//        }        
//     }


//    //Email
//    if(!fields2["year"]){
//        formIsValid2 = false;
//        errors2["year"] = "Cannot be empty";
//     }




//     if(typeof fields2["year"] !== "undefined"){
//         if(!fields2["year"].match(/2019/)){
//            formIsValid2 = false;
//            errors2["year"] = "Only 2019";
//         }        
//      }

//   this.setState({errors2: errors2});
//   return formIsValid2;
// }


// contactSubmit2(e){
  

//    if(this.handleValidation2()){
//       // alert("Form submitted");
//    }else{
//       alert("Form has errors.")
//       e.preventDefault();
//    }

// }
// handleChange2(field, e){         
//    let fields2 = this.state.fields2;
//    fields2[field] = e.target.value;        
//    this.setState({fields2});
// }


render(){
  return(
    
     
      
    <div class="limiter" >
      
    {/* <div className="container-login100" style={{backgroundImage: {flex: 1,resizeMode: 'stretch'},backgroundImage: 'url("https://edtechmagazine.com/higher/sites/edtechmagazine.com.higher/files/styles/cdw_hero/public/articles/hied-flipped.jpg?itok=0JGxMS-4")'}}> */}
    
      <div  style={{backgroundColor:"#ffeecc"}}>
      
      
        <h1 style={{textAlign: 'center', border: '20px solid white', padding: '20px', backgroundColor: '#b3daff', borderBottom: '20px solid grey'}}>ROOMWISE TIMETABLE</h1>
          
          
          <form action="http://localhost:8001/daywise" method="POST"  style={{border: '3px solid black', textAlign: 'center', padding: '15px', margin: '100px 450px', backgroundColor: 'ivory', borderRadius: '35px',marginTop:"7%"}}>
          {/* <label><h3 style={{paddingLeft:'70px',paddingRight:'20px'}}>YEAR:</h3></label>
        <select id="lang" name="year" onChange={this.handleChange1.bind(this, "year")} style={{borderRadius:'10px',paddingRight:'10px',paddingLeft:'10px',width:'150px'}}>
          <option value="select">Select a YEAR</option>
         
          <option value ="2019">2019-20</option>
        
      
          
        </select>
    
        <span style={{color: "red"}}>{this.state.errors1["year"]}</span> <br/>
     
           <br/>

           <br/>
          
          {/* <h3>SEM: &nbsp;&nbsp;&nbsp;&nbsp;
          
            <input type="number" name="sem" placeholder="Sem" value = {this.state.number} onChange={(event) => this.handle(event)} required style={{paddingLeft: '30px', width: '150px',borderRadius: '10px'}}/>
            {/* value = {this.state.number} onChange={(event) => this.handle(event)}  */}
            {/* onChange={this.handleChange1.bind(this, "sem")} */}
            {/* <span style={{color: "red"}}>{this.state.errors1["sem"]}</span> <br/> */}
            {/* <br />
            <br />
           </h3> */} 
                     {/* <label><h3 style={{paddingLeft:'70px',paddingRight:'20px'}}>SEM:</h3></label>
        <select id="lang" name="sem" onChange={this.handleChange1.bind(this, "sem")} style={{borderRadius:'10px',paddingRight:'10px',paddingLeft:'10px',width:'150px'}}>
          <option value="select">Select a SEM</option>
         
          <option value ="2">2</option>
        
          <option value ="4">4</option>
       
          <option value ="6">6</option>
          
          <option value ="8">8</option>
          
        </select>
    
        <span style={{color: "red"}}>{this.state.errors1["sem"]}</span> <br/>
     
           <br/>

           <br/> */} 
        {/* <h3>DAY: &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="Day" name = "day" value = {this.state.number} onChange={(event) => this.handle(event)} required style={{paddingLeft: '30px', width: '150px',borderRadius: '10px'}}/>
          {/* <span style={{color: "red"}}>{this.state.errors1["day"]}</span> <br/> */}
            {/* <br />
            <br />
            </h3> */} 
                      <label><h3 style={{paddingLeft:'70px',paddingRight:'20px'}}>DAY:</h3></label>
        <select id="lang" name="day" onChange={this.handleChange1.bind(this, "day")} style={{borderRadius:'10px',paddingRight:'10px',paddingLeft:'10px',width:'150px'}}>
          <option value="select">Select a DAY</option>
         
          <option value ="MONDAY">MONDAY</option>
        
          <option value ="TUESDAY">TUESDAY</option>
       
          <option value ="WEDNESDAY">WEDNESDAY</option>
          
          <option value ="THURSDAY">THURSDAY</option>
          <option value ="FRIDAY">FRIDAY</option>
          
        </select>
    
        <span style={{color: "red"}}>{this.state.errors1["sem"]}</span> <br/>
     
           <br/>

           <br/>
          
          

            
            <button style={{borderRadius: '50px', width: '150px',backgroundColor:' #80ff80'}}>DAYWISE</button>
        
          </form>
          
          <br />
            <br />
        
          </div>
          </div>

    );
}
}
// function Time() {
//   return (
//     <div className="App">
//       <h1 style={{ marginLeft: "35%", marginTop: "8%", marginRight: "30%",color:"Blue" }}>Class Room Timetable</h1>
//      <fieldset>
//      <center>Email:<input type="text" name="emailid" style={{ color: "Black",borderRadius:"20%" }} /></center>
//      </fieldset>
//     </div>
//   );
// }

export default Time;


