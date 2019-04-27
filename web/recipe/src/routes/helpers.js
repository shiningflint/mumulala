export const asyncComponentLoader = (folderName, fileName = 'index') =>
  () => import(/* webpackChunkName: "page-[request]" */ `../views/${folderName}/${fileName}.vue`)
