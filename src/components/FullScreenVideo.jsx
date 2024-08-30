import { useEffect, useState } from "react";

const SkeletonLoader = ({ count }) => {
    return Array.from({ length: count }).map((_, index) => (
        <div
            key={index}
            className="bg-gray-300 animate-pulse rounded-lg h-48"
            style={{ width: "100%" }}
        />
    ));
};

const FullscreenVideo = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula la carga de datos
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Cambia isLoading a false después de 2 segundos

        // Limpiar el temporizador si el componente se desmonta antes de que se complete el temporizador
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="">
            {/* Mostrar los elementos de esqueleto de carga */}
            {/* {isLoading && (
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
                    <SkeletonLoader count={6} />
                </div>
            )} */}
            {/* Mostrar los videos */}
            <div className={`grid grid-cols-3 max-sm:grid-cols-1 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {data.length != 0 ?
                    
                        data.map(({ id, src, title, description }) => (
                            <div key={id} className="flex flex-col  p-6">
                                <iframe
                                    src={src}
                                    width="100%"
                                    height="220"
                                    allowFullScreen
                                    title={`Video ${id}`}
                                    className="rounded-lg"
                                />
                                <h3 className="text-left pl-4 pt-2 font-sans text-[16px]" style={{ color: "#F1F1F1" }}>
                                    {title}
                                </h3>
                                <p className="text-left pl-4 pb-2 text-[14px]" style={{ color: "#AAAAAA" }}>
                                    {description}
                                </p>
                            </div>
                        ))
                    
                    :
                    <h5
                        className="text-slate-50"
                    >No hay coincidencias</h5>
                }

            </div>
        </div>
    );
};

export default FullscreenVideo;
