// let userInput: unknown;
// let userName: string;
//
// userInput = 5;
// userInput = 'Chaz';
// if (typeof userInput === 'string') {
//   userName = userInput;
// }
//
// function generateError(message: string, code: number): never {
//   throw {message: message, errorCode: code};
//   // while (true) {}
// }
//
// generateError('An error occured!', 400);

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
  // let ball = 'unused';
  console.log('Clicked!');
});

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}
