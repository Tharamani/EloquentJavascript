// module.exports is the keyword we use to declare all we want to export from that file
const modFunction1 = () => console.log('Executing modFunction1!')
// module.exports = modFunction1 // export single function

// If we wanted to export more than one thing from a single module
const modFunction2 = () => console.log('Executing modFunction2!')

module.exports = { modFunction1, modFunction2 }
