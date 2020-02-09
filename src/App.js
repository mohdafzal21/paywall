import React, { Component, Fragment,useState} from 'react';
import logo from './logo-gif.gif';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import styled from 'styled-components'
import Main from './Main'
import PaymentModal from './PaymentModal'
import MyApp from './Checkout'
// function App(){
//   const [step,setStep] = React.useState(0)
  
//   switch(step){
//     case 1 : 
//     return <Main setStep={setStep}/>
//     case 2 : 
//     return ( <center >
      
//     <header className="App-header">
//       <img src={logo}  alt="logo" />
//       <h1 >Pay Wall</h1>
//     </header>
//     <Toggle>
//       {({ on, toggle }) => (
//         <Fragment>
//           <button onClick={toggle}>Pay Me</button>
//           <Modal on={on} toggle={toggle}>
//             <Main/>
           
//           </Modal>
//         </Fragment>
//       )}
//     </Toggle>
//   </center>)
//   }
// }


class App extends Component {
  state = {
    step : 2
  }

  setStep = ()=>{
    this.setState({
      step : this.state.step + 1
    })
  }

  render() {
    const {step} = this.state
    switch(step){
      case 1 : 
      return (<Main setStep={this.setStep}/>)
      case 2 : 
      return ( <CenterDiv >
        
      <header>
        <img src={logo} />
      </header>
      
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <Button onClick={toggle}>Pay Me</Button>
            <Modal on={on} toggle={toggle}>
              <MyApp/>
             
            </Modal>
          </Fragment>
        )}
      </Toggle>
    </CenterDiv>
    )
    }
  }
}

export default App;


const CenterDiv = styled.div`
text-align : center;
padding-top : 110px;
background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

`
const Button = styled.button`
  color: blue;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`