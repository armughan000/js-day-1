async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    if (0) {
      resolve("Armughan !!");
    } else {
      reject("Hello World !!");
    }
  });
  try {
    console.log(await myPromise);
  } catch (error) {
    console.error(error);
  }
}

myDisplay();