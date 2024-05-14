import React, { useState } from "react";
import Form from "../Component/form";
import Pagination from "../Component/pagination";
import "../style.css";
import data from "./Data.json";

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchText, setSearchText] = useState("");
    const [searchedData, setSearchedData] = useState(false);
    const [first, setFirst] = useState(true);
    const recordPage = 11;
    const lastIndex = currentPage * recordPage;
    const firstIndex = lastIndex - recordPage;
     
    const filteredData = data.filter(item => item.id.toString().includes(searchQuery));

    const records = filteredData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredData.length / recordPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const prePage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCpage = (id) => {
        setCurrentPage(id);
    };

    const NextPage = () => {
        if (currentPage < npage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        setFirst(false);
    };

    const handleSearch = () =>{
        setSearchQuery(searchText);  
        setSearchedData(true);
        setCurrentPage(1);
    }
    const handleReset = () =>{
        setSearchQuery("");
        setSearchText("");
        setSearchedData(false);
        setCurrentPage(1);
        setFirst(true);
    }
    return (
        <>
            <Form searchText={searchText} handleSearchChange={handleSearchChange} handleSearch={handleSearch} handleReset = {handleReset}  />  
            <table>
                <thead style={{ backgroundColor: "#D9D9D9" }}>
                    <tr>
                        <th>Lead ID</th>
                        <th>Lead Details</th>
                        <th>Sub-Source</th>
                        <th>Status</th>
                        <th>Campaign</th>
                        <th>Type</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Added By</th>
                        <th>Watssapp sent</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>
                                <tr style={{ display: "flex", flexDirection: "column", border: "none" }}>
                                    <div>{d.Detais.name}</div>
                                    <div>{d.Detais.num}</div>
                                </tr>
                            </td>
                            <td>{d.source}</td>
                            <td>{d.status}</td>
                            <td>{d.cmapaign}</td>
                            <td>{d.type}</td>
                            <td>{d.credit}</td>
                            <td>{d.update}</td>
                            <td>{d.add}</td>
                            <td>
                                <a href="https://web.whatsapp.com/" ><i class="fa-brands fa-whatsapp"></i></a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {first &&(
            <Pagination currentPage={currentPage} lastIndex={lastIndex} firstIndex={firstIndex} prePage={prePage} changeCpage={changeCpage} NextPage={NextPage} numbers={numbers} />
            )}
        </>
    );
}

export default Home;
