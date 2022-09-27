let timerId = null,
  count = null;

const clear = () => {
  clearInterval(timerId);
  timerId = null;
  // console.log('timer stoped');
}

onmessage = (event) => {
  // console.log(event.data);  
  
  if (event.data.started === true) {
    count = event.data.count;
    // console.log(event.data.started, event.data.count);
    timerId = setInterval(counting, 1000);
  } 

  if(event.data === 'stop') {
    clear();
  }
};

function counting() {
  if (count > 0) {
    count--;
    postMessage(count);
    // console.log(count);
  }

  if (count < 1) {
    postMessage("stop");
    clear();
  }
}