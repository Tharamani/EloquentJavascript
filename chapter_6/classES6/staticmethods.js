/** @format */

class Article {
  constructor (title, date) {
    this.title = title
		this.date = date
	}

  static createTodays () {
    return new this("Today's digest", new Date())
	}
}

const article = Article.createTodays();
console.log(article)
console.log(article.title) // Today's digest
