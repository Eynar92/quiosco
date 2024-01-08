import Image from "next/image";
import CategoriaList from "./CategoriaList";

const Sidebar: React.FC = () => {


    return (
        <>
            <Image
                width={200}
                height={200}
                src='/assets/img/logo.svg'
                alt="Logo image"
                className="w-48 h-auto mx-auto"
                priority
            />
            <CategoriaList />
        </>
    )
}

export default Sidebar;