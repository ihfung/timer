const input = process.argv.slice(2); // get the input from the command line

const timer = function(input) {
  for (let time of input) { // loop through the input
    if (time >= 0) { // check if the input is a positive number
      setTimeout(() => {
        process.stdout.write('\x07'); // beep sound
      }, time * 1000); //delay the beep sound by the input time
    }
  }
};


timer(input);