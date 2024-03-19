let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  let bookIns = BookInstance.find({status: 'Available'})
      .exec()
  let availableBooks = bookIns.map(ins => ({
    title: ins.book,
    status: ins.status
  }))
  res.send(availableBooks)
}