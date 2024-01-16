function sumAll(start, end) {
   if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0) {
     return 'ERROR';
   }
 
   if (start > end) {
     [start, end] = [end, start];
   }
 
   let sum = 0;
   for (let i = start; i <= end; i++) {
     sum += i;
   }
 
   return sum;
 }
 
 module.exports = sumAll;
 