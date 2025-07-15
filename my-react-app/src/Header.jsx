 import { useAuth } from './Hooks/useAuth'

export function Header() {

    const {isLoggedIn} = useAuth();
    
    return (
        <>
            {!isLoggedIn ? <h1>Hello!, Maks</h1> : <h2>Войдите в систему</h2>}
        </>
    )
}