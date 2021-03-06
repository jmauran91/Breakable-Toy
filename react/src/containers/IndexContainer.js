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
      <div className="index_container">
      <h1 className="index_header"> Welcome to the Breakable Piano! </h1>
      <br />
      <br />
      <br />
      <div className="PianoContainer large-12">
      <PianoContainer />
      </div>
      <div className="warning_holder">
      <br />
      <br />
      <br />
      <br />
      <div className="mobile_header">
      <h1> For more, go to: breakable-piano.herokuapp.com </h1>
      </div>
      <div className="instructions_holder">
      <h3> To record a tune, sign up or sign in.  </h3>
      <h3> Use your mouse or keyboard to play. </h3>
      <h3> Using the computer keyboard, hold ctrl to go down an octave.  </h3>
      <h3> Warning: works best on Google Chrome </h3>
      </div>
      </div>
      </div>
    )
  }
}

export default IndexContainer;
