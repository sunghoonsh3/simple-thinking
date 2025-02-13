import { v4 as uuidv4 } from "uuid"; // Generate unique verification token
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma"; // Assuming you use Prisma (can be changed)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // Generate verification token
    const verificationToken = uuidv4();

    // Store email in database with 'unverified' status
    await prisma.subscription.create({
      data: {
        email,
        verified: false,
        verificationToken,
      },
    });

    // Send verification email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password (use environment variables)
      },
    });

    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm?token=${verificationToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirm your subscription",
      html: `<p>Click the link below to confirm your subscription:</p>
             <a href="${verificationLink}">${verificationLink}</a>`,
    });

    res
      .status(200)
      .json({ message: "Verification email sent! Check your inbox." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
