import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

await db.thread.create({
  data: {
    title: "Quantum‑safe signature schemes",
    description: "Exploring lattice‑based cryptography for post‑QKD era.",
    authorType: "human",
    nodes: {
      create: [
        { content: "Initial literature survey\u00a0\ud83d\udcda", stake: 50 },
        { content: "NYRA‑generated summary of NTRU performance", stake: 10 }
      ]
    }
  }
});

await db.$disconnect();
