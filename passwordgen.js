function choose(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
  
  function random_sym() {
      const syms = ['a', 'b', 'c']
      return choose(syms)
  }
  
  function random_dig() {
      return Math.ceil(Math.random() * 10)
  }
  
  function genPassword() {
      let result = '';
      for (let i = 0; i < 5; i++) {
          let choice = choose(['digit', 'symbol']) 
          if (choice === 'digit') {
              result += random_dig().toString()
          }
          else {
              result += random_sym()
          }
      }
      return result
  }
  
  module.exports = { genPassword }
  