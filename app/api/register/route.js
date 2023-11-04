import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  const { name, email, password } = body;

  try {
    const emailExist = await User.findOne({ email });

    if (emailExist) {
      console.log("Email Already Exist", emailExist);
      // return NextResponse.json(false);
      throw new Error("User Already Exists");
    }
    const newUser = await new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    await newUser.save();

    // return NextResponse.json({ success: "Registered Successfully" }, newUser);
    return NextResponse.json(true);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
