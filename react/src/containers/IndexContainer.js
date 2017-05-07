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
      This is the IndexContainer Page
      <PianoContainer />
      </div>


    )
  }
}

export default IndexContainer;
