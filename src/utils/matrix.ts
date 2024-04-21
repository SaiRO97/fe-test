const createMatrix = (c: number, r: number) => {
  const matrix: number[][] = [];
  let integer = 1;

  for (let i = 0; i < c; i++) {
    const column = [];
    for (let j = 0; j < r; j++) {
      column.push(integer);
      integer++;
    }
    matrix.push(column);
  }

  return matrix;
};

export const runSpiralOnMatrix = (c: number, r: number) => {
  let result = [];
  let matrix: number[][] = createMatrix(c, r);

  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let left = 0;
  let top = 0;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
