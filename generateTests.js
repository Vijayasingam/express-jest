const TEST_FILTER = {
    instance: 'DEV',
    type: 'Product'
}
const args = process.argv.slice(2)
const parsedArgs = parseCmdArgs(args);
const inValidArgs = validateArgs(TEST_FILTER, parsedArgs)

function parseCmdArgs(args) {
  const params = {};
  args.forEach((arg, index)=> {
    let tempArg;
    if(arg.includes('=')) {
      tempArg = arg.split('=');
      params[tempArg[0]] = tempArg[1];
    } else if (arg.includes('--')) {
      tempArg = arg.split('--');
      params[tempArg[1]] = args[index+1];
    }
  });
  return params;
}
function validateArgs (TEST_FILTER, args) {
  const arguments = Object.keys(args);
  const error=[];
  arguments.forEach(arg => {
    if (!TEST_FILTER.hasOwnProperty(arg) || !args[arg]) {
      error.push(arg);
    }
  });
  return error;
}
console.log (TEST_FILTER, args, parsedArgs, inValidArgs);