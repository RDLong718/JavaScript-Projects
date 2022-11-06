 function range(start, end) {
     array = [];

     while (start <= end) {
         array.push(start);
         start++;
     }
     return array;

 }

 function sum(array) {
     var total = 0;


     for (let i = 0; i < array.length; i++) {
         total = total + array[i];
     }
     return total;
 }

 function rangeMod(start, end, step) {


     var array = [];

     if (step == undefined)
         step = 1;

     numLoops = Math.abs((end - start) / step) + 1;

     for (var i = 0; i < numLoops; i++) {


         array.push(start);


         start += step;
     }


     return array;
 }




 console.log(range(1, 10));
 console.log(sum(range(1, 10)));
 console.log(rangeMod(5, 2, -1));