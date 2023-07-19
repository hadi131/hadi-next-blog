import BlogModel from '../../../models/blog'
import dbConnect from '../../../config/dbConnect'


export default async function handler(rq,res){
    dbConnect();
    try {
        const SingleBlog = await BlogModel.find();
        res.status(200).json({
            success:true,
            SingleBlog
        })

    } catch (error) {
        console.log(error)
    }
}