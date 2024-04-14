import app from "./app.js";

// const PORT = process.env.PORT || 5000;
const PORT = 5001;

app.listen(PORT, function(req, res){
    console.log(`Server running on ${PORT} Port`)
})
