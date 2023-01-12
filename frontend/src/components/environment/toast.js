import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SUCCESS = (data) => {
    toast.success(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
}

export const ERROR = (data) =>{
    toast.error(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
}




