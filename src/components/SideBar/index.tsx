import { Box, Drawer, DrawerBody, useBreakpointValue, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader } from "@chakra-ui/react";
import React from "react";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { SidebarNav } from "./SideBarNav";

export function SideBar() {
  const isFloatingSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  const { isOpen, onClose } = useSidebarDrawer()


  if (isFloatingSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>

        <DrawerOverlay>

          <DrawerContent bg='gray.800' p='4'>

            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav></SidebarNav>
            </DrawerBody>

          </DrawerContent>

        </DrawerOverlay>

      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav></SidebarNav>
    </Box>
  )
}