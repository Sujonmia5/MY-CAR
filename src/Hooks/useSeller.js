import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState()
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/sellerUser?email=${email}`, {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.isSeller) {
                        setIsSeller(data.isSeller)
                        setSellerLoading(false)
                    }
                })
        }
    }, [email])
    console.log(isSeller);
    return { sellerLoading, isSeller }

};

export default useSeller;