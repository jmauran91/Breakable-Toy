import React from 'react';
import PianoContainer from './PianoContainer';

class IndexContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
      <div className="large-12 columns index_holder">
      <h1 id="index_header"> This is the IndexContainer Page</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="large-8 columns" id="piano_holder">
      <PianoContainer/>
      </div>
      </div>
      <div className="large-12 columns" id="directions">
      <span> Use your mouse or keyboard to play! </span>
      </div>
      </div>
    )
  }
}

export default IndexContainer;
