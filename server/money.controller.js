module.exports.addRequest = async (req, res) => {
    const money = req.body;

    console.log(money);
      res.send({lol:'yes'})

}