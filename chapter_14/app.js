const pageBanner = document.getElementById('page-banner')
console.log('getElementById', pageBanner)

const lists = document.getElementsByTagName('li')
console.log('getElementsByTagName', lists)
console.log('getElementsByTagName', lists[0])
console.log('getElementsByTagName', lists[1])

const titles = document.getElementsByClassName('title')
console.log('getElementsByClassName', titles)

// titles is not an array
// titles.forEach(element => {
//   console.log(element)
// })
console.log(Array.from(titles))
// titles is not an array
Array.from(titles).forEach(element => {
  console.log('for each element: ', element)
})

const wrapper = document.querySelector('#wrapper')
console.log('querySelector', wrapper)
const bookListChild = document.querySelector('#book-list li:nth-child(2) .name')
console.log('querySelector', bookListChild)

let books = document.querySelector('#book-list li .name')
console.log('querySelector', books)
books = document.querySelectorAll('#book-list li .name')
console.log('querySelectorAll', books)
// While using 'querySelectorAll' no need to convert to array as it returns NodeList, but while using 'getElementsByClassName' we have to convert to array and then use
books.forEach(book => {
  console.log('for each element: ', book)
})

// changing text
books.forEach(book => {
  console.log('changing text : ', book.textContent)
  // modify text
  book.textContent = 'Changed'
  // append
  book.textContent += ' (append) '
})
// HTML elements
const bookList = document.querySelector('#book-list')
console.log('HTML before modifying: ', bookList.innerHTML)
// bookList.innerHTML = '<h2>Books and more books...</h2>'
bookList.innerHTML += '<p>This is how we add HTML...</p>'

// DOM Nodes
const banner = document.querySelector('#page-banner')
console.log('page-banner node type is: ', banner.nodeType)
console.log('page-banner node name is: ', banner.nodeName)
console.log('page-banner has child nodes: ', banner.hasChildNodes())

// clone node
const clonedBanner1 = banner.cloneNode(true)
console.log('clonedBanner1 when true: ', clonedBanner1)
const clonedBanner2 = banner.cloneNode(false)
console.log('clonedBanner2 when false: ', clonedBanner2)

// DOM traversal parent to child viseversa
console.log('parent-node', bookList.parentNode)
console.log('parent-node', bookList.parentNode.parentNode)

// DOM traversal parent to child nodes
console.log('child-node', bookList.childNodes) // includes line breaks
console.log('children', bookList.children) // gets only children

// DOM traversal parent to sibling
console.log('nextSibling is : ', bookList.nextSibling)
console.log('nextElementSibling is : ', bookList.nextElementSibling)

console.log('previousSibling is : ', bookList.previousSibling)
console.log('previousElementSibling is : ', bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> too cool!!!!!!!!!'
