enum operation{
    addition = '+',
    soustraction = '-',
    division = '/',
    multiplication = '*',
    modulo = '%',
}

type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: undefined | number): Error | number {
  if (err) {
    console.log(err.message);
    return err;
  }
  console.log('Result:', result);
  return result;
}

function superComputer(number1:number, sign:operation, number2:number, cb:Callback) {
  if (sign === operation.addition) {
    return cb(null, number1 + number2);
  }
  if (sign === operation.multiplication) {
    return cb(null, number1 * number2);
  }
  if (sign === operation.soustraction) {
    return cb(null, number1 - number2);
  }
  if (sign === operation.division) {
    if (number2 === 0) {
      return (cb(new Error('divided by 0')));
    }
    return (cb(null, number1 / number2));
  }
  if (sign === operation.modulo) {
    return (cb(null, number1 % number2));
  }
  return cb(new Error('bad operator'));
}

superComputer(1, operation.addition, 1, callback);
superComputer(1, operation.soustraction, 2, callback);
superComputer(2, operation.multiplication, 2, callback);
superComputer(4, operation.division, 4, callback);
superComputer(4, operation.modulo, 4, callback);
superComputer(4, operation.division, 0, callback);
