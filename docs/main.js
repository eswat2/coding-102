/*
Please create a calculator in the language of your choice. This should 
be a visual calculator in the sense that a user should see buttons on 
the screen and see the output on the screen, not just the math part. 
A good visual appearance is important. You can make use of tools or 
controls of your choice, but you can't just point the user to 
something like Desmos or pull in a 'calculator widget'
*/

const actionColors = {
  add: ['btn-success'],
  subtract: ['btn-success'],
  multiply: ['btn-success'],
  clear: ['btn-danger']
}

const actionIcons = {
  add: ['fa', 'fa-plus'],
  subtract: ['fa', 'fa-minus'],
  multiply: ['fa', 'fa-times'],
  clear: ['fa', 'fa-refresh']
}

const app = new Vue({
  el: "#app",
  data: {
    inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    actions: ['add', 'subtract', 'multiply', 'clear'],
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
    colorFor: function(action) {
      return actionColors[action]
    },
    iconFor: function(action) {
      return actionIcons[action]
    },
    perform: function(action) {
      let val = null
      const list = this.working
      const first = list.length > 0 ? list[0] : 0
      const rest = list.slice(1)
      switch (action) {
        case 'clear':
          this.clear()
          break
        case 'add':
          val = rest.reduce((acc, num) => { return acc + num }, first)
          this.updateResults(val)
          break
        case 'subtract':
          val = rest.reduce((acc, num, indx) => { return acc - num }, first)
          this.updateResults(val)
          break
        case 'multiply':
          val = rest.reduce((acc, num, indx) => { return acc * num }, first)
          this.updateResults(val)
          break
        default:
          break
      }
    }
  }
})
