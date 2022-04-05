


export async function findAll (req, res, next) {
    req.myModel.find({}, await function(err, doc){
        if (err) {
            return res.status(400).json(err);
        } else {
            res.status(200).json(doc)
        }
    });
}

export async function findOne (req, res, next) {
    req.myModel.findById(req.params.id, await function(err, docs){
        if (err) {
            return res.status(400).json(err);
        } else {
            res.status(200).json(docs)
        }
    });
}


async function createOne(req, res, next) {
    const errors = await req.myModel.checkData(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const userExists = await req.myModel.exists({ cabinCode: req.body.cabinCode });
    if (userExists){
        return res.status(400).json({ Message: "User Exists in DataBase" });
    }

    const item = await req.myModel.createItem(req);
    await item.save(function (err, doc) {
            if (err) {
                return res.status(400).json(err);
            }else{
                res.status(201).json(doc);
            }
        });
}

// Handle cabin delete on POST.
async function deleteOne(req, res, next) {
    await req.myModel.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            return res.status(400).json(err);
        }
        res.send("Deleted Item: " + req.params.id);
    });
}

async function updateOne(req, res, next){
    console.log(req.body);

    await req.myModel.updateOne({ _id: req.params.id }, req.body, function(err) {
        if (err) {
            return res.status(400).json({Message: "Failed Updated"});
        }
        res.status(200).send("Updated");
    })
}


export default {findAll, findOne, createOne,deleteOne,updateOne}