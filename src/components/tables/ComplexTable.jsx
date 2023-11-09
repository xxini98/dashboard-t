import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Image,
  Tr,
  Progress,
} from "@chakra-ui/react";
import checked from "../../assets/images/complexTable/check_circle.svg";
import error from "../../assets/images/complexTable/error.svg";
import cancel from "../../assets/images/complexTable/cancel.svg";

const data = [
  {
    title: "Marketplace",
    image: [{ src: checked, alt: "checked" }],
    state: "Approved",
    date: `12.Jun.2021`,
    percentage: 75.5,
  },
  {
    title: "Venus Dashboard Builder",
    image: [{ src: cancel, alt: "cancel" }],
    state: "Disable",
    date: `20.May.2021`,
    percentage: 95.5,
  },
  {
    title: "Venus Design System",
    image: [{ src: error, alt: "error" }],
    state: "Error",
    date: `12.Jun.2021`,
    percentage: 75.5,
  },
  {
    title: "Uranus",
    image: [{ src: checked, alt: "checked" }],
    state: "Approved",
    date: `12.Jul.2021`,
    percentage: 65.5,
  },
];

const ComplexTable = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Complex Table</Heading>
      </CardHeader>

      <CardBody>
        <TableContainer>
          <Table>
            <TableCaption>Complex Table</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th isNumeric>Title</Th>
                <Th>Title</Th>{" "}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index} display="flex">
                  <Td w="300px">{item.title}</Td>
                  <Td w="50px">
                    {item.image.map((images, i) => (
                      <Image key={i} src={images.src} alt={images.alt} />
                    ))}
                  </Td>
                  <Td w="100px">{item.state}</Td>
                  <Td w="100px">{item.date}</Td>
                  <Td>
                    <Progress value={item.percentage} w="200px" />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default ComplexTable;
