import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import Development from "../components/tables/Development";
import CheckBox from "../components/tables/CheckBox";
import ColumnTable from "../components/tables/ColumnTable";
import ComplexTable from "../components/tables/ComplexTable";

const Tables = () => {
  return (
    <Layout title="Tables" pagename={"Tables"}>
      <Grid
        h={"calc(100vh - 50px * 2 - 97px)"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} bg="transparent">
          <Development />
        </GridItem>
        <GridItem bg="transparent">
          <CheckBox />
        </GridItem>
        <GridItem bg="transparent">
          <ColumnTable />
        </GridItem>
        <GridItem bg="transparent">
          <ComplexTable />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Tables;
