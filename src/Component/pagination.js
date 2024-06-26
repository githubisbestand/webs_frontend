import React from "react";

function Pagination({ currentPage, lastIndex, firstIndex, prePage, changeCpage, NextPage, numbers }) {
    return (
        <div>
            <ul className="pagination " style={{ marginLeft: "450px" }}>
                <li className="page-item">
                    <a href="#" className="page-link" style={{overflow:"hidden", overflow:"hidden"}} onClick={prePage}>prev</a>
                </li>
                {numbers.map((n, i) => (
                    <li className={`page-item${currentPage === n ? ' active' : ''}`} key={i}>
                        <a href="#" className="page-link" onClick={() => changeCpage(n)}>{n}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a href="#" className="page-link outline-none" onClick={NextPage}>next</a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
