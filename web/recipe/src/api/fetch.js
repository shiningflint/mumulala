import fetch from 'isomorphic-fetch'

const fetchData = ({ url = '', method = 'GET', data = null, }) => {
  return fetch(url)
      .then((response) => response)
      .catch((err) => {
        if (!err.json) {
          err.error = 'Server did not reply error response'
          throw err
        }
        throw err.json
      })
}

const getData = (url) => fetchData({ url, })
// const postData = (url, data) => fetchData({ url, method: 'POST', data })
// const putData = (url, data) => fetchData({ url, method: 'PUT', data })
// const patchData = (url, data) => fetchData({ url, method: 'PATCH', data })
// const deleteData = (url, data) => fetchData({ url, method: 'DELETE', data })

export default {
  getData,
  // postData,
  // putData,
  // patchData,
  // deleteData
}
