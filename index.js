import { render } from 'brisky-render'
import h from 'hub.js'

const hub = h({
  url: 'ws://localhost:3030'
})

const app = render({
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
        // padding: '100px',
        border: '1px solid blue',
        height: '500px',
        width: '400px',
        // overflow: 'hidden'
      },
      props: {
       default: {
        style: {
          top: 20,
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
}, hub)

console.log('???', app.position)

document.canvas.add(app)

document.showFPS(true)