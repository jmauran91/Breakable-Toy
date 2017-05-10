import React from 'react';
import Sound from 'react-sound';


class KeyTile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="key" onClick={this.props.handleClick} value={this.props.id}>
        {this.props.note}{this.props.octave}
      </div>

    )
  }
}

export default KeyTile;
