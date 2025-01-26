import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  return await prisma.users.findMany();
}

main()
  .then((res) => {
    console.log("Query success: ", res);
  })
  .catch((e) => {
    console.error("Query error: ", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Prisma disconnected successfully");
  });
