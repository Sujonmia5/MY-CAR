import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState()
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/adminUser?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setIsAdmin(data.isAdmin)
                        setAdminLoading(false)
                    }


                })
        }
    }, [email])
    // console.log(isAdmin);
    return { adminLoading, isAdmin }

};

export default useAdmin;