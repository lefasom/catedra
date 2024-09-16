import { addDoc, collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import { db } from "../db/firebase";
import { current_videos, delete_videos } from "./videoSlice";

export function delete_video({id}) {
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, 'video', id));
            console.log("video eliminado id : ", id);
            dispatch(delete_videos(id))

        } catch (error) {
            // Manejar cualquier error que ocurra durante la eliminación del documento
            console.error("Error al eliminar el documento:", error);
        }
    };
}

export function get_video() {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'video'));
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            dispatch(current_videos(docs));
        } catch (error) {
            console.log(error)
        }
    }
}

export function add_video({ url, description, title}) {
    return async () => {
        try {
            await addDoc(collection(db, 'video'),
                {
                    url, description, title
                }
            )
        } catch (error) {
            // Manejar cualquier error que ocurra durante la eliminación del documento
            console.error("Error al eliminar el documento:", error);
        }
    };
}


