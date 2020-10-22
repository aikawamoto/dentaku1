import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state={count:0,p:0};
    this.countUp=this.countUp.bind(this);
}

  alertPopup() {
    notification.alert('入力できないよ');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        
        <div>{this.state.p}</div>
        <Button onClick={() => this.countUp(1)}>1</Button>
        <Button onClick={() => this.countUp(2)}>2</Button>
        <Button onClick={() => this.countUp(3)}>3</Button>
        <Button onClick={() => this.countUp(4)}>4</Button>
        <Button onClick={() => this.countUp(5)}>5</Button>
        <Button onClick={() => this.countUp(6)}>6</Button>
        <Button onClick={() => this.countUp(7)}>7</Button>
        <Button onClick={() => this.countUp(8)}>8</Button>
        <Button onClick={() => this.countUp(9)}>9</Button>
        <Button onClick={() => this.s()}>clear</Button>
      </Page>
    );
  }
  countUp(value) { 
      if(this.state.count<8){
    this.setState({count:this.state.count+1,p:this.state.p*10+value}); 
      }
      else{
        this.alertPopup();
      }
  }

  s() { 
    this.setState({count:0,p:0}); 
  }
}