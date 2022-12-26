/** @format */

// static methods are bound to a class, not the instances of that class.
// static methods are useful for defining helper or utility methods.
// define static methods using the static keyword.
class Article {
	constructor(title, date) {
		this.title = title;
		this.date = date;
	}

	static createTodays() {
		return new this("Today's digest", new Date());
	}
}

let article = Article.createTodays();
console.log(article);
console.log(article.title); // Today's digest
