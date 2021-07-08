const express = require("express");
const morgan = require("morgan");
const apiRouter = require("./routes")

const app = express();

app.use(express.json());
app.use(morgan("short"));

app.use("/api/v1", apiRouter)


app.use((err, req, res, next) => {
    res.status(err.status || 500).json({name: err.name, msg: err.message});
})

app.listen(3001, () => console.log("server listening..."))