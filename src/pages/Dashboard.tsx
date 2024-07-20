import { ContainedList, ContainedListItem } from "@carbon/react";
import React from "react";

function Dashboard() {
  return (
    <React.Fragment>
      <ContainedList label="List title" kind="on-page">
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
      </ContainedList>
      <ContainedList label="List title" kind="on-page">
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
      </ContainedList>
    </React.Fragment>
  );
}

export default Dashboard;
