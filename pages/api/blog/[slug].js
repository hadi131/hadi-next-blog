import dbConnect from "../../../config/dbConnect";
import BlogModel from "../../../models/blog";

export default async function (req, res) {
  switch (req.method) {
    case "GET":
      try {
        const singleBlog = await BlogModel.findOne({
          slug: req.query.slug
        });
        res.status(200).json({
          success: true,
          singleBlog
        });
      } catch (error) {
        res.status(error);
      }
      break;

    case "PUT":
      try {
        const singleBlog = await BlogModel.findOne({
          slug: req.query.slug
        });
        if (!singleBlog) {
          res.status(404).json({ success: false, message: "Blog Not Found!" });
        } else {
          const updatedBlog = await BlogModel.findByIdAndUpdate(
            singleBlog._id,
            {
              $set: {
                ...req.body
              }
            },
            { new: true }
          );
          res.status(200).json({
            success: true,
            message: updatedBlog
          });
        }
      } catch (error) {
        res.status(error);
      }
      break;

    case "DELETE":
      try {
        const singleBlog = await BlogModel.findOne({
          slug: req.query.slug
        });
        if (!singleBlog) {
          res.status(404).json({ success: false, message: "Blog Not Found!" });
        } else {
          const deletedBlog = await BlogModel.findByIdAndDelete(singleBlog._id);
          res.status(200).json({
            success: true,
            message: "Your Blog Has Been Deleted!"
          });
        }
      } catch (error) {
        res.status(error);
      }
      break;
    default:
      break;
  }
}
