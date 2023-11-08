

const diagonaDifference = (arr) => {
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {

    primarySum += arr[i][i] // this sum of the elements on the primary diagonal
    secondarySum += arr[i][(arr.length - 1) - i] // this sum of the elements on the primary diagonal
  }

  return Math.abs(primarySum - secondarySum) // This calculate the absolute of primarySum and secondarySum.

};

const array = [[11,2,4],
              [4,5,6],
              [10,8,-12]]

console.log(diagonaDifference(array));