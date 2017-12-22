# Sort

## Insertion Sort —— Straight Insertion Sort

```
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            let j = i;
            let temp = arr[j];

            do {
                arr[j] = arr[j-1];
                j--;
            } while (temp < arr[j-1]);
            arr[j] = temp;
        }
    }
}
```
稳定，时间复杂度O(n^2)

## Insertion Sort —— Shell's Sort

```

```