function myDisplayer(some) {
    console.log(some);
  }
  
  function customPromise(executor) {
    let state = 'pending';
    let value = undefined;
    let onFulfilled = [];
    let onRejected = [];
  
    function resolve(result) {
      if (state !== 'pending') return;
      state = 'fulfilled';
      value = result;
      onFulfilled.forEach(callback => callback(value));
    }
  
    function reject(error) {
      if (state !== 'pending') return;
      state = 'rejected';
      value = error;
      onRejected.forEach(callback => callback(value));
    }
  
    this.then = function(onFulfilledCallback, onRejectedCallback) {
      return new customPromise((resolve, reject) => {
        function handleCallback(callback) {
          setTimeout(() => {
            try {
              if (state === 'fulfilled') {
                if (typeof onFulfilledCallback === 'function') {
                  const result = onFulfilledCallback(value);
                  resolve(result);
                } else {
                  resolve(value);
                }
              } else if (state === 'rejected') {
                if (typeof onRejectedCallback === 'function') {
                  const result = onRejectedCallback(value);
                  resolve(result);
                } else {
                  reject(value);
                }
              }
            } catch (error) {
              reject(error);
            }
          });
        }
  
        if (state === 'pending') {
          onFulfilled.push(() => handleCallback(onFulfilledCallback));
          onRejected.push(() => handleCallback(onRejectedCallback));
        } else {
          handleCallback(state === 'fulfilled' ? onFulfilledCallback : onRejectedCallback);
        }
      });
    };
  
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  let myPromise = new customPromise(function(myResolve, myReject) {
    let x = 0;
    if (x > 0) {
      myResolve("Positive Value");
    } else {
      myReject("Negative Value");
    }
  });
  
  myPromise.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }
  );
  