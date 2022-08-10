module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let strArray = [];
  for (i = 0; i < matrix.length; i++) {
    if(i % 2 === 0) {
      for (j = 0; j < matrix[i].length; j++) {
        strArray.push(matrix[i][j]);
      }
    } else {
      for (j = matrix[i].length; j > 0; j--) {
        strArray.push(matrix[i][j - 1]);
      }
    }
  }
  return strArray;
}
