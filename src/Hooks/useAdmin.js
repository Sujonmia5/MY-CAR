import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState()
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-side-hazel.vercel.app/adminUser?email=${email}`, {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin)
                        setAdminLoading(false)
                    }


                })
        }
    }, [email])
    // (isAdmin);
    return { adminLoading, isAdmin }

};

export default useAdmin;