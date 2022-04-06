import fs from 'fs'
import PrivateData from "../../models/privateData.js";
import Cabin from "../../models/cabin.js";
import * as mongoose from "mongoose";



function addList(privateDatas){
    privateDatas.map((privateData, index)=> {
        Cabin.findOne({cabinCode: privateData.cabinCode}, function(err,doc){
            if(err){
                console.log("Find Error")
            }else{
                const newPrivateData = new PrivateData({
                    cabin: doc,
                    cabinCode: privateData.cabinCode,
                    website: privateData.website,
                    url: privateData.url,
                    address: privateData.address
                })

                insert(newPrivateData)
            }
        })
    })
}

function insert(newPrivateData){
    newPrivateData.save(function (err,doc) {
        if (err) { console.log("Failed to Save") }
        else{
            console.log("Data Added")
        }
    });
}

function load(){
    const data = fs.readFileSync('privateData.json', 'utf-8');
    const doc = JSON.parse(data)
    addList(doc)
}

load();