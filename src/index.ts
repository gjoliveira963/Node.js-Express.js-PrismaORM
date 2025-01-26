import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  return await prisma.users.findMany();
}

main()
  .then((res) => {
    console.log("Done: ", res);
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Disconnected");
  });
