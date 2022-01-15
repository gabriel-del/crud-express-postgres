const express = require("express");
const router = express.Router();
const Mail = require('./controllers');
router.get('/', async (req,res) => {
    let mails = await new Mail().getMails();
    return res.render('home',{mails});
});


router.post('/mail', async (req,res) => {
    let {title} = req.body;
    await new Mail().createMail({title},res);
    return res.redirect('/')
});

router.put('/mails/:mailId', async (req,res) => {
    let {mailId} = req.params;
    await new Mail().updateMail(mailId,res);
    let mails = await new Mail().getMails();
    return res.render('home',{mails});
});

router.delete('/mails/:mailId', async (req,res) => {
    let {mailId} = req.params;
    await new Mail().deleteMail(mailId);
    let mails = await new Mail().getMails();
    return res.render('home',{mails});
});

module.exports = router;
