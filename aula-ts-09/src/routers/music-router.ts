import { Router } from "express";
import { validateSchemaMiddleware } from "middlewares/validateSchema";
import { musicSchema } from "schemas/musicSchema";
import musicController from "../controllers/music-controller";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchemaMiddleware(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;