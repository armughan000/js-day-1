function myDisplayer(some) {
    console.log(some);
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x > 0) {
      myResolve("Positive Value");
    } else {
      myReject("Negative Value");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );