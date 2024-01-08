import Image from "next/image";


export default function Sidebar() {
    return (
        <>
            <Image width={200} height={200} src='/assets/img/logo.svg' alt="Logo image" className="w-48 h-auto" priority/>
        </>
    )
}
