import { Router } from "express";
import {
    getAllRecipe,
    addRecipe,
    editRecipe,
    getAllRecipeByUsers,
    getRecipeById,
    searchRecipeByKeyWord
} from "../controllers/recipe.controller";

import { protect } from "../middleware/auth"

const router = Router();

router.post("/recipe",protect,addRecipe)
    .put("/recipe", editRecipe)
    .get("/recipe", getAllRecipe);
router.get("/recipe/user/:id", getAllRecipeByUsers);
router.get("/recipe/:id", getRecipeById);
router.get("/recipe/find/:keyword", searchRecipeByKeyWord);

export default router;