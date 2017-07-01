const h = require('hub.js')
var bla = true

const items = []

var i = 100
while (i--) {
  items.push({
    title: i
  })
}

const hub = h({
  title: 'haha it from :)',
  fontSize: '20px',
  // fontSize: function * () {
  //   var val = 10
  //   var dir = 1
  //   while (val > -10) {
  //     if (val < 10) {
  //       dir = 1
  //     } else if (val > 120) {
  //       dir = -1
  //     }
  //     yield new Promise((resolve) => setTimeout(() => resolve(val += dir), 18))
  //   }
  // },
  items,
  port: 3030
})
