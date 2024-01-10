const removeFromArray = function(arr, ...num) {
   return arr.filter(i=>!num.includes(i));

};

// Do not edit below this line
module.exports = removeFromArray;
