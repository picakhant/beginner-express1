import prisma from "../prismaClient.js";

export const createBook = async (req, res) => {
  const { name, author, release, price } = req.body;

  try {
    if (!name || !author || !release || !price) {
      return res.status(400).json({ message: "Invalid Data!", isErr: true });
    }

    const isBookNameIsAlreadyExists = await prisma.book.findUnique({
      where: {
        name,
      },
    });

    if (isBookNameIsAlreadyExists) {
    return res.status(400).json({ message: "Book name is already exist!", isErr: true  });
      
    }

    await prisma.book.create({
      data: {
        name,
        author,
        price,
        release,
      },
    });

    return res.status(200).json({ message: "Book Created Successful!", isErr: false  });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Fial to create Book, Internal server error!", isErr: true  });
  }
};
