let timeLeft = 0;
const argv = process.argv;
const time = argv[2];

if (!time) {
  console.log("Please provide and argument, e.g., 5s or 1min");
  // exit(1) exits with "failure" code
  // exit() exists with "success" code
  process.exit(1);
}

if (time.indexOf("s") > -1) {
  //slice(0, -1) means "from start to one from the last"
  timeLeft = parseInt(time.slice(0, -1), 10);
} else if (time.indexOf("min") > -1) {
  //slice(0, -3) means "from start to three from the last"
  timeLeft = parseInt(time.slice(0, -3), 10) * 60;
  debugger;
} else {
  console.log("Please provide a valid argument, e.g., 5s or 1min.");
  process.exit(1);
}

var interval = setInterval(() => {
  timeLeft--;
  console.log(`Left: ${timeLeft}s`);
  if (timeLeft === 0) {
    clearInterval(interval);
    process.exit(0);
  }
}, 1000);

// console.log(argv);
