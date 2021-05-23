import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Avatar,
  useColorModeValue,
  HStack,
  Text,
  Tag,
} from '@chakra-ui/react';
import { protectEmail } from '../../../../utils/protectEmail';
import routes from '../../../../shared/routes';

interface ProfileProps {
  user: any;
  handleSignout: () => void;
}

export const ProfileMenu: FC<ProfileProps> = ({ user, handleSignout }) => {
  return (
    <Menu placement="bottom-start" isLazy>
      <MenuButton
        marginLeft="1rem"
        padding=".5rem"
        _hover={{ background: useColorModeValue('gray.100', 'gray.800') }}
        rounded="full"
      >
        <Avatar size="sm" background={useColorModeValue('blackAlpha.800', 'blackAlpha.600')} />
      </MenuButton>
      <MenuList fontSize="sm">
        <MenuItem as={Link} to={routes.get('PROFILE_OVERVIEW').path}>
          <HStack justify="space-between">
            <Text>{protectEmail(user.email)}</Text>
            <Tag colorScheme="brand">VIP</Tag>
          </HStack>
        </MenuItem>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>API Management</MenuItem>
          <MenuItem>Subscription</MenuItem>
          <MenuItem>
            <HStack>
              <Text>Referral</Text>
              <Tag size="sm" colorScheme="yellow">
                Earn bonus
              </Tag>
            </HStack>
          </MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem onClick={handleSignout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
