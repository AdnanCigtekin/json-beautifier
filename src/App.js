import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      myInput: "here is the input...",
      myOutput: ""
    }
    this.prepareOutput = this.prepareOutput.bind(this);
    this.updateData= this.updateData.bind(this);

    //For changing the background of the page lol
    document.body.style = 'background: #282c34;';
  };

  prepareOutput(){
    let maxIndex = this.state.myInput.length;
    let index = 0;
    let pointer = this.state.myInput[index];
    let newOutput = "";
    let aposthArray = []
    let encounteredAposth = false;
    let LineSkippers = "{},"
    let StringElements = "'\""
    let TabOpeners = "{["
    let TabClosers = "]}"
    let tabAmount = 0;
    while(index < maxIndex){
      pointer = this.state.myInput[index];
      //TO TAB OR NOT TO TAB!
      if(TabOpeners.includes(pointer)){
        tabAmount++;
        console.log("tabAmount" + tabAmount)
      }else if(TabClosers.includes(pointer)){
        tabAmount--;
      }


     
      if(LineSkippers.includes(pointer)){
        //inside a string?
        if(aposthArray.length > 0){
          newOutput += pointer;
        }else if(this.state.myInput[index+1] != "\n"){
          newOutput += pointer;

          newOutput += "\n";

          if(tabAmount > 0){
            for (let tempIndex = 0; tempIndex < tabAmount; tempIndex++) {
              newOutput += "\t";
            }
          }
        }else{
          newOutput += pointer;
        }
      }else{
        //start/end of a string?
        if(StringElements.includes(pointer)){
          if(!encounteredAposth){
            aposthArray.push(pointer)
            encounteredAposth = true;
          }else{
            aposthArray.pop();
            encounteredAposth = false;
          }
        }
        
        newOutput += pointer;
      }




      index++;
    }
    this.setState({myOutput: newOutput})
  }

  updateData(e){

    this.setState({myInput: e.target.value});

  }

render(){
  return (
    <div className="App" >
      <center>
        <table>
          <tbody>
          <tr>
            <td>
              <h3 className="App-header">Input</h3>
              <textarea rows="10" cols="50" value={this.state.myInput} onChange={this.updateData} className = "App-textbox">{this.state.myInput}</textarea>
            </td>
            <td>
              <h3 className="App-header">Output</h3>
  <textarea rows="10" cols="50" value={this.state.myOutput} className = "App-textbox"></textarea>
            </td>
          </tr>
          </tbody>

        </table> 
        <button onClick={this.prepareOutput} className = "App-button">Beautify</button>
      </center>
    </div>
  );
}
  
}

export default App;
