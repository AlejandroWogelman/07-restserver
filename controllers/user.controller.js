import { request, response } from "express";

export const usersGET = (req = request, res = response) => {
  const query = req.query;
  res.json({ ok: true, msg: "get api controller", query });
};

export const usersPOST = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(201).json({ ok: true, msg: "post api", nombre, edad });
};

export const usersPUT = (req, res = response) => {
  const { id } = req.params;
  res.status(400).json({ ok: true, msg: "put api", id });
};

export const usersDELETE = (req, res = response) => {
  res.json({ ok: true, msg: "delete api" });
};
