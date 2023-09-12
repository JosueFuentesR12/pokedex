export type Pokemon={
    id:number,
    name:string,
    abilities:AbilityOuter[],
    moves:MoveOuter[],
    sprites:Sprites,
    types:TipoOuter[],
    stats:StatOuter[],
}


export type AbilityOuter={
    ability:AbilityInner
}

export type AbilityInner={
    name:string
}

export type MoveOuter={
    move:MoveInner
}

export type MoveInner={
    name:string
}

export type Sprites={
    other:Other
}

export type Other={
    "official-artwork":OfficialArtwork
}

export type OfficialArtwork={
    front_default:string,
}

export type TipoOuter = {
    slot: number
    type: TipoInner
  };
  
export type TipoInner = {
    name: string
}

export type StatOuter = {
    stat: {
        name:string
    }
    base_stat: number
}