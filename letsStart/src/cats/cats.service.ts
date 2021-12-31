import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

export const readCats = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: { cats },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "error",
    });
  }
};

export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => cat.id === params.id);

    res.status(200).send({
      success: true,
      data: { cat },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "error",
    });
  }
};

export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    res.status(201).send({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "error",
    });
  }
};

export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(201).send({
      success: true,
      data: { cat: result },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "error",
    });
  }
};

export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(201).send({
      success: true,
      data: { cat: result },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "error",
    });
  }
};

export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCats = Cat.filter((cat) => cat.id !== params.id);
    res.status(201).send({
      success: true,
      data: { cat: newCats },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "error",
    });
  }
};
