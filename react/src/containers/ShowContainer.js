import React from 'react';
import PianoContainer from './PianoContainer';
import PianoRecorder from '../components/PianoRecorder';

class ShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="show_container">
      <h1 id="show_header"> Play    /|\    Record    /|\    Download </h1>
      <br />
      <br />
      <br />
      <div className="PianoContainer large-12">
      <PianoContainer />
      </div>
      <div className="PianoRecorder">
      <PianoRecorder />
      </div>
      </div>

    )
  }
}

export default ShowContainer;
