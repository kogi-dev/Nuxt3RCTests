export default defineEventHandler((event) => {
    console.log('events params', event.context)
    return`Hello, ${event.context?.params?.name || 'uupps name param is undefined'}! from param route`
    }
)