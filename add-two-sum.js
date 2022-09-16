// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.



// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


var addTwoNumbers = function(l1, l2) {
   const stack = []

   if(l1.length > l2.length ) {
      for (let i = 0; i < l1.length; i++) {
         const element = l1[i];

         stack.push(l1[i] + (l2[i] = undefined ? 0 : l2[i]))
      }

      return stack
   }else {
      for (let i = 0; i < l1.length; i++) {
         const element = l1[i];

         stack.push(l1[i] + (l2[i] = undefined ? 0 : l2[i]))
      }

      return stack
   }




   return stack
};


console.log(addTwoNumbers([2,4,3],[1,5,6]))