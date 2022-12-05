import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Userrow from './Userrow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://my-work-12-server.onrender.com/users').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">All users : {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <Userrow user={user} index={index} refetch={refetch}></Userrow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;