const express = require ('express')
const mongoose = require ('mongoose')
const routes = require ('./routes/api')
// const streetPostModel = require ('./models/streetPost')

const app = express ()
const PORT = process.env.PORT || 8080;

const MONGO_URI = 'mongodb+srv://eeeee:eeeee@cluster0.pat2t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGO_URI || MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


mongoose.connection.on ('connected', () => {
    console.log ('Connect to DB')
})

if(process.env.NODE_ENV === 'production') {
    app.use (express.static('client/build'))
}

app.use (express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', routes)

app.listen (PORT, console.log (`server start on port ${PORT}`))