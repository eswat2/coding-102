/*
Please create a calculator in the language of your choice. This should 
be a visual calculator in the sense that a user should see buttons on 
the screen and see the output on the screen, not just the math part. 
A good visual appearance is important. You can make use of tools or 
controls of your choice, but you can't just point the user to 
something like Desmos or pull in a 'calculator widget'
*/

const app = new Vue({
  el: "#app",
  data: {
    inputs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    actions: ['+', '-', 'AC'],
    working: [],
    result: 0
  },
  methods: {
    clear: function() {
      this.working = []
      this.result = 0
    },
    enterKey: function(key) {
      this.working.push(key)
    },
    updateResults: function(val) {
      this.working = []
      this.working.push(val)
      this.result = val
    },
    perform: function(action) {
      let val = null
      switch (action) {
        case 'AC':
          this.clear()
          break
        case '+':
          val = this.working.reduce((acc, num) => { return acc + num }, 0)
          this.updateResults(val)
          break
        case '-':
          val = this.working.reduce((acc, num) => { return acc ? acc - num : num }, 0)
          this.updateResults(val)
          break
        default:
          break
      }
    }
  }
})
