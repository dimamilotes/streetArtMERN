const mongoose = require ('mongoose')

const streetPostSchema = mongoose.Schema ({
    title: String,
    description: String,
    body: String,
    category: String,
    urlImg: String,
    
})

module.exports = mongoose.model ('streetPosts', streetPostSchema)