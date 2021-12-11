import Router from 'express'
import Post from './Post.js'
const router = new Router()

// добавление поста
router.post('/posts', async (req, res) => {
    try{
        // получение данных из body
        const {author, title, content, image} = req.body
        const post = await Post.create({author, title, content, image})
        res.json(post)
    } catch(e){
        res.status(500).json(e)
    }
})
// получение всех постов
router.get('/posts')
// получение конкретного поста
router.get('/posts/:id')
// изменение поста
router.put('/posts')
// удаление поста
router.delete('/posts/:id')

export default router