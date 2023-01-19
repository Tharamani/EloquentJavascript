// set a default export for a given module
const modFunction1 = () => console.log('Executing modFunction1!')
const modFunction2 = () => console.log('Executing modFunction2!')

export default modFunction1
export { modFunction2 }
