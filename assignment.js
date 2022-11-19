

function getSum(arr1,i) {
    if (i === arr1.length-1 ) {
        return arr1[i];
    }
    return arr1[i] + getSum(arr1, i +1);
}
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
console.log(getSum(arr1,0));


function isPalindrome(str, start, end) {
    if (start === end) {
        return true;
    }
    if (str[start] !== str[end]) {
        return false;
    }
    return isPalindrome(str, start + 1, end - 1);
}

var str = "madam"
console.log(isPalindrome(str, 0, str.length - 1));