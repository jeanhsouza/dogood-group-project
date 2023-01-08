import { createContext, useState } from "react";
import { api } from "../../services/api";

export const DashContext = createContext({});
export const DashProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [modalPost, setModalPost] = useState(false);
    const [idPost, setId] = useState(0);
    const [idProfilePost, setIdProfilePost] = useState(0)
    const [postList, setPosts] = useState([]);



    const token = window.localStorage.getItem("@USER:TOKEN");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    async function deletePost() {
        try {
            const data = await api.delete(`/posts/${idPost}`);
        } catch (err) {
            console.error(err)
        }
    }

    function openModal(e) {
        setModal(true);
        setId(+e.target.id);
    }

    function openProfilePost(e) {
        setModalPost(!modalPost);
        setIdProfilePost(+e.target.id)
    }


    const createPost = async (data, setLoadingPost) => {
        const token = localStorage.getItem("@USER:TOKEN");
        try {
            setLoadingPost(true);
            const response = await api.post("/posts", data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (response.statusText === "Created") {
                console.log("Post publicado com sucesso!") // É CONSOLE É SÓ O TEXTO DE SUCESSO, SERÁ SUBSTITUÍDO PELO TOAST
            }
        } catch (error) {
            console.log(error);
            /* toast.error(error.response.data.message); */
        } finally {
            setLoadingPost(false);
        }
    }

    const updateUser = async (data, setLoadingUpdateUser) => {
        const token = localStorage.getItem("@USER:TOKEN");
        const id = localStorage.getItem("@USER:ID");
        try {
            setLoadingUpdateUser(true);
            const response = await api.patch(`/users/${id}`, data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (response.statusText === "Created") {
                console.log("Informações atualizadas com sucesso") // É CONSOLE É SÓ O TEXTO DE SUCESSO, SERÁ SUBSTITUÍDO PELO TOAST
            }
        } catch (error) {
            console.log(error);
            /* toast.error(error.response.data.message); */
        } finally {
            setLoadingUpdateUser(false);
        }
    }



    return <DashContext.Provider
        value={{
            modal,
            setModal,
            modalPost,
            setModalPost,
            idProfilePost,
            deletePost,
            setId,
            postList,
            setPosts,
            openModal,
            openProfilePost,
            createPost,
            updateUser
        }}
    >
        {children}
    </DashContext.Provider>;
};
