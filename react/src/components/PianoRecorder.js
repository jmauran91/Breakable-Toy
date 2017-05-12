import React from 'react';
var Recorder = require('./recorder.min.js')
var encoderUrl = assetHelper["encoderWorker"]

class PianoRecorder extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){

    var recorder;
    document.getElementById('init').addEventListener( "click", function(){
      recorder = new Recorder({
        encoderPath: encoderUrl
      });
      recorder.addEventListener( "start", function(e){
        screenLogger('Recorder is started');
        init.disabled = start.disabled = resume.disabled = true;
        pause.disabled = stopButton.disabled = false;
      });
      recorder.addEventListener( "stop", function(e){
        screenLogger('Recorder is stopped');
        init.disabled = false;
        pause.disabled = resume.disabled = stopButton.disabled = start.disabled = true;
      });
      recorder.addEventListener( "pause", function(e){
        screenLogger('Recorder is paused');
        init.disabled = pause.disabled = start.disabled = true;
        resume.disabled = stopButton.disabled = false;
      });
      recorder.addEventListener( "resume", function(e){
        screenLogger('Recorder is resuming');
        init.disabled = start.disabled = resume.disabled = true;
        pause.disabled = stopButton.disabled = false;
      });
      recorder.addEventListener( "streamError", function(e){
        screenLogger('Error encountered: ' + e.error.name );
      });
      recorder.addEventListener( "streamReady", function(e){
        init.disabled = pause.disabled = resume.disabled = stopButton.disabled = true;
        start.disabled = false;
        screenLogger('Audio stream is ready.');
      });
      recorder.addEventListener( "dataAvailable", function(e){
        var dataBlob = new Blob( [e.detail], { type: 'audio/ogg' } );
        var fileName = new Date().toISOString() + ".ogg";
        var url = URL.createObjectURL( dataBlob );
        var audio = document.createElement('audio');
        audio.controls = true;
        audio.src = url;
        var link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.innerHTML = link.download;
        var li = document.createElement('li');
        li.appendChild(link);
        li.appendChild(audio);
        recordingslist.appendChild(li);
      });
      recorder.initStream();
    });
    function screenLogger(text, data) {
      log.innerHTML += "\n" + text + " " + (data || '');
    }

    document.getElementById('start').addEventListener( "click", function(){ recorder.start() });
    document.getElementById('pause').addEventListener( "click", function(){ recorder.pause() });
    document.getElementById('resume').addEventListener( "click", function(){ recorder.resume() });
    document.getElementById('stopButton').addEventListener( "click", function(){ recorder.stop() });
    document.getElementById('dataAvailable').addEventListener("click", function(){ recorder.dataAvailable() });
  }
  // Heroku error push
  // Heroku error push
  //Heroku error push
  //Heroku error push

  render(){


    return(
      <div>
      <div className="command_header">
      <p>Before you enable monitoring, make sure to either plug in headphones or turn the volume down.</p>
      <p>This ogg opus implementation does not support more than 2 channels.</p>
      </div>

      <h2 id="commands">Commands</h2>
      <div id="wrapper">
      <button id="init"><img src='https://cdn2.iconfinder.com/data/icons/outlined-set-1/29/power-512.png' width='75' height='75'/></button>
      <button id="start"><img src= 'https://cdn4.iconfinder.com/data/icons/simplicio/128x128/player_record.png' width='75' height='75'/></button>
      <button id="pause"><img src= 'https://cdn1.iconfinder.com/data/icons/material-audio-video/20/pause-circle-outline-128.png' width='75' height='75'/></button>
      <button id="resume"><img src= 'https://maxcdn.icons8.com/Share/icon/Media_Controls//resume_button1600.png' width='75' height='75'/></button>
      <button id="stopButton"><img src= 'http://freevector.co/wp-content/uploads/2010/07/14740-stop-button1.png' width='75' height='75'/></button>
      <button id="dataAvailable"><img src='https://image.flaticon.com/icons/png/512/0/532.png' width='75' height='75'/> </button>
      </div>


      <h2>Log</h2>
      <pre id="log"></pre>

      <h2>Recordings</h2>
      <ul id="recordingslist"></ul>


      </div>

    )
  }
}

export default PianoRecorder;
