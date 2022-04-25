let counter = 0
export default defineEventHandler((event) => {
  counter++

  console.log(event.context, 'startvalue')
  return JSON.stringify(counter)
})