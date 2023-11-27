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
      console.log(input.value)   

    values[i][j] = parseInt(input.value)

}
}
// console.log(typeof values)
// console.log(values)
console.log("input values = " , values);   // it give me answer NAN wwhat is the probelm here
return values
};

const calculate = () => {
  getMatrixValues("inputMatrix");
};
