import { useContext } from "react";
import { AuthContext } from "./AuthContext";


export function Header() {

    const {isLoggedIn} = useContext(AuthContext);
    
    return (
        <>
            {!isLoggedIn ? <h1>Hello!, Maks</h1> : <h2>Войдите в систему</h2>}
        </>
    )
}