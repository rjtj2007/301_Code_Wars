function isNice(arr){
  return arr.every((current, index, arr) => {
    return (arr.includes(current + 1) || arr.includes(current - 1));
  })
}