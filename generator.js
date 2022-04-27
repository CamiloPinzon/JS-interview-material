const generatorFunction = function*() {
    yield 'Andres';
    yield 'Camilo';
    yield 'Pinzon';
    yield 'Laverde';
}

const generator = generatorFunction();
const fullName = [...generator];

//console.log(fullName);

// Generator function that will be delegated to
function* delegate() {
    yield 3
    yield 4
  }
  
  // Outer generator function
  function* begin() {
    yield 1
    yield 2
    yield* delegate()
  }

  // Iterate through the outer generator
const generatorDelegate = begin()

for (const value of generatorDelegate) {
  console.log(value);
}

//INFINITO
// Define a generator function that increments by one
function* incrementer() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  // Initiate the generator
  const counter = incrementer();

  console.log(
      counter.next(),
      counter.next(),
      counter.next(),
      counter.next(),
      counter.next(),
      counter.next(),
      counter.next()
  );