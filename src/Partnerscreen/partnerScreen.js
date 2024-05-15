import React, { useState } from "react";
import Form from "../Component/form";
import Pagination from "../Component/pagination";
import "../style.css";
import data from "../Data/Data.json";
import config from '../Config/config.json'
import Error from "../Error/error";
import Modal from "../Module/module";
import Share from "../Sare/sare";

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchText, setSearchText] = useState("");
    const [searchedData, setSearchedData] = useState(false);
    const [first, setFirst] = useState(true);
    const recordPage = 8;
    const lastIndex = currentPage * recordPage;
    const firstIndex = lastIndex - recordPage;
    const [shareLead, setshareLead] = useState(null);
    const [isModalOpen, setisModalOpen] = useState(false);
     
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

    const handleShareClick = (Lead) =>{
        setisModalOpen(true)
        setshareLead(Lead);
    }

    const closeModal = () =>{
        setisModalOpen(false)
        setshareLead(null);
    }

    if (!config.showSearchBox && !config.showLeadTable && !config.showPagination && !config.shareButton && !config.showResetButton) {
        return <Error message="Error: No content to display." />;
    }


    return (
        <>
        {config.showSearchBox &&(
            <Form searchText={searchText} handleSearchChange={handleSearchChange} handleSearch={handleSearch} handleReset = {handleReset}  />  
        )}
        {config.showLeadTable &&(
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
                                <button style={{border:"0px", backgroundColor:"white"}} onClick={() => handleShareClick(d)}>
                                    <i className="fa-solid fa-share"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
            {config.showPagination &&(
                <>
            {first &&(
            <Pagination currentPage={currentPage} lastIndex={lastIndex} firstIndex={firstIndex} prePage={prePage} changeCpage={changeCpage} NextPage={NextPage} numbers={numbers} />
            )}
            </>
        )}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {shareLead && <Share lead={shareLead} />}
            </Modal>
        </>
    );
}

export default Home;
