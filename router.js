import Router from 'express'
import PostController from './PostController.js'

const router = new Router()

// добавление поста
router.post('/posts', PostController.create)
// получение всех постов
router.get('/posts', PostController.getAll)
// получение конкретного поста
router.get('/posts/:id', PostController.getOne)
// изменение поста
router.put('/posts', PostController.apdate)
// удаление поста
router.delete('/posts/:id', PostController.delete)

export default router