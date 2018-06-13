/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let m = t.length, n = s.length;
    let dp = new Array(m+1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n+1);
    }

    for (let i = 1; i < m+1; i++) {
        dp[i][0] = 0;
    }

    for (let j = 0; j < n+1; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m+1; i++) {
        for (let j = 1; j < n+1; j++) {
            if (j < i) {
                dp[i][j] = 0;
            } else {
                if (t[i-1] == s[j-1]) {
                    dp[i][j] = dp[i-1][j-1] + dp[i][j-1]
                } else {
                    dp[i][j] = dp[i][j-1]
                }
            }
        }
    }

    return dp[m][n]
};

console.log(numDistinct("babgbag", "bag"));