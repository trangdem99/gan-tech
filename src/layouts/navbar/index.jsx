import React from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  NavLink
} from 'reactstrap';

//redux
import {
  useSelector,
} from "react-redux";
import {
  createSelector
} from "@reduxjs/toolkit";
import Image from '../../components/image';

// Custom CSS class for links
const linkStyle = {
  fontSize: '1.25rem',
};

export default function NavBar() {
  const location = useLocation();

  const {
    data,
  } = useSelector(createSelector(
    state => state.Settings,
    (state) => ({
      "data": state.setting.data,
    })
  ))

  const [is_open, set_is_open] = React.useState(false)

  const toggle = () => {
    set_is_open(!is_open)
  }

  return (
    <React.Fragment>
      <div className="bg-white sticky-top justify-items-center">
        <Navbar className="mx-5 my-3" expand="lg">
          <NavbarBrand className="col-4" tag={Link} to="/" style={linkStyle}>
            <Image src={process.env.PUBLIC_URL + "/assets/images/logo.webp"} width="240" height="96" alt="logo" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />

          <Offcanvas isOpen={is_open} toggle={toggle} direction="end">
            <OffcanvasHeader toggle={toggle}>Menu</OffcanvasHeader>
            <OffcanvasBody>
              <Nav className="me-auto my-2 my-lg-0 mx-auto" navbar>
                <NavItem active={location.pathname === "/"} className="mx-2">
                  <NavLink tag={Link} to="/" style={linkStyle}>
                    Trang chủ
                  </NavLink>
                </NavItem>
                <NavItem active={location.pathname === "/dich-vu"} className="mx-2">
                  <NavLink tag={Link} to="/dich-vu" style={linkStyle}>
                    Dịch vụ
                  </NavLink>
                </NavItem>
                <NavItem active={location.pathname === "/blog"} className="mx-2">
                  <NavLink tag={Link} to="/blog" style={linkStyle}>
                    Blog
                  </NavLink>
                </NavItem>
              </Nav>
            </OffcanvasBody>
          </Offcanvas>

          <Nav className="d-none d-md-flex col-4 my-2 my-lg-0 justify-content-center" navbar>
            <NavItem active={location.pathname === "/"} className="mx-2">
              <NavLink tag={Link} to="/" style={linkStyle}>
                Trang chủ
              </NavLink>
            </NavItem>
            <NavItem active={location.pathname === "/dich-vu"} className="mx-2">
              <NavLink tag={Link} to="/dich-vu" style={linkStyle}>
                Dịch vụ
              </NavLink>
            </NavItem>
            <NavItem active={location.pathname === "/blog"} className="mx-2">
              <NavLink tag={Link} to="/blog" style={linkStyle}>
                Blog
              </NavLink>
            </NavItem>
          </Nav>

          <div className="d-none d-md-block col-4 text-end">
            <Link to="/dang-nhap" className="btn btn-light" style={linkStyle}>Đăng nhập</Link>
            <Link to="/lien-he" className="btn btn-primary ms-2" style={linkStyle}>Liên hệ</Link>
          </div>
        </Navbar>
      </div>
    </React.Fragment>
  );
}