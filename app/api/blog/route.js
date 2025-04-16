// import { ConnectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
// import BlogModel from "@/lib/config/models/BlogModel";
import prisma from "@/lib/prisma";

export async function GET(request) {
  // NOT NEEDED;
  // await ConnectDB();
  return NextResponse.json({ msg: "API Working" });
}

export async function POST(request) {
  try {
    // Not needed
    // await ConnectDB(); // Ensure DB connection is established

    const formData = await request.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    const timestamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    // ✅ Store in /tmp in production mode
    const filePath = path.join(
      process.cwd(),
      "public",
      `${timestamp}_${image.name}`
    );
    await writeFile(filePath, buffer);

    const imgUrl = `/${timestamp}_${image.name}`; // Store this in DB

    // ✅ Store correct data in MongoDB
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl, // ✅ Store uploaded image URL, not formData.get('image')
      authorImg: formData.get("authorImg") || "", // Ensure it's valid
    };

    // NOT NEEDED
    // await BlogModel.create(blogData);

    await prisma.blog.create({
      data: blogData,
    });
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "File upload failed" }, { status: 500 });
  }
}
