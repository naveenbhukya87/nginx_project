exports.allUsers = async (_, res) => {
    try {
        const data = await collection.find().toArray();
        res.json({
            data
        })
    } catch (error) {
        console.log("err: ", error)
    }
}

exports.singleUser = async (req, res) => {
    try {
        const data = await collection.find(req.body.filter).toArray();
        res.json({
            data
        })
    } catch (error) {
        console.log("err: ", error)
    }
}

exports.insertUser = async (req, res) => {
    try {
        const data = req.body.data;
        await collection.insertMany(data).then(data => {
            res.json({
                data: data.insertedCount
            })
        }).catch(err => {
            console.log("err: ", err)
        })
    } catch (error) {
        console.log("err: ", error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const filter = req.body.filter
        const dataToUpdate = req.body.data;
        await collection.updateOne(filter, { $set: dataToUpdate }).then(data => {
            res.json({
                data: data.modifiedCount
            })
        }).catch(err => {
            console.log("err: ", err)
        })
    } catch (error) {
        console.log("err: ", error)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const filter = req.body.filter;
        await collection.deleteOne(filter).then(data => {
            res.json({
                data: data.deletedCount
            })
        }).catch(err => {
            console.log("err: ", err)
        })
    } catch (error) {
        console.log("err: ", error)
    }
}