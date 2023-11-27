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

    console.log("input Matrix" , inputMatrix)

    const resultMatrix = inputMatrix.map((row)=>(
        row.map((value)=>{
            console.log( `c x ${value} ^ 0.6 = ${value ** 0.6} ` )
                value = value ** 0.6

                return value
        })

    ))


};
