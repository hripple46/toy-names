const bubbleSort = function(numbers) {

    let length = numbers.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if(numbers[j] < numbers[j +1]) {
                let tmp = numbers[j];
                numbers[j] = numbers[j +1];
                numbers[j+1] = tmp;
            }
        }
    }
    return numbers
}
