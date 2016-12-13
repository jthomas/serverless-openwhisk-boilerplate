function delay(args) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ done: true });
     }, 2000);
  })
};

exports.handler = delay;
