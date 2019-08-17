const express = require ('express');
const router = express.Router();

const Tweet = require('../models/tweets');

router.get('/', async (req, res) => {
    const tweets = await Tweet.find();
    res.json(tweets);
})

router.get('/:id', async (req, res) => {
    const tweet = await Tweet.findById(req.params.id);
    res.json(tweet);
})

router.get('/:username', async (req, res) => {
    const tweet = await Tweet.findBy(req.params.username);
    res.json(tweet);
})

router.post('/', async (req,res) => {
    const {message, username} = req.body;
    const date = Date.now();
    const tweet = new Tweet ({message, username, date});
    await tweet.save();     
    res.json({status: 'Tweet saved'});
})

router.put('/:id', async (req,res) => {
    const { message } = req.body;
    const newTweet = { message }
    await Tweet.findByIdAndUpdate(req.params.id, newTweet)
    res.json({status: 'Tweet updated'});
})

router.delete('/:id', async (req,res) => {
    await Tweet.findByIdAndRemove(req.params.id)
    res.json({status: 'Tweet deleted'});
})
 
module.exports = router;

