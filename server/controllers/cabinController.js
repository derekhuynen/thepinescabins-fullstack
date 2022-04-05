
import Cabin from "../models/cabin.js";






    // Handle cabin update on POST.
    function updateOne(req, res,next) {

        const temp = validation(req);

        if (!temp.errors.isEmpty()) {
            res.send(temp.errors.array());
        }else{

            var upsertData = temp.cabin.toObject();
            delete upsertData._id;

            Cabin.findByIdAndUpdate({_id: req.params.id}, upsertData, {new: true}, function (err,doc) {
                if (err) { return next(err); }
                res.send(doc);
            });
        }
    }




export default {updateOne}


