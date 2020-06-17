import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'

const port = Deno.env.get("PORT") || 5000

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/api/v1/products', ({ response }: { response: any }) => {
    response.body = 'Hello World'
})

console.log(`Server running on port: ${port}`)
await app.listen({ port: +port })