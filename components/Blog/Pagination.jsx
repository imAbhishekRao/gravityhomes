import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = () => {
    return (
        <>
            <Pagination className="justify-content-center Pagination-bootstrap-custom">
                <Pagination.Item active>{1}</Pagination.Item>
				<Pagination.Item>{2}</Pagination.Item>
				<Pagination.Item>{3}</Pagination.Item>
				<Pagination.Item className="d-none d-md-block">{4}</Pagination.Item>
                <Pagination.Item className="d-none d-md-block">{5}</Pagination.Item>

                <Pagination.Ellipsis />

                <Pagination.Next />
            </Pagination>
        </>
    );
};

export default PaginationComponent;
