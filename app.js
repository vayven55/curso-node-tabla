

const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let archivo = '';


rl.question("Número base de la tabla de * ? ", (base) => {
    
    console.log(`\n\n************\nTabla del ${base}\n************`);
  
    for(let i = 1; i <= 10; i++ ){
        if(i < 10){
            i = '0'+i;
            archivo += `${base} * ${i} = ${base * i}\n`;
            
        }else if(i > 9){
            i = i;
            archivo += `${base} * ${i} = ${base * i}\n`;
        }
    }
    
    
    rl.close();
    
    fs.writeFile(`./archivo-salida/Tabla del ${base}.txt`, archivo, err => {
        if(err)  throw err;
        console.log(`Archivo "Tabla del ${base}.txt" creado`);
        console.log(archivo)
    })

});