export default defineEventHandler((event) => {
    console.log(event.context)
    return`Hello, ${event.context?.params?.name || 'ups name param is undefined'}! from index`
    }
)