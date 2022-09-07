class Post {
  created
  date
  title
  body
  author
  image

  constructor(title, body, author, image, date) {
    this.created = Date.now()
    this.title = title
    this.body = body
    this.author = author
    this.image = image
    this.date = date
  }
}

module.exports = Post
