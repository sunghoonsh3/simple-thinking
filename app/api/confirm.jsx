import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: "Invalid token" });
  }

  try {
    // Find email by token
    const subscriber = await prisma.subscription.findUnique({
      where: { verificationToken: token },
    });

    if (!subscriber) {
      return res.status(404).json({ error: "Invalid or expired token" });
    }

    // Mark email as verified
    await prisma.subscription.update({
      where: { verificationToken: token },
      data: { verified: true, verificationToken: null },
    });

    res.status(200).json({ message: "Email successfully verified!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
