require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const { databaseConnect } = require('./models/dbConnect');
const router = require('./routes/user.routes');

const app = express();
app.use(cors())
app.use(morgan("dev"))

// for parsing json input 
app.use(bodyParser.json());
//for parsing 
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/v1/users", router);
// app.post("/find", async (req, res) => {
//     try {
//         const data = await collection.find(req.body.filter).toArray();
//         res.json({
//             data
//         })
//     } catch (error) {
//         console.log("err: ", error)
//     }
// })

// app.post("/insert", async (req, res) => {
//     try {
//         const data = req.body.data;
//         await collection.insertMany(data).then(data => {
//             res.json({
//                 data: data.insertedCount
//             })
//         }).catch(err => {
//             console.log("err: ", err)
//         })
//     } catch (error) {
//         console.log("err: ", error)
//     }
// })
// app.put("/update", async (req, res) => {
//     try {
//         const filter = req.body.filter
//         const dataToUpdate = req.body.data;
//         await collection.updateOne(filter, { $set: dataToUpdate }).then(data => {
//             res.json({
//                 data: data.modifiedCount
//             })
//         }).catch(err => {
//             console.log("err: ", err)
//         })
//     } catch (error) {
//         console.log("err: ", error)
//     }
// })
// app.post("/delete", async (req, res) => {
//     try {
//         const filter = req.body.filter;
//         await collection.deleteOne(filter).then(data => {
//             res.json({
//                 data: data.deletedCount
//             })
//         }).catch(err => {
//             console.log("err: ", err)
//         })
//     } catch (error) {
//         console.log("err: ", error)
//     }
// })


//Setting up backend port
const port = process.env.PORT || 5000;
app.listen(port, async () => {
    await databaseConnect(process.env.DATABASE, process.env.COLLECTION).then(data => {
        global.collection = data.collection
        global.client = data.client
        console.log("Server is up and running on ", port)
    }).catch(err => {
        console.log("err: ", err)
    })
})