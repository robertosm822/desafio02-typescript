
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  rightContent?: ReactNode; // Para botões ou qualquer outro componente à direita do header
}

export const Header = ({ title, rightContent }: HeaderProps) =>  {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1.5rem 2rem"
      bg="teal.500"
      color="white"
      boxShadow="md"
    >
      <Heading size="lg">{title}</Heading>

      <Spacer />

    </Flex>
  );
}

