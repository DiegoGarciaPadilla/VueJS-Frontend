import { createStore } from 'vuex'

export default createStore({
  state: {
    pasteles: {
      cheesecake: {
        nombre: 'Cheesecake',
        precio: 200,
        img: 'cheesecake.png'
      },
      tiramisu: {
        nombre: 'Tiramisú',
        precio: 200,
        img: 'tiramisu.png'
      },
      tresLeches: {
        nombre: 'Tres Leches',
        precio: 200,
        img: 'tres-leches.png'
      },
      opera: {
        nombre: 'Ópera',
        precio: 200,
        img: 'opera.png'
      },
      moka: {
        nombre: 'Moka',
        precio: 200,
        img: 'moka.png'
      },
      personalizado: {
        nombre: 'Personalzado',
        precio: '???',
        img: 'personalizado.png'
      }
    },
    adornos: {
      cumpleaños: {
        nombre: 'Adornos de cumpleaños',
        precio: 200,
        img: 'cumpleanos.png'
      },
      nupciales: {
        nombre: 'Adornos nupciales',
        precio: 200,
        img: 'boda.png'
      },
      personalizado: {
        nombre: 'Adornos personalizados',
        precio: 200,
        img: 'minecraft.jpg'
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
