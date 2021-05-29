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
    <Menu placement="bottom-end" isLazy>
      <MenuButton
        marginLeft="1rem"
        padding=".5rem"
        _hover={{ background: useColorModeValue('gray.100', 'gray.800') }}
        rounded="full"
      >
        <Avatar size="sm" background={useColorModeValue('blackAlpha.800', 'blackAlpha.600')} />
      </MenuButton>
      <MenuList fontSize="sm">
        <MenuItem as={Link} to="/profile/overview">
          <HStack justify="space-between">
            <Text>{protectEmail(user.email)}</Text>
            <Tag colorScheme="brand">VIP</Tag>
          </HStack>
        </MenuItem>
        <MenuDivider />
        <MenuGroup>
          <MenuItem as={Link} to="/profile/api">
            API Management
          </MenuItem>
          <MenuItem as={Link} to={routes.get('SUBSCRIPTION').path}>
            Subscription
          </MenuItem>
          <MenuItem as={Link} to={routes.get('REFERRAL').path}>
            <HStack>
              <Text>Referral</Text>
              <Tag size="sm" colorScheme="yellow">
                Earn bonus
              </Tag>
            </HStack>
          </MenuItem>
          <MenuItem as={Link} to="/profile/settings">
            Settings
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem onClick={handleSignout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
