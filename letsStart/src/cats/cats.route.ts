import { Router } from "express";
import {
  createCat,
  deleteCat,
  readCat,
  readCats,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

router.get("/cats", readCats);

router.get("/cats/:id", readCat);

router.post("/cats", createCat);

router.put("/cats/:id", updateCat);

router.patch("/cats/:id", updatePartialCat);

router.delete("/cats/:id", deleteCat);

export default router;
