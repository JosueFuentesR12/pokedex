import Busqueda from "./pokedex/Busqueda";
import "./Pokedex.css"
import PokemonInfo from "./pokedex/PokemonInfo";
import { Grid } from "@mui/material";
import { Pokemon } from "../models/Pokemon";
import { useEffect, useState } from "react";
import axios from "axios";

function Pokedex() {
    const columnSize = 12;
    const [pokemonId,setPokemonId]=useState(0);
    const [pokemon,setPokemon]=useState<Pokemon|null>(null);
    function selectPokemonId(id:number){
        setPokemonId(id);
    }

    function getPokemon() {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemonId).then((response)=>{
            setPokemon(response.data);
        }).catch(() => {
            setPokemon(null);
        });
    }
    

    useEffect(()=>{
        console.log("Cambio el valor de pokemonId y ahora es "+pokemonId)
    },[pokemonId])


    return (
        <section className="Pokedex">
            <Grid className="Pokedex-content" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={columnSize} className="Resultado">
                    {pokemon && <PokemonInfo pokemon={pokemon} />}
                </Grid>
                <Grid item xs={columnSize} className="Busqueda">
                    <Busqueda searchPokemon={getPokemon} changePokemonId={selectPokemonId} />
                </Grid>
            </Grid>
        </section>
    );

}

export default Pokedex;