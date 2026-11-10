import { Router } from "express";
import { getPokemonByName } from "../services/pokeapi.js";

const router = Router();

router.get("/:name", async (req, res) => {
    try {
        const pokemon = await getPokemonByName(req.params.name.toLowerCase());
        if (!pokemon) {
            res.status(404).json({ error: "Pokemon not found" });
            return;
        }
        res.json(pokemon);
    } catch (err) {
        console.error(err);
        res.status(502).json({ error: "Failed to fetch Pokemon data" });
    }
});

export default router;