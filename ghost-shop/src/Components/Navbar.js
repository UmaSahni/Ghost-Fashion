import { Box, Button, Collapse, Flex, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverContent, PopoverTrigger, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link as Redirect, useNavigate } from "react-router-dom";
import styled, { } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/authReducer/action";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { auth, name } = useSelector((store) => store.authReducer)
  console.log(auth, name)
  const dispatch = useDispatch()
  const Navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout())
  }

  const CartSize = useSelector(store=>store.cartReducer.cart.length);

  return (
    <Box style={{ position: "sticky", top: 0 }}>
      <Flex
        bg={useColorModeValue('#E11B23')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('white')}
        align={'center'}>
        <Flex
          flex={{ base: 1, xl: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', xl: 'none' }}>
          <IconButton color={"white"} onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* Logo */}
          <Flex   >
            <Image onClick={() => Navigate('/')} width={"10erm"} src="uma-abc.gif" />
            {/* boxSize={"20"} */}
            <Box display={"flex"} alignItems="center" height={"70px"} width={"70px"}    >
              <Image onClick={() => Navigate('/')} src="heart-cut.png" />
            </Box>
          </Flex>

          <Flex display={{ base: 'none', xl: 'flex' }} alignItems="center" ml={20}>
            <DesktopNav />
          </Flex>
          <Flex onClick={() => Navigate("/cart")} alignItems="center" color={"white"}>
            <MdOutlineShoppingCart style={{ fontSize: "25px", marginLeft: "20px" }} /><Span>{CartSize}</Span>
          </Flex>
        </Flex>{auth ? <Flex align={'end'}><Menu><MenuButton><Flex><Text fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }} color={"white"} fontWeight={'500'} marginLeft={'30px'}>{name}</Text></Flex></MenuButton><MenuList><MenuItem><Button onClick={handleLogOut}>Logout</Button></MenuItem></MenuList></Menu></Flex> :
          <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <Button as={'a'} fontFamily="sans-serif" fontSize={'sm'} fontWeight={400} variant={'link'} color="white" href={'#'}><Link as={Redirect} to='/login'>Sign In</Link></Button>
            <Button as={'a'} display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600} color={'white'} bg={'pink.500'} href={'#'} _hover={{ bg: 'pink.300' }}>Sign Up</Button>
          </Stack>}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
const DesktopNav = () => {
  const linkColor = useColorModeValue('white');
  const linkHoverColor = useColorModeValue('red.100', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={Redirect}
                to={navItem.to ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                textTransform={"uppercase"}
                _hover={{ textDecoration: 'none', color: linkHoverColor }}>{navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (<DesktopSubNav key={child.label} {...child} />))}
                </Stack>
              </PopoverContent>)}
          </Popover>
        </Box>))}
    </Stack>
  );
}
const DesktopSubNav = ({ label, to }) => {
  return (
    <Link
      as={Redirect}
      to={to}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.100', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'blue' }} fontWeight={500}>{label}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ xl: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />))}
    </Stack>
  );
};
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{ textDecoration: 'none' }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>{label}</Text>
        {children && (<Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />)}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children && children.map((child) => (<Link fontFamily={"sans-serif"} key={child.label} py={2} as={Redirect} to={child.to}>{child.label}</Link>))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: 'Women',
    to: '/women',
    children: [
      {
        label: 'Top Wear',
        to: '/womenlist'
      },
      {
        label: 'Bottom Wear',
        to: '#'
      },
      {
        label: 'Shoes & Accessories',
        to: '#'
      },
      {
        label: 'Collections',
        to: '#'
      },
      {
        label: 'Shop by Themes',
        to: '#'
      },
      {
        label: 'Membership',
        to: '#'
      }
    ]
  },
  {
    label: 'Men',
    to: '/men',
    children: [
      {
        label: 'Top Wear',
        to: '/menlist'
      },
      {
        label: 'Bottom Wear',
        to: '#'
      },
      {
        label: 'Shoes & Accessories',
        to: '#'
      },
      {
        label: 'Collections',
        to: '#'
      },
      {
        label: 'Shop by Themes',
        to: '#'
      },
      {
        label: 'Membership',
        to: '#'
      }
    ]
  },
  {
    label: 'Kids',
    children: [
      {
        label: 'Boys',
        to: '#'
      },
      {
        label: 'Girls',
        to: '#'
      },
      {
        label: 'Winter Wear Collection',
        to: '#'
      },
      {
        label: 'Shop by Themes',
        to: '#'
      },
      {
        label: 'Membership',
        to: '#'
      }
    ]
  }
];
const Span = styled.span`
margin-left:-8px;
right:-5px;
position:relative;
top:-10px;
background-color:purple;
color:white;
display:inline-flex;
align-items:center;
justify-content:center;
font-size:15px;
font-weight:500;
height:21px;
min-width:21px;
line-height:1;
border-radius:21px;
letter-spacing:0px;
`;