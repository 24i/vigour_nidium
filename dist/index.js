var $215521817 = require('brisky-render')
;var $1546195150 = require('hub.js')
;


const $3230953054_hub = $1546195150({
  url: 'ws://localhost:3030'
})

const $3230953054_app = $215521817.render({
    field: {
      text: { $: 'title' },
      style: {
        padding: '20px',
        backgroundColor: 'blue',
        color: 'red',
        height: '400px',
        fontFamily: 'Comic sans ms',
        fontSize: { $: 'root.fontSize' },
        backgroundSize: 'cover',
        transform: {
          x: 20,
          y: 120
        },
        // boxShadow: '10px 10px 20px',
        backgroundImage: 'url(https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg)'
      }
    },
    list: {
      $: 'items.$any',
      style: {
        border: '1px solid blue',
        padding: '100px'
      },
      props: {
       default: {
        style: {
          top: 20,
          // height: 80,
          opacity: 0.5,
          border: '2px solid red',
          textAlign: 'center'
        },
        text: {
          $: 'title'
        }
      }
    }
  }
}, $3230953054_hub)

console.log('???', $3230953054_app.position)

document.canvas.add($3230953054_app)

