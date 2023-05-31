const jwt = require("jsonwebtoken");
require("dotenv").config();

const { NODE_ENV, JWT_SECRET } = process.env;

const YOUR_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc3NjAzZmE0YzEzYTZhZGI2NDA4MmUiLCJpYXQiOjE2ODU1NDUwMjcsImV4cCI6MTY4NjE0OTgyN30.m4JsS9xHTfRJaTJwT1cmarTYcBYKnJ9ep7Y08z9xQf8"; // вставьте сюда JWT, который вернул публичный сервер
const SECRET_KEY_DEV = "dev-secret"; // вставьте сюда секретный ключ для разработки из кода
try {
  const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);

  console.log("\x1b[31m%s\x1b[0m", `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`);

  console.log(JWT_SECRET);
  console.log(NODE_ENV);
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
