/**
 * Created by caleb on 31/08/2017.
 */
const scribble = require('scribbletune');

let clip = scribble.clip({
    notes: ['c4']

});

scribble.midi(clip);
