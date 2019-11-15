var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/location/:name', (req,res)=>{
  let name = req.params.name;
  console.log(name)
  res.render(`location/${name}`)
})
module.exports = router;
