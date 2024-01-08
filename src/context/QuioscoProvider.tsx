'use client'
import axios from 'axios';
import { useState, useEffect, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

export type CategoryType = {
    id: string;
    nombre: string;
    icono: string;
}

export type ActualCategoryType = {
    id: string;
    nombre: string;
}

export interface QuioscoContextProps {
    categorias: CategoryType[];
    setCategorias: Dispatch<SetStateAction<CategoryType[]>>;

    categoriaActual: ActualCategoryType | null;
    setCategoriaActual: Dispatch<SetStateAction<ActualCategoryType | null>>
    handleClickCategoria: (id: string) => void;
}

export const QuioscoContext = createContext<QuioscoContextProps>({
    categorias: [],
    setCategorias: (): CategoryType[] => [],

    categoriaActual: null,
    setCategoriaActual: (): ActualCategoryType | null => null,
    handleClickCategoria: () => { },
})


export const QuioscoProvider = ({ children }: { children: ReactNode }) => {

    const [categorias, setCategorias] = useState<CategoryType[]>([])
    const [categoriaActual, setCategoriaActual] = useState<ActualCategoryType | null>(null);

    // Get categories
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias');
        setCategorias(data);
    }
    useEffect(() => {
        obtenerCategorias();
    }, [])

    // Get actual category
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias]);

    const handleClickCategoria = (id: string) => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0]);
    }

    const contextValue: QuioscoContextProps = {
        categorias,
        setCategorias,
        categoriaActual,
        setCategoriaActual,
        handleClickCategoria,
    }


    return (
        <QuioscoContext.Provider
            value={contextValue}
        >
            {children}
        </QuioscoContext.Provider>
    )
}