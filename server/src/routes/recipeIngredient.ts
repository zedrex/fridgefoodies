import { Router } from "express";
import { addRecipeIngredient, editRecipeIngredient, getRecipeIngredientById } from "../controllers/recipeIngredient.controller";
import { protect } from "../middleware/auth"

const router = Router();
router.post("/recipeingredient", addRecipeIngredient);
router.put("/recipeingredient", editRecipeIngredient);
router.get("/recipeingredient/:id", getRecipeIngredientById)
export default router;