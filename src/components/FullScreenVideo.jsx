import { Link } from "react-router-dom";
const FullscreenVideo = ({ data }) => {
    return (
        <div className="">
            {/* Mostrar los videos */}
            <div className={`grid grid-cols-3 max-sm:grid-cols-1`}>
                {data.length != 0 ?

                    data.map(({ id, src, title, description }) => (
                        <a key={id} 
                        
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        className="flex flex-col p-6 m-2 bg-slate-700 bg-opacity-45 hover:bg-orange-500 hover:bg-opacity-45">
                       
                            <h3 className="text-left pl-4 pt-2 font-sans text-[16px]" style={{ color: "#F1F1F1" }}>
                                {title}
                            </h3>
                            <p className="text-left pl-4 pb-2 text-[14px]" style={{ color: "#AAAAAA" }}>
                                {description}
                            </p>
                        </a>
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
