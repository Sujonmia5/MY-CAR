import { useEffect, useState } from "react";

const useJWT = (email) => {
    const [isToken, setIsToken] = useState(false)
    console.log(email);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt/token?email=${email}`)
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