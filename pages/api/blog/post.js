import BlogModel from "../../../models/blog";
import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  try {
    var slug = req.body.title
      .trim()
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--/g, "-");

    const createdBlog = await BlogModel.create({ ...req.body, slug });
    res.status(200).json({
      success: true,
      message: createdBlog
    });
  } catch (error) {
    if (error.code === 1100) {
      if (error.KeyPattern.slug) {
        return res.status(409).json({
          success: false,
          message: "Title already exist"
        });
      }
    }
    // Error Handle for Required Fields
    if (error.message?.split(":")[2]?.split(",")[0]?.trim()) {
      var errMessage = error.message.split(":")[2].split(",")[0].trim();
      return res.status(400).json({
        success: false,
        message: errMessage
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    });
  }
}
