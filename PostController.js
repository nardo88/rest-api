import Post from "./Post.js"

class PostController {
    
    async create(req, res) {
        try{
            // получение данных из body
            const {author, title, content, image} = req.body
            const post = await Post.create({author, title, content, image})
            res.json(post)
        } catch(e){
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try{
            const post = await Post.find()
            res.json(post)
        } catch(e){
            res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'id not specified'})
            }
            const post = await Post.findById(id)
            res.json(post)
        } catch(e){
            res.status(500).json(e)
        }
    }

    
    async apdate(req, res){
        try{
            const post = req.body
            console.log(post);
            if(!post._id){
                res.status(400).json({message: 'id not specified'})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatedPost)
            
        } catch(e){
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'id not specified'})
            }
            const post = await Post.findByIdAndDelete(id)
            return res.json(post)
        } catch(e){
            res.status(500).json(e)
        }
    }
}

export default new PostController()


