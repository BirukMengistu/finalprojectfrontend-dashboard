import { Burger, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import styles from '../styles/layout/burger.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { Auth } from '../hooks/utils';

const HamburgerMenu = () => {
	const isAuth  = Auth.isAuth()
	const [menu, { toggle, close }] = useDisclosure(false);
	const matches = useMediaQuery('(max-width: 481px)');

	return (
	    
		 <Menu
			className={{
				dropdown: styles['bm-menu'],
				item: styles['bm-item'],
				itemLabel: styles['bm-item-list']
			}}
			placement='center'
			size='lg'
			gutter='20'
			radius={4}
			closeOnItemClick={true}
			onClose={close}
			width={!matches && 200}
             >
			
			    
		  
			<Menu.Target>
				<Burger onClick={toggle} opened={menu} color='#FFF8E1' />
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item component={Link} to='/'>
					HOME
				</Menu.Item>
				{isAuth &&
				<Menu.Item component={Link} to='/profile'>
					PROFILE
				</Menu.Item>}
				{isAuth && <Menu.Item component={Link} to='/resume'>
					RESUME
				</Menu.Item>}
				<Menu.Item component={Link} to='/blog'>
					BLOG
				</Menu.Item>
				<Menu.Item component={Link} to='/services'>
					SERVICES
				</Menu.Item>
				<Menu.Item component={Link} to='/support'>
					SUPPORT
				</Menu.Item>
				<Menu.Item component={Link} to='/feedback'>
					FEEDBACK
				</Menu.Item>
    
		{isAuth &&
             <Menu.Item
               component={Link}
		       onClick={()=>Auth.logout()}
              >
          LOG OUT
        </Menu.Item>}
        {!isAuth &&
		<Menu.Item
          component={Link}
          onClick={()=>{
			window.location.replace('http://localhost:3535/')
		  }}
          >
          LOGIN
        </Menu.Item>}
        <p className={styles['bm-footer']}>
          CARELYO <br /> PATIENT
        </p>
      </Menu.Dropdown>
        </Menu>
	   
		
  )
}

export default HamburgerMenu