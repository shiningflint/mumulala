import API from './fetch'

const endPoint = 'http://localhost:9292'

const Recipes = {
  index: function () {
    return API.getData(`${endPoint}/recipes`)
    .then(response => {
      return response
    })
    .catch(error => {
      console.warn(error)
    })
  },
  show: function (recipeID) {
    return API.getData(`${endPoint}/recipes/${recipeID}`)
    .then(response => {
      return response
    })
    .catch(error => {
      console.warn(error)
    })
  },
  create: function ({ name, description, }) {
    const response = {
      id: 999,
      name,
      description,
    }
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response)
      }, 1000)
    })
  },
}

export default Recipes
