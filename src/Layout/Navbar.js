import { useNavigate } from 'react-router-dom';
import styles from '../styles/layout/navbar.module.css';
import  HamburgerMenu  from './HamburgerMenu';
import Logo from '../assets/images/navbar/hubLogo.svg';
import { Avatar} from '@mantine/core';
import { Auth } from '../hooks/utils'
import { useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import images from '../assets/images/languages/index';

const useStyles = createStyles((theme, { opened }) => ({
	control: {
	  
	  display: 'flex',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  padding: `${theme.spacing.xs} ${theme.spacing.md}`,
	  borderRadius: theme.radius.md,
	  radius:'md',
	  border: `${rem(1)} solid ${
		theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.brand[2]
	  }`,
	  transition: 'background-color 150ms ease',
	  
  
	  '&:hover': {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.brand[opened ? 1 : 2],
	  },
	},
  
	label: {
	  fontWeight: 500,
	  fontSize: theme.fontSizes.sm,
	},
  
	icon: {
	  transition: 'transform 150ms ease',
	  transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
	},
  }));
const data = [
	{ label: 'En', image: images.english },
	{ label: 'Ge', image: images.german },
	{ label: 'It', image: images.italian },
	{ label: 'Fr', image: images.french },
	{ label: 'Sw', image: images.sweden },
  ];
const Navbar = () => {
	const  isAuth  = Auth.isAuth()
	
	const navigate = useNavigate();
	const [opened, setOpened] = useState(false);
    const { classes } = useStyles({ opened });
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));
	return (
		<div id='menuID' className={styles['l-navbar']}>
			<div className={styles.navbar}>
				<img
					className={styles['l-navbar-logo']}
					src={Logo}
					alt=''
					onClick={() => {
						navigate('/');
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							navigate('/');
						}
					}}
				/>
				
                <div style = {{display:'flex', alignItems : 'center', marginLeft: '5px' }}>
				<Menu radius='lg'>
						<Menu.Target >
						<UnstyledButton className={classes.control}>
						<Group  >
							<Image src={selected.image} defaultValue={selected.image.english}  width={20} height={22} />
						</Group>
						<IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
						</UnstyledButton>
					</Menu.Target>
			          <Menu.Dropdown>{items}</Menu.Dropdown>
              </Menu>
				{ isAuth && <Avatar radius='lg' src={null} alt="no image here" color="#FFF8E1" />}
			 <HamburgerMenu />
				</div>
				
			</div>
		</div>
	);
};

export default Navbar;