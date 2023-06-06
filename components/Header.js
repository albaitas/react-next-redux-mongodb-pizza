import React from 'react';
import Image from 'next/image';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Products', path: '/products' },
    { id: 3, title: 'Admin', path: '/admin' },
    { id: 4, title: 'Contact', path: '/contact' },
    { id: 5, title: 'Blog', path: '/blog' }
  ];
  const { pathname } = useRouter();
  return (
    <header>
      <Navbar className={styles.navbar} collapseOnSelect sticky='top' bg='warning' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Image src='/images/pizza_logo.png' alt='Pizza' width={82} height={58} priority />
          </Navbar.Brand>
          <Navbar.Toggle className={styles.navbar_toggler} aria-controls='navbarResponsive' />
          <Navbar.Collapse id='navbarResponsive'>
            <Nav className='mx-auto top-menu'>
              {navigation.map(({ id, title, path }) => {
                return (
                  <Nav.Link key={id} href={path}>
                    <div className={pathname === path ? styles.active : ''}>{title}</div>
                  </Nav.Link>
                );
              })}
            </Nav>

            <Nav className='ms-auto'>
              <div className={styles.cont}>
                <div className={styles.phone}>
                  <Image src='/images/telephone.png' alt='telephone' width='32' height='32' />
                </div>
                <div className={styles.texts}>
                  <div className={styles.text}>ORDER NOW!</div>
                  <div className={styles.text}>370 655 55555</div>
                </div>
              </div>
            </Nav>
            <Nav className='ms-auto'>
              <Link href='/cart'>
                <div className={styles.cart}>
                  <FaShoppingCart />
                  <div className={styles.counter}>{quantity}</div>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
