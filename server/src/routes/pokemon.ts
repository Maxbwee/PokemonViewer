import { Router } from "express";
import { getPokemonByName } from "../services/pokeapi.js";

const router = Router();

router.get("/:name", async (req, res) => {
    const name = req.params.name.toLowerCase();
    const pokemon = await getPokemonByName(name);

    if(!pokemon) {
        res.status(404).json({error: "Pokemon not found" });
        return;
    }

    res.json(pokemon);
});

export default router;