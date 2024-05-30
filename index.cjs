const express = require("express")

const port = process.env.PORT || 5000
const app = express()
app.use("/", express.static("dist/freshnew-angular/browser"))

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})