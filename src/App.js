import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

let buttons=[
  '1','2','3','Add(+)','4','5','6','Subtract(-)',
  '7','8','9','Multiply(*)','Clear','0','=','Divide(/)'
]

    this.state = {
      buttons,
      toggle:false,
      values:[],
      output:0,
      operands:''
    };

this.toggletheme=this.toggletheme.bind(this)

this.handleChange=this.handleChange.bind(this)

this.evaluate=this.evaluate.bind(this)

  }

  toggletheme(){
    let {toggle}=this.state;
    this.setState({toggle:!toggle})
  }


  evaluate(o){
    let {operands}=this.state
this.setState({operands:eval(operands)})

  }

handleChange(e){
switch(e.target.name){
  case 'Add(+)':this.setState({output:'+',operands:this.state.operands+' + '})
  break;
  case 'Subtract(-)':this.setState({output:'-',operands:this.state.operands+' - '})
  break;
  case 'Multiply(*)':this.setState({output:'*',operands:this.state.operands+' * '})
  break;
  case 'Divide(/)':this.setState({output:'/',operands:this.state.operands+' / '})
  break;
  case 'Clear':this.setState({output:'0',operands:''})
  break;
  case '=':this.evaluate(e.target.name)
  break;
  default:
  let {operands,output}= this.state
    this.setState({output: output + e.target.name,operands:this.state.operands+e.target.name})
}
}


  render() {
   let theme =this.state.toggle
   let {buttons,output}=this.state
    return (
           <div
             className="container-fluid"
             style={{
              background:
             `
               ${theme?
      'black'
     :'white'
    }
               `
             }}
             >



     <button
       className={

         ` toggle
         ${theme ? 'dark':'light' }`

       }
       key={theme}
       onClick={()=>this.toggletheme()}
       >
{
  !theme?
  'Dark Theme':
  'Light Theme'
}
     </button>


     <input
       type="text"
       style={{
         width:'60%',
         textAlign:'end',
         background:'white'
       }}
       className="form-control form-control-gray"
       name=""
        placeholder='0'
        disabled
       value={this.state.operands}
         />


       <div className="row" style={{width:'60%'}}>

         {
         buttons.map((value,i)=>(
           <button id={i}
             key={i}
             name={value}

          className=
          {
            ` col-sm-3
            ${theme ? 'dark':'light' }`
          }
          onClick={this.handleChange}

          >
             {value}
           </button>
         )
       )
         }

         </div>
      </div>
    );
  }
}

export default App;
