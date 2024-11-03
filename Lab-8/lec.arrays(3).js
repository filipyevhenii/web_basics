function arrayDifference(arr1, arr2) {
    const count1 = {};
    const count2 = {};

    arr1.forEach(num => count1[num] = (count1[num] || 0) + 1);
    arr2.forEach(num => count2[num] = (count2[num] || 0) + 1);

    const result = [];

    for (let num in count1) {
        let diff = count1[num] - (count2[num] || 0);
        if (diff > 0) {
            result.push(...Array(diff).fill(Number(num)));
        }
    }

    return result;
}

const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 3, 5];
console.log(arrayDifference(arr1, arr2));
