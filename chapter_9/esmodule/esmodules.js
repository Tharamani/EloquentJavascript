// don't have to destructure default export, when we import it
import modFunction1, { modFunction2 } from './defaultexport.js'

//  import all exports together and put them together in an object
// import * as mod1 from './esmod1.js'

// ESmodules is import renaming
// import { modFunction1 as funct1, modFunction2 as funct2 } from './esmod1.js'

// import { modFunction1 , modFunction2  } from './esmod1.js'
// import { modFunction1 } from './esmod1.js'

const testFunction = () => {
  console.log('Im the esmodules function')
  modFunction1()
  modFunction2()

  // mod1.modFunction1()
  // mod1.modFunction2()

  // funct1()
  // funct2()

  // modFunction1()
  // modFunction2()
}

testFunction()
