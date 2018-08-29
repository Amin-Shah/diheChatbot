import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import data from './API';



class SimpleForm extends Component {
  render() {
    const style = {
      color: 'red',
      width: '700px',
      marginLeft: '140px'
    }
    return (
      <ChatBot 
        style={style}
        steps={data}
      />
    );
  }
}

export default SimpleForm;
