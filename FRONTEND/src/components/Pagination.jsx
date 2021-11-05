import React from "react";

export default function Pagination() {
  return (
    <Pagination aria-label='Page navigation example'>
      <PaginationItem disabled>
        <PaginationLink first href='#' />
      </PaginationItem>
      <PaginationItem disabled>
        <PaginationLink href='#' previous />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href='#'>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' last />
      </PaginationItem>
    </Pagination>
  );
}
