const fs = require('fs');
const path = require('path');
const pathToOutput = path.join(__dirname, 'text.txt');

const output = fs.createWriteStream(pathToOutput, {encoding: 'utf-8'});

console.log('Hello! Put text in file');


process.stdin.on('data', data => { 
    const dataS = data.toString()
    if(dataS.trim() ==='exit'){  
        output.end();
        process.exit();
    }

    console.log(`You typed ${data}`);    
    output.write(dataS)
  });

  // SIGINT       P1990      Term    Interrupt from keyboard
  //   SIGTERM      P1990      Term    Termination signal
  process.on('SIGINT', () => {
    output.end();
    process.exit();
  });
  process.on('SIGTERM', () => {
    output.end();
    process.exit();
  });



process.on('exit', ()=>{
    console.log('You finished typing. Bye! Bye!')
    output.end();
    process.exit();
})