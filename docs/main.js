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
  clear: ['btn-danger']
}

const actionIcons = {
  add: ['fa', 'fa-plus'],
  subtract: ['fa', 'fa-minus'],
  clear: ['fa', 'fa-refresh']
}

const app = new Vue({
  el: "#app",
  data: {
    inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    actions: ['add', 'subtract', 'clear'],
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
      switch (action) {
        case 'clear':
          this.clear()
          break
        case 'add':
          val = this.working.reduce((acc, num) => { return acc + num }, 0)
          this.updateResults(val)
          break
        case 'subtract':
          val = this.working.reduce((acc, num, indx) => { return indx === 0 ? num : acc - num }, 0)
          this.updateResults(val)
          break
        default:
          break
      }
    }
  }
})
