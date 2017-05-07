import React from 'react';


class KeyTile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="key" onClick={this.props.handleClick}>
        {this.props.note}
      </div>

    )
  }
}

export default KeyTile;
