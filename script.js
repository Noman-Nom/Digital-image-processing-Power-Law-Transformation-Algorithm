const getMatrixValues = (inputMatrix) => {
  const table = document.getElementById(inputMatrix);
  console.log(table);
  // console.log(table.rows)
  const values = [];

  for (let i = 0; i < table.rows.length; i++) {
    values[i] = [];
    // console.log(values)

    for (let j = 0; j < table.rows[i].cells.length; j++) {
      const input = table.rows[i].cells[j].querySelector("input");
    //   console.log( typeof input.value);
    //   console.log(input.value)   

    values[i][j] = parseFloat(input.value)

}
}
// console.log(typeof values)
// console.log(values)
console.log("input values = " , values);  
return values
};

const calculate = () => {
const inputMatrix =   getMatrixValues("inputMatrix");
        const gamma = parseFloat(document.getElementById('gamaValue').value)
            // console.log("value of gamma", gamma)
            // console.log(typeof gamma)


    console.log("input Matrix" , inputMatrix)

    const resultMatrix = inputMatrix.map((row)=>(
        row.map((value , result)=>{
            
            value = value/255;
            console.log( `c x ${value} ^ ${gamma} = ${value ** gamma} ` )
            console.log( 'gamma = ', gamma)

            result = (value** gamma).toFixed(2)
        


                // value = value ** 0.6

                // console.log("normalized value= ",  value)
                // console.log( "result =  ",  result)

                return result
        })

    ))

    console.log("result matrix = " , resultMatrix)

    displayMatrix("resultMatrix" , resultMatrix)


};

const displayMatrix = (resultMatrix , result)=>{

    const table = document.getElementById(resultMatrix)
    console.log("final dispaly result" , table)

    //  clearing prev content from matrix 

    while(table.rows.length>0){
        table.deleteRow(0)
    }

    for (let i = 0; i < result.length; i++) {
        const row = table.insertRow(i)
        // console.log(row)
        for (let j = 0; j < result[i].length; j++) {
            const cell = row.insertCell(j)
            // console.log(cell)

            cell.appendChild(document.createTextNode(result[i][j]))
            
        }
        console.log(`final row ${i}`, row)
        
    }



}
