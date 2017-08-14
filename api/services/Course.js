var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
        },
        title:{
            type:String
        },
        image:{
            type:String,
            default: ""
        },
        bigImage:{
            type:String,
            default:""
        },
        sequence:{
            type:Number
        },
        categories:[{
                type: Schema.Types.ObjectId,
                ref: 'Category'
                }]
    
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Course', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);