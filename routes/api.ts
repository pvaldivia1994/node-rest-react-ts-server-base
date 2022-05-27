import { Router } from "express";

const router = Router();

router.get('/', (_req, res) => {
  res.send("El API");
});


export default router;
