let Author = require('../models/author');

get_author_list = async () => {
  let authorList = await Author.find({});
  return authorList.map(author => {
    return {
      name: author.name,
      lifespan: author.lifespan
    }
  })
};

exports.show_all_authors = function(res) {
  get_author_list()
    .then((data) => res.send(data))
    .catch((_) => res.send('No authors found'));
}
