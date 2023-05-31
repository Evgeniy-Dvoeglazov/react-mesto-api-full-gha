const jwt = require("jsonwebtoken");

const YOUR_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc3MjUwNzFjZDkxZGU0Zjc1ZDAyOTAiLCJpYXQiOjE2ODU1MzU3NTQsImV4cCI6MTY4NjE0MDU1NH0.lBsr9-7YkHezC7nwxPgPJjcV0tfnodFfE6VDBXLCzao"; // вставьте сюда JWT, который вернул публичный сервер
const SECRET_KEY_DEV = "dev-secret"; // вставьте сюда секретный ключ для разработки из кода
try {
  const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);

  console.log("\x1b[31m%s\x1b[0m", `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`);
} catch (err) {
  if (err.name === "JsonWebTokenError" && err.message === "invalid signature") {
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Всё в порядке. Секретные ключи отличаются"
    );
  } else {
    console.log(
      "\x1b[33m%s\x1b[0m",
      "Что-то не так"
    );
  }
}
