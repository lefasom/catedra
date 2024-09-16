import React from 'react'

function Min_menu({deleteVideo,src,id, stateMin}) {
    return (
        <div className={` ${stateMin ? 'hidden' : 'flex justify-end '} rounded-lg`}>

            <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <span className="material-symbols-outlined
                                text-slate-700
                                    
                                    ">
                    link
                </span>
            </a>
            <span className="material-symbols-outlined
                                cursor-pointer
                                text-slate-700
                                "
                onClick={() => deleteVideo({ id })}
            >
                delete_forever
            </span>
        </div>
    )
}

export default Min_menu