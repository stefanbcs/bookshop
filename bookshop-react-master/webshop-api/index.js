let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cors = require("cors");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
const port = 3001;

let usersRouter = require("./routes/users");
let booksRouter = require("./routes/books");
let ordersRouter = require("./routes/orders");
let authRouter = require("./routes/auth");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/users", usersRouter);
app.use("/books", booksRouter.router);
app.use("/orders", ordersRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    //res.render('error');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
