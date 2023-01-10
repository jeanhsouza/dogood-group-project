import { createContext, useState } from "react";
import { api } from "../../services/api";

export const DashContext = createContext({});
export const DashProvider = ({ children }) => {
	const [modal, setModal] = useState(false);
	const [idPost, setId] = useState(0);
	const [postList, setPosts] = useState([]);

	const token = window.localStorage.getItem("@USER:TOKEN");
	api.defaults.headers.common.authorization = `Bearer ${token}`;

	async function deletePost(){
        try{
            const data = await api.delete(`/posts/${idPost}`);
            setModal(false);
        }catch(err){
            console.log(err)
        }
    }

	function openModal(e){
        setModal(true);
        setId(+e.target.id);
    }
	return <DashContext.Provider value={{modal, setModal, deletePost, setId, postList, setPosts, openModal}}>{children}</DashContext.Provider>;
};
