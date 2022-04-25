export default defineEventHandler((event) => {
    console.log('events params', event.context)
    return`Hello, ${event.context?.params?.name || 'ups name param is undefined'}! from index`
    }
)