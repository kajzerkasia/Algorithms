const arr = [5, 2, 3, 4, 1];

let counter = 0;

for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        counter++;
        if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

console.log(arr);
// console.log(arr.length, counter);
