require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { errors } = require("celebrate");
const customError = require("./middlewares/customError");
const defaultError = require("./middlewares/defaultError");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  family: 4
});

app.use(requestLogger); // подключаем логгер запросов

app.use(cookieParser()); // подключаем парсер кук

app.use("/", require("./routes/index"));

app.use(errorLogger); // подключаем логгер ошибок

// Если запрос не проходит описанную валидацию Joi,
// celebrate передаст его дальше в обработчик ошибки.
app.use(errors()); // обработчик ошибок celebrate.
// Централизованный обработчик ошибок.
app.use(customError);
app.use(defaultError);

app.listen(PORT);
