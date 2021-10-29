import { createContext, useEffect, useState } from 'react';

export const TmdbContext = createContext();

export function TmdbProvider({ children }){


    return <TmdbContext.Provider value={ null }>
        { children }
    </TmdbContext.Provider>
}