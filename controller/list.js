/**
 * Created by 张永平 on 2017/9/4.
 */
const fetch = require('node-fetch')

async function dataList(ctx, next) {
  console.log('jinlai')
  try {
    let data
    await fetch(`/json/dataList.json`, {method: 'GET'})
      .then(res => res.json())
      .then(json => {
        data = json
        console.log(data)
      })
    await ctx.render('listData', data)
  } catch (error) {
    throw new Error(error.toString())
  }
}

module.exports = {
  dataList
}