import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        require:true,
        maxLength : 60,
    },
    desc : {
        type : String,
        require:true,
        maxLength : 200,
    },
    img : {
        type : String,
        require:true,
    },
    prices : {
        type : [number],
        require:true,
    }
})