import API from './fetch'

const endPoint = 'http://localhost:9292'

const Recipes = {
  index: function () {
    // return API.getData(`${endPoint}/recipes`)
    // .then(response => {
    //   return response
    // })
    // .catch(error => {
    //   console.warn(error)
    // })
    return new Promise(resolve => {
      setTimeout(() => {
        const result = [
          {
            id: 1,
            name: 'チキンサラダ',
            image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w',
          },
          {
            id: 2,
            name: 'カフェラッテ',
            image: 'https://images.unsplash.com/photo-1546843806-76391bfbb4f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w',
          },
          {
            id: 3,
            name: 'チョコラッテ',
            image: 'https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w',
          },
          {
            id: 4,
            name: '寿司セット',
            image: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w',
          },
          {
            id: 5,
            name: 'パンケーキ',
            image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 334w',
          },
          {
            id: 6,
            name: '牛肉面',
            image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80 400w',
          },
          {
            id: 7,
            name: 'チャハン',
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80 752w',
          },
          {
            id: 8,
            name: '牛肉ご飯',
            image: 'https://images.unsplash.com/photo-1537543585341-e990ee22bb00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 334w',
          },
          {
            id: 9,
            name: '卵トースト',
            image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80 500w',
          },
        ]
        resolve(result)
      }, 1000)
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
