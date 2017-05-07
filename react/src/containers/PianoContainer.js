import React from 'react';
import KeyTile from '../components/KeyTile';

class PianoContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      WHITENOTES: ['C', 'D', 'E', 'F', 'G', 'A', 'B',],
      BLACKNOTES: ['Cs', 'Ds', 'Fs', 'Gs', 'As'],
      NOTES: ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'],
      whiteKeys: [],
      blackKeys: []
    }
    this.handleKeyClick = this.handleKeyClick.bind(this)
  }

  handleKeyClick(){

  }



  render(){

    let black_keys = []
    let black_keyNums = [1,3,6,8,10,13,15,18,20,22,25,27,30,32,34]
    let renderKeys = [...Array(37)].map((key, i) => {
      if (!black_keyNums.includes(i)) {
        let white_keynote = this.state.NOTES[( i % this.state.NOTES.length )]
        return(
          <li className="white {white_keynote}">
          <KeyTile
          key={i}
          id={i}
          note={white_keynote}
          handleClick={this.handleKeyClick}
          />
          </li>
        )
      }
      else if (black_keyNums.includes(i)) {
        let black_keynote = this.state.NOTES[( i % this.state.NOTES.length )]
        return(
          <li className="black {black_keynote}">
          <KeyTile
          key={(100 + i)}
          id={(100 + i)}
          note={black_keynote}
          handleClick={this.handleKeyClick}
          />
          </li>
        )
      }
    })


    let renderWhiteKeys = [...Array(22)].map((key, i) => {
        let white_keynote = this.state.WHITENOTES[( i % this.state.WHITENOTES.length )]
        return(
          <li className="white {white_keynote}">
          <KeyTile
          key={i}
          id={i}
          note={white_keynote}
          handleClick={this.handleKeyClick}
          />
          </li>
        )
      })

    let renderBlackKeys = [...Array(15)].map((key, i) => {
        let black_keynote = this.state.BLACKNOTES[( i % this.state.BLACKNOTES.length )]
        return(
          <li className="black {black_keynote}">
          <KeyTile
          key={(100 + i)}
          id={(100 + i)}
          note={black_keynote}
          handleClick={this.handleKeyClick}
          />
          </li>
        )
      })
    return(

      <div>
          <ul className="set">
            {renderKeys}
          </ul>
      </div>

    )
  }
}

export default PianoContainer;
