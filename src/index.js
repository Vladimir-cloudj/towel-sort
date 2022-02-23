
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  return matrix.reduce((acc, cur, i) => {
    return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, [])
}
