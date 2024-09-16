import { delete_video, get_video } from "../../redux/videoAction";
import { useDispatch } from "react-redux";
const FullscreenVideo = ({ data }) => {
const dispatch = useDispatch()
    const deleteVideo = (id) =>{
        console.log(id)
        // dispatch(delete_video(id))
        // dispatch(get_video)
    } 
    return (
        <div className="">
            {/* Mostrar los videos */}
            <div className={`grid grid-cols-3 max-sm:grid-cols-1`}>
                {data.length != 0 ?

                    data.map(({ id, src, title, description }) => (
                        <div key={id}
                            className="flex flex-col p-6 m-2 bg-slate-700 bg-opacity-45 hover:bg-orange-500 hover:bg-opacity-45">
                            <span
                                className="
                            material-symbols-outlined
                            w-6
                            relative
                           top-[-12px]
                           right-[-95%]
                            text-slate-50
                            cursor-pointer
                            ">
                                more_horiz
                            </span>
                            <h3 className="text-left pl-4 pt-2 font-sans text-[16px]" style={{ color: "#F1F1F1" }}>
                                {title}
                            </h3>
                            <p className="text-left pl-4 pb-2 text-[14px]" style={{ color: "#AAAAAA" }}>
                                {description}
                            </p>
                            <div>
                                <a
                                    href={src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                className="cursor-pointer"    
                                >
                                    <span className="material-symbols-outlined
                                text-stone-50
                                    
                                    ">
                                        link
                                    </span>
                                </a>
                                <span className="material-symbols-outlined
                                cursor-pointer
                                text-stone-50
                                "
                                onClick={deleteVideo(id)}
                                >
                                    delete_forever
                                </span>
                            </div>

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
