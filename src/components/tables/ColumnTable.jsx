import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const data = [
  {
    title: "Marketplace",
    percent: 17.5,
    number: `2.458`,
    date: `24.Jan.2021`,
  },
  {
    title: "Marketplace",
    percent: 17.5,
    number: `2.458`,
    date: `24.Jan.2021`,
  },
  {
    title: "Marketplace",
    percent: 17.5,
    number: `2.458`,
    date: `24.Jan.2021`,
  },
  {
    title: "Marketplace",
    percent: 17.5,
    number: `2.458`,
    date: `24.Jan.2021`,
  },
  {
    title: "Marketplace",
    percent: 17.5,
    number: `2.458`,
    date: `24.Jan.2021`,
  },
];

const ColumnTable = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">4-Column Table</Heading>
      </CardHeader>

      <CardBody py={2} px={5}>
        <TableContainer overflowX={"hidden"} overflowY={"auto"} maxH="296px ">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th w="50px" p="0">
                  Title
                </Th>
                <Th>Title</Th>
                <Th isNumeric>Title</Th>
                <Th>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.title}</Td>
                  <Td>{item.percent} % </Td>
                  <Td>{item.number}</Td>
                  <Td>{item.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default ColumnTable;
