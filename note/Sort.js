
let insertSort = function(arr) {
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
};

let shellSort = function(arr) {
    let shellInsertSort = function(arr, d) {
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
    };

    let d = Number.parseInt(arr.length/2);
    while (d >= 1) {
        shellInsertSort(arr, d);

        d = Number.parseInt(d/2);
    }
};

let selectSort = function(arr) {
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
};

let bubbleSort = function(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
};

let quickSort = function(arr) {
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
};

let mergeSort = function(arr) {
    let n = arr.length;
    let temp = new Array(n);
    sort(arr, 0, n-1);
    
    function sort(arr, start, end) {
        if (start < end) {
            let mid = parseInt((start+end) / 2);
            sort(arr, start, mid);
            sort(arr, mid+1, end);
            merge(arr, start, mid, end);
        }
    }

    function merge(arr, start, mid, end) {
        let i = start, j = mid, m = mid+1, n = end, k = 0;

        while (i <= j && m <= n) {
            if (arr[i] <= arr[m]) {
                temp[k++] = arr[i++]
            } else {
                temp[k++] = arr[m++]
            }
        }

        while (i <= j) {
            temp[k++] = arr[i++]
        }

        while (m <= n) {
            temp[k++] = arr[m++]
        }

        for (let l = 0; l < k; l++) {
            arr[start+l] = temp[l]
        }
    }
}

let a = [3,1,5,7,2,4,9,6,10,8];

// let b = new Array(100000);
// for (let i = 0; i < 100000; i++) {
//     b[i] = Math.random()*100000;
// }
//
// let start = new Date().getTime();
//
// insertSort(b);
// shellSort(b);
//
// let end = new Date().getTime();
// console.log(end-start);

// insertSort(a);
// shellSort(a);
// selectSort(a);
// bubbleSort(a);
// quickSort(a);
mergeSort(a)

console.log(a);