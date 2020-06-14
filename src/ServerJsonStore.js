const fs = require('fs') 
  
async function saveJson(){
    let data = "Learning how to write in a file."
  
    // Write data in 'Output.txt' . 
    fs.writeFile('Output.txt', data, (err) => { 
        
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
}
// Data which will write in a file. 

async function getItensJson(){
    fetch('./jsonData/Itens.json')
    .then(response => response)
    .then(data => {
    //do whatever with your data
    console.log(data)
          return  data;             
    })
}

export default {getItensJson,saveJson}