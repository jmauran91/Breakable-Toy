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
      <div>
      This is the ShowContainer Page
      <br />
      <br />
      <br />
      <br />
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
