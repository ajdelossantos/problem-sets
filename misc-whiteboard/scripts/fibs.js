// Helper function
// Memoization brings down asymptotic behavior
function calculateNextFibonacci(n, cache = {}) {
  if (cache[n]) return cache[n];
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return cache[n] = calculateNextFibonacci(n - 1, cache) + calculateNextFibonacci(n - 2, cache);
}

// Main logic formats the result into the desired output 
function fibonacci(n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    result.push(calculateNextFibonacci(i))
  }

  return result.join(' ')
}

console.log(fibonacci(9));
