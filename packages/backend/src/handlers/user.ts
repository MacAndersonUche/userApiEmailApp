import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
    const hash = await hashPassword(req.body.password);
  
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hash,
      },
    });
  
    const token = createJWT(user);
    res.json({ token });
  };

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.body.username }  && { id: req.body.email },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};