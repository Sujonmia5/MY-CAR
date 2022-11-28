import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState()
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-side-hazel.vercel.app/sellerUser?email=${email}`, {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isSeller) {
                        setIsSeller(data.isSeller)
                        setSellerLoading(false)
                    }
                })
        }
    }, [email])
    return { sellerLoading, isSeller }

};

export default useSeller;