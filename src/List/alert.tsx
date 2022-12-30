import { useEffect, FC } from "react";

const Alert: React.FC = () =>{
    useEffect(() =>{
        alert('welcome');
    }, [])
    return (
        <></>
    )
}

export default Alert;