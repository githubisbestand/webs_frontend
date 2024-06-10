import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../react-crud/slice/userDetails";

function Read() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.userDetail);
    const [searchText, setSearchText] = useState('');
    const [filterData, setFilterData] = useState([]);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        if (searchText) {
            const filterValue = user.filter(item => 
                item.id.toString().includes(searchText) ||
                item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.email.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterData(filterValue);
        } else {
            setFilterData(user);
        }
    };

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    useEffect(() => {
        setFilterData(user);
    }, [user]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const handleDelete = (d) => {
        dispatch(deleteUser(d.id));
        navigate("/signup");
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <div style={{ marginTop: "150px", width: "1250px", marginLeft: "150px" }}>
            <form className="mb-4 d-flex text-end" style={{ width: "1000px" }} onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by id / name /  email"
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <button className="btn btn-warning" style={{ margin: "5px" }} type="submit">Search</button>
            </form>
            <Link to={"../create"} className="btn btn-success">Create +</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData && filterData.map((d) => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.password}</td>
                            <td>
                                <div className="btn">
                                    <Link to={`/update/${d.id}`} className="btn btn-warning m-2">Edit</Link>
                                    <button onClick={() => handleDelete(d)} className="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Read;
