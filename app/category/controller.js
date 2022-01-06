module.exports = {
  index: async (req, res) => {
    try {
      res.render('index', {
        title: 'belajar express',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
