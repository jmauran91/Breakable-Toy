import React from 'react';
import Sound from 'react-sound';
import KeyTile from '../components/KeyTile';
import ion from 'ion-sound';
/* import piano_mp3 from '/app/assets/javascripts/piano_mp3' */


class PianoContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      WHITENOTES: ['C', 'D', 'E', 'F', 'G', 'A', 'B',],
      BLACKNOTES: ['Cs', 'Ds', 'Fs', 'Gs', 'As'],
      NOTES: ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'],
      KEYCODES: [65, 87, 83, 69, 69, 70, 71, 84, 72, 89, 85, 74, 75 ],
      /*          A   W   S   E   D   F   G   T   H   Y   U   J   K  */
      whiteKeys: [],
      blackKeys: [],
      the_sounds: [],
      keypress_sounds: []
    }
    this.handleKeyClick = this.handleKeyClick.bind(this)

  }

  componentDidMount(){
    var piano_sounds_holder = document.getElementsByClassName('set');
    var soundlist = [];
    var key_soundlist = [];
    $([...Array(37)].map((key, i) => {
      var audio = new Audio();
      audio.src = `https://s3.amazonaws.com/ganonbucket91/39${159+i}__jobro__piano-ff-0${12+i}.mp3`
      soundlist.push(audio)
      document.body.appendChild(audio)
    }))
    key_soundlist = soundlist.slice(12,25);
    this.setState({ the_sounds: soundlist })
    this.setState({ keypress_sounds: key_soundlist })
    debugger;
    this.state.keypress_sounds.map((sound, i) => {
      debugger;
      document.body.addEventListener('keydown', function(){
        if (event.keyCode == KEYCODES[i]) {
          if ( sound.paused == false ){
            sound.pause();
            sound.currentTime = 0
            sound.play();
          }
          else {
            sound.play();
          }
        }
      }, false)
    })
  }

  handleKeyClick(event){
      var playsound = this.state.the_sounds[event.target.value]
      if ( playsound.paused == false ){
        playsound.pause();
        playsound.currentTime = 0
        playsound.play();
      }
      else {
        playsound.play();
      }
      debugger;
  }




  render(){

    let black_keys = []
    let black_keyNums = [1,3,6,8,10,13,15,18,20,22,25,27,30,32,34]
    let renderKeys = [...Array(37)].map((key, i) => {
      if (!black_keyNums.includes(i)) {
        var octave;
        let white_keynote = this.state.NOTES[( i % this.state.NOTES.length )]
        if ( i > -1 && i < 12) {
          octave = 1
        }
        else if ( i > 11 && i < 24) {
          octave = 2
        }
        else if ( i > 23 && i < 36 ) {
          octave = 3
        }
        else if ( i > 35) {
          octave = 4
        }
        return(
          <li className="white {white_keynote}" onClick={this.handleKeyClick}
                 value={i}>
          <KeyTile
          key={i}
          id={i}
          octave={octave}
          note={white_keynote}
          handleClick={this.handleKeyClick}
          />
          </li>
        )
      }
      else if (black_keyNums.includes(i)) {
        let black_keynote = this.state.NOTES[( i % this.state.NOTES.length )]
        if ( i > -1 && i < 12) {
          let octave = 1
        }
        else if ( i > 11 && i < 24) {
          let octave = 2
        }
        else if ( i > 23 && i < 37 ) {
          let octave = 3
        }
        return(
          <li className="black {black_keynote}" onClick={this.handleKeyClick}
                 value={i}>
          <KeyTile
          key={(i)}
          id={(i)}
          octave={octave}
          note={black_keynote}
          handleClick={this.handleKeyClick}
          />
          </li>
        )
      }
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
