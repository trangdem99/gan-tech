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
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
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
  textDecoration: 'none',
  color: 'rgba(var(--bs-emphasis-color-rgb), 0.65)',
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
        <Navbar className="mx-5" expand="lg">
          <NavbarBrand className="col-3" tag={Link} to="/" style={linkStyle}>
            <Image src={process.env.PUBLIC_URL + "/assets/images/logo.webp"} width="80" height="32" alt="logo" />
          </NavbarBrand>
          
          <NavbarToggler onClick={toggle} />

          <Offcanvas isOpen={is_open} toggle={toggle} direction="end">
            <OffcanvasHeader toggle={toggle}>Menu</OffcanvasHeader>
            <OffcanvasBody>
              <Nav className="me-auto my-2 my-lg-0 mx-auto" navbar>
                <NavItem active={location.pathname === "/"}>
                  <NavLink tag={Link} to="/" style={linkStyle}>
                    Trang chủ
                  </NavLink>
                </NavItem>
                <NavItem active={location.pathname === "/gioi-thieu"}>
                  <NavLink tag={Link} to="/gioi-thieu" style={linkStyle}>
                    Giới thiệu
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={location.pathname.includes("/san-pham") ? "active" : ""}>
                    Sản phẩm
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem tag={Link} to="/san-pham" style={linkStyle}>
                      Tất cả sản phẩm
                    </DropdownItem>
                    {data.products.map((product, index) => (
                      <DropdownItem key={`product-${index}`} tag={Link} to={`/san-pham/${product.slug}`} style={linkStyle}>
                        {product.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={location.pathname.includes("/dich-vu") ? "active" : ""}>
                    Dịch vụ
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem tag={Link} to="/dich-vu" style={linkStyle}>
                      Tất cả dịch vụ
                    </DropdownItem>
                    {data.services.map((service, index) => (
                      <DropdownItem key={`service-${index}`} tag={Link} to={`/dich-vu/${service.slug}`} style={linkStyle}>
                        {service.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </OffcanvasBody>
          </Offcanvas>

          <Nav className="d-none d-md-flex col-6 my-2 my-lg-0 justify-content-center" navbar>
            <NavItem active={location.pathname === "/"}>
              <NavLink tag={Link} to="/" style={linkStyle}>
                Trang chủ
              </NavLink>
            </NavItem>
            <NavItem active={location.pathname === "/gioi-thieu"}>
              <NavLink tag={Link} to="/gioi-thieu" style={linkStyle}>
                Giới thiệu
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={location.pathname.includes("/san-pham") ? "active" : ""}>
                Sản phẩm
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag={Link} to="/san-pham" style={linkStyle}>
                  Tất cả sản phẩm
                </DropdownItem>
                {data.products.map((product, index) => (
                  <DropdownItem key={`product-${index}`} tag={Link} to={`/san-pham/${product.slug}`} style={linkStyle}>
                    {product.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={location.pathname.includes("/dich-vu") ? "active" : ""}>
                Dịch vụ
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag={Link} to="/dich-vu" style={linkStyle}>
                  Tất cả dịch vụ
                </DropdownItem>
                {data.services.map((service, index) => (
                  <DropdownItem key={`service-${index}`} tag={Link} to={`/dich-vu/${service.slug}`} style={linkStyle}>
                    {service.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <div className="d-none d-md-block col-3 text-end">
            Address: {data.address} <br />
            Phone: {data.phone}
          </div>
        </Navbar>
      </div>
    </React.Fragment>
  );
}