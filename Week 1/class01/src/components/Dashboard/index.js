import { useState, useEffect } from "react"
import { getAllUsers } from "../../Config/firebase"

export default function Dashboard() {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const userData = await getAllUsers()
        var tempUsers = [];
        userData.forEach(doc => {
            // console.log(doc.data())
            var obj = doc.data()
            var tempUser = { ...obj, id: doc.id }
            console.log("temp user ==>", tempUser )

            tempUsers.push(tempUser)
        })

        setUsers(tempUsers)
    }, [])
    return <div>
        <h1>Welcome to dashboard</h1>
        <p>All Users</p>
        <table border="3">
            {users.map(item => {
                console.log("item ==>",item)
                const { id, email, name } = item
                return <tr>
                    <td>{id}</td>
                    <td>{email}</td>
                    <td>{name}</td>
                </tr>
            })}
        </table>
    </div>
}