const config = { retries: 3, timeout: null };

function shouldRetry(attempt) {
  return (Number(attempt) < Number(config.retries));
}

function getTimeout() {
 if (config.timeout === null) return 5000;
  return config.timeout;
}

console.log(shouldRetry("10"));
console.log(getTimeout());