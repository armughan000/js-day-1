const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json = await response.json();
console.log(json);

async function runProcess() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
  runProcess();