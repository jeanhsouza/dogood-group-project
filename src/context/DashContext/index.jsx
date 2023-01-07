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

	async function deletePost(){
        try{
            const data = await api.delete(`/posts/${idPost}`);
        }catch(err){
            console.log(err)
        }
    }

	function openModal(e){
        setModal(true);
        setId(+e.target.id);
    }

    function openProfilePost(e){
		setModalPost(!modalPost);     
        setIdProfilePost(+e.target.id)   
	}

	return <DashContext.Provider value={{modal, setModal, modalPost, setModalPost, idProfilePost, deletePost, setId, postList, setPosts, openModal, openProfilePost}}>{children}</DashContext.Provider>;
};
