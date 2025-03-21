
// Custom useState implementation using closures

function createUseState() {
    let state; 
    
    return function(initialValue) {
      if (state === undefined) {
        state = initialValue; 
      }
      
      function setState(newValue) {
        if (typeof newValue === 'function') {
          state = newValue(state); // Handle functional updates
        } else {
          state = newValue;
        }
        console.log('State updated:', state);
      }
      
      return [() => state, setState];
    };
  }
  debugger
  const useState = createUseState();
  const [count, setCount] = useState(0);
  // console.log([count,setCount]); // 0


  console.log(count()); 
  setCount(5);
  console.log(count()); 
  setCount(prev => prev + 1);
  console.log(count());
  