import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  List,
  ListItem,
  Divider,
  Center,
  LinkBox,
  ListIcon,
  LinkOverlay
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md';

const navMenu = [
  {
   name: 'Home',
   icon: MdHome,
   route: '/'
  },
  {
    name: 'Search',
    icon: MdHome,
    route: '/search'
   },
   {
    name: 'Your Library',
    icon: MdHome,
    route: '/library'
   },
];


const Sidebar = () => {
  return (
   <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray" >
     <Box paddingY="20px">
       <Box width="120px" marginBottom="20px" paddingX="20px" >
         <NextImage src="/trax.svg" height={60} width={120} />
         <Box marginBottom="5px">
           <List spacing={2}>
             {navMenu.map(menu => (
               <ListItem key={menu.name} paddingX="20px" fontSize="16px">
                 <LinkBox>
                   <NextLink href={menu.route} passHref>
                     <LinkOverlay>
                       <ListIcon as={menu.icon} color="white" marginRight="20px"/>
                       {menu.name}
                     </LinkOverlay>
                   </NextLink>
                 </LinkBox>
               </ListItem>
             ))}
           </List>
         </Box>
       </Box>
     </Box>
   </Box>
  )
}

export default Sidebar;