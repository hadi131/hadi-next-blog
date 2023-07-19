/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },

  env: {
    MONGO_URI:
      "mongodb+srv://abcd:123@cluster0.kwzgjsu.mongodb.net/nextJSBlog?retryWrites=true&w=majority",
      NEXTAUTH_SECRET:"codewithhadi"
  }
};

module.exports = nextConfig;
