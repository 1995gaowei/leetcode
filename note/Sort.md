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

## Insertion Sort —— Shell's Sort

```
function shellInsertSort(arr, d) {
    for (let i = d; i < arr.length; i++) {
        if (arr[i] < arr[i-d]) {
            let j = i;
            let temp = arr[j];

            do {
                arr[j] = arr[j-d];
                j -= d;
            } while (temp < arr[j-d]);
            arr[j] = temp;
        }
    }
}

function shellSort(arr) {
    let d = Number.parseInt(arr.length/2);
    while (d >= 1) {
        shellInsertSort(arr, d);

        d = Number.parseInt(d/2);
    }
}
```

## Selection Sort —— Simple Selection Sort

```
function selectSort(arr) {
    let key, temp;
    for (let i = 0; i < arr.length; i++) {
        key = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[key]) {
                key = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[key];
        arr[key] = temp;
    }
}
```

## Selection Sort —— Heap Sort

```

```

## Swap Sort —— Bubble Sort

```
function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```

## Swap Sort —— Quick Sort

```
function quickSort(arr) {
    qs(arr, 0, arr.length-1);

    function qs(arr, low, high) {
        if (low < high) {
            let privot = partition(arr, low, high);
            qs(arr, low, privot-1);
            qs(arr, privot+1, high);
        }
    }

    function partition(arr, low, high) {
        let privot = arr[low];
        while (low < high) {
            while (low < high && arr[high] >= privot) high--;
            swap(arr, low, high);
            while (low < high && arr[low] <= privot) low++;
            swap(arr, low, high);
        }
        return low;
    }

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

## Merge Sort

```
void mergearray(int a[], int first, int mid, int last, int temp[])  
{  
    int i = first, j = mid + 1;  
    int m = mid,   n = last;  
    int k = 0;  
      
    while (i <= m && j <= n)  
    {  
        if (a[i] <= a[j])  
            temp[k++] = a[i++];  
        else  
            temp[k++] = a[j++];  
    }  
      
    while (i <= m)  
        temp[k++] = a[i++];  
      
    while (j <= n)  
        temp[k++] = a[j++];  
      
    for (i = 0; i < k; i++)  
        a[first + i] = temp[i];  
}  
void mergesort(int a[], int first, int last, int temp[])  
{  
    if (first < last)  
    {  
        int mid = (first + last) / 2;  
        mergesort(a, first, mid, temp);    //左边有序  
        mergesort(a, mid + 1, last, temp); //右边有序  
        mergearray(a, first, mid, last, temp); //再将二个有序数列合并  
    }  
}  
  
bool MergeSort(int a[], int n)  
{  
    int *p = new int[n];  
    if (p == NULL)  
        return false;  
    mergesort(a, 0, n - 1, p);  
    delete[] p;  
    return true;  
}  
```

## Summary

| 排序方法 | 平均 | 最好 | 最坏 | 空间 | 稳定性 |
| - | - | - | - | - | - |
| 直接插入排序 | O(n^2) | O(n) | O(n^2) | O(1) | 稳定 |
| 希尔排序 | O(n^1.3) | O(n) | O(n^2) | O(1) | 不稳定 |
| 直接选择排序 | O(n^2) | O(n^2) | O(n^2) | O(1) | 不稳定 |
| 堆排序 | O(nlog2n) | O(nlog2n) | O(nlog2n) | O(1) | 不稳定 |
| 冒泡排序 | O(n^2) | O(n) | O(n^2) | O(1) | 稳定 |
| 快速排序 | O(nlog2n) | O(nlog2n) | O(n^2) | O(nlog2n) | 不稳定 |
| 归并排序 | O(nlog2n) | O(nlog2n) | O(nlog2n) | O(n) | 稳定 |