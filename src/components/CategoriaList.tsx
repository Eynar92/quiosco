'use client'
import useQuiosco from "@/hooks/useQuiosco";
import Categoria from "./Categoria";
import React from "react";

const CategoriaList: React.FC = () => {
    const { categorias } = useQuiosco();

    return (
        <nav className="mt-10">
            {categorias.map(categoria => (
                <Categoria key={categoria.id} categoria={categoria} />
            ))}
        </nav>
    )
}

export default CategoriaList
