let counter = 0
export default defineEventHandler((event) => {
  counter++

  console.log(event.context, 'basecounter')
  return JSON.stringify(counter)
})