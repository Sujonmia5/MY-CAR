import { useEffect, useState } from "react";

const useJWT = (email) => {
    console.log(email);
    const [isToken, setIsToken] = useState()
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt/token?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
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