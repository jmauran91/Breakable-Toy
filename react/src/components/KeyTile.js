import React from 'react';
import Sound from 'react-sound';


class KeyTile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <p>{this.props.note}{this.props.octave}</p>

    )
  }
}

export default KeyTile;
