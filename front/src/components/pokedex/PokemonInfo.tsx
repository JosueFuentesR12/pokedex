import { Box, Tab, Tabs } from "@mui/material";
import "./PokemonInfo.css";
import React from "react";
import { Pokemon } from "../../models/Pokemon";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="tabpanel"
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

interface PokemonInfoProps {
    pokemon:Pokemon
}

function PokemonInfo(props:PokemonInfoProps) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return <>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', textAlign: 'center', overflow: 'auto', position: 'absolute', bottom: 0, left: "50%", transform: "translateX(-50%)", background: "#A9A935", borderTop: "1px solid #000000e0" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Image" />
                <Tab label="Type" />
                <Tab label="Abilities" />
                <Tab label="Stats" />
                <Tab label="Moves" />
            </Tabs>
        </Box>
        <div style={{height: "100%"}}>
            <h1 className="Name">{props.pokemon.name}</h1>
            <CustomTabPanel value={value} index={0}>
                <div className="tab">
                    <img className="Image" src={props.pokemon.sprites.other["official-artwork"].front_default} />
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className="tab">
                    <ul>
                        {props.pokemon.types.map((type,index)=>{
                            return <li key={index}>{type.type.name}</li>
                        })}
                    </ul>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className="tab">
                    <ul>
                        {props.pokemon.abilities.map((ability,index)=>{
                            return <li key={index}>{ability.ability.name}</li>
                        })}
                    </ul>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <div className="tab">
                    <ul>
                        {props.pokemon.stats.map((stat,index)=>{
                            return <li key={index}>{stat.stat.name}:{stat.base_stat}</li>
                        })}
                    </ul>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <div className="tab">
                    <ul>
                        {props.pokemon.moves.map((move,index)=>{
                            return <li key={index}>{move.move.name}</li>
                        })}
                    </ul>
                </div>
            </CustomTabPanel>
        </div>
    </>;
}

export default PokemonInfo;