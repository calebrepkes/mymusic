var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    midi: });
});

module.exports = router;

//Require MIDIPlayer and MIDIFile modules
var MIDIPlayer = require('midiplayer');
var MIDIFile = require('midifile');


navigator.requestMIDIAccess().then(function(midiAccess) {
    // Creating player
    var midiPlayer = new MIDIPlayer({
        'output': midiAccess.outputs()[0]
    });

    // creating the MidiFile instance from a buffer (view MIDIFile README)
    var midiFile = new MIDIFile(buffer);

    // Loading the midiFile instance in the player
    midiPlayer.load(midiFile);

    // Playing
    midiPlayer.play(function() {
        console.log('Play ended');
    });

    // Volume
    midiPlayer.volume = 80; // in percent

    // Pausing
    midiPlayer.pause();

    // Resuming
    midiPlayer.resume();

    // Stopping
    midiPlayer.stop();

    // Playing again and loop
    midiPlayer.play(function playCallback() {
        midiPlayer.play(playCallback);
    });

}, function() {
    console.log('No midi output');
});