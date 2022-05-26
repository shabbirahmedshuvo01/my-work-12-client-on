import React from 'react';
import { toast } from 'react-toastify';

const Userrow = ({ user, index, refetch }) => {


    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://my-final-project115.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            // headers: {
            //     "content-type": "application/json"
            // },
            // body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('successfully made an admin')

            })
    }

    return (
        <div>
            <tbody>
                <tr>
                    <th>{index + 1}</th>
                    <td>{user.email}</td>
                    <td>{role !== 'admin' && < button onClick={makeAdmin} class="btn btn-xs">MaKe Admin</button>}</td>
                    <td><button class="btn btn-xs">Remove User</button></td>
                </tr>
            </tbody>
        </div >
    );
};

export default Userrow;