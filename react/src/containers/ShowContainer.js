import React from 'react';
import PianoContainer from './PianoContainer';

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
      <PianoContainer />
      </div>

    )
  }
}

export default ShowContainer;
