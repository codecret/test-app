import Product from "@/app/models/Product";
import dbConnect from "@/lib/db";

export const dynamic = "force-dynamic";
export async function GET(req, res) {
  try {
    const products = await Product.find({});
    return new Response(JSON.stringify({ products }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const { name, price, category, description, stock, image } = body;

    if (!name || !price) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await Product.create(body);

    // Return the created product
    return new Response("product is added");
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
