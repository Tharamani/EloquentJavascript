
// const btns = document.querySelectorAll('#book-list .delete')
// console.log(btns.length)
// btns.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     console.log(e)
//     console.log(e.target) // button
//     // parentElement of button => li
//     const li = e.target.parentElement
//     // parentNode of li => ul
//     li.parentNode.removeChild(li)
//   })
// })

// prevent default behaviour of browser
const link = document.querySelector('#page-banner a')
link.addEventListener('click', (e) => {
  e.preventDefault() // prevents navigating to page
  console.log('Navigate to', e.target.textContent, 'was prevented')
})

// Event bubbling => attach listener to parent element(ul), when event occurs(button) it bubbles up to parent(ul) and find out the target and delete element(li)
const list = document.querySelector('#book-list ul')
list.addEventListener('click', (e) => {
//   if (e.target.className === 'delete') {
  const li = e.target.parentElement
  list.removeChild(li)
//   }
})

// Add books
const addForm = document.forms['add-book']
addForm.addEventListener('submit', (e) => {
  e.preventDefault() // prevent page refresh on submit
  const value = addForm.querySelector('input[type="text"]').value
  console.log('Add book', value)

  // create elements => li span and button
  const li = document.createElement('li')
  const bookName = document.createElement('span')
  const deleteBtn = document.createElement('button')

  // add content
  deleteBtn.textContent = 'Delete'
  bookName.textContent = value

  // adding styles
  bookName.style.color = 'red'
  deleteBtn.style.marginLeft = '10px'

  // add classes
  console.log(bookName.classList)
  bookName.classList.add('name')
  deleteBtn.classList.add('delete')

  // append span and button to li
  li.appendChild(bookName)
  li.appendChild(deleteBtn)

  // append li to ul
  list.appendChild(li)
})
