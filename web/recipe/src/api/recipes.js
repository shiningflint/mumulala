import API from './fetch'

const endPoint = 'http://localhost:9292'

const Recipes = {
  getAll: function () {
    return API.getData(`${endPoint}/recipes`)
    .then(response => {
      return response
    })
    .catch(error => {
      console.warn(error)
    })
  },
  getOne: function (recipeID) {
    return API.getData(`${endPoint}/recipes/${recipeID}`)
    .then(response => {
      return response
    })
    .catch(error => {
      console.warn(error)
    })
  },
}

export default Recipes
