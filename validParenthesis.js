function isValid(s) {
  const stack = [];

  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const result = isValid("(]");

console.log(result, "result");
