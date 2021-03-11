var express = require('express');
var router = express.Router();
const {Wallet} = require('../lib/models')



router.get('/', async function(req, res, next) {
  let currentWallet = await Wallet.findOne({})
  console.log(currentWallet);
  res.send(currentWallet);
});

//leftoff at 57:10

// // CREATE
// router.post('/', async function(req, res, next) {
//   console.log(req.body)
//   let wallet = await Wallet.create(req.body);
//   res.json(wallet);
// });

// // UPDATE
// router.put('/:id', async function(req, res, next) {
//   console.log(req.body)
//   console.log(req.params)
//   let wallet = await Wallet.update(req.body, {
//       where: {id: req.params.id}
//   });
//   res.json(wallet);
// });

module.exports = router;


