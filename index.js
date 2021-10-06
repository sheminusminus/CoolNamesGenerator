function* getCoolNamesGenerator() {
  yield 'Neo';
  yield 'Trinity';
  yield 'Morpheus';
  yield 'The Oracle';
}

const coolNamesGen = getCoolNamesGenerator();

console.log('calling next() manually:');

console.log(coolNamesGen.next());
console.log(coolNamesGen.next());
console.log(coolNamesGen.next());
console.log(coolNamesGen.next());
console.log(coolNamesGen.next()); // done

// or ...

console.log('\n\nusing for...of:');

const coolNamesGen2 = getCoolNamesGenerator();
for (const name of coolNamesGen2) {
  console.log(name);
}

// or ...

console.log('\n\nspread to an array:');

const coolNamesGen3 = getCoolNamesGenerator();
console.log([...coolNamesGen3].join(', '));

// ... etc
