export default defineEventHandler((event) => {
    console.log(event.context.params)
    return`Hello, ${event.context?.params?.name || 'uupps name param is undefined'}! from param route`
    }
)