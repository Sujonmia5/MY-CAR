import { useEffect, useState } from "react";

const useJWT = (email) => {
    const [isToken, setIsToken] = useState(false)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-side-hazel.vercel.app/jwt/token?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.token) {
                        localStorage.setItem('accessToken', data.token)
                        setIsToken(true)
                    };
                })
        }
    }, [email])
    return { isToken }
}
export default useJWT