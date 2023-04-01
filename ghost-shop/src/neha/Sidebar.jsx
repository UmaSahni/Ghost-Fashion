import React from "react";
import { Box, Container, Select } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <Container>
      <Select>
        <option value="">Category</option>
        <option value="option1">Boyfriend T-Shirts</option>
        <option value="option2">Women Co-ord Sets</option>
        <option value="option3">Dresses</option>
      </Select>

      <Select placeholder="Sort">
        <option value="option1"> Price - High To Low</option>
        <option value="option2">Price - Low To High</option>
      </Select>
    </Container>
  );
};
