const express = require ('express')
const router = express.Router()
const streetPostModel = require ('../models/streetPost')

router.get ('/', (req, res) => {
    
    streetPostModel.find ({}, [])
        .then ((data) => {
            // console.log ('Data: ', data)
            res.json(data)
        })
        .catch ((err) => {console.log ('error', err)})
    
})

router.post ('/post', (req, res) => {
    console.log('url page', req.body)
    const postId = req.body
    streetPostModel.findOne(postId, function(err,obj) { res.send (obj); });  

})

router.post ('/save', (req, res) => {
    console.log('Body', req.body)
    const data = req.body

    const newBlogPost = new streetPostModel (data)

    newBlogPost.save ((err) => {
        if (err) {
            res.status(500).json ({msg: 'Sorry does not work'})
        } else {
            res.json ({
                msg: 'We receirved your data'
            })
        }
    })

  
})


module.exports = router