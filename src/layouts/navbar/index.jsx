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
  NavLink as ReactstrapNavLink
} from 'reactstrap';

//redux
import {
  useSelector,
} from "react-redux";
import {
  createSelector 
} from "@reduxjs/toolkit";

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
          <NavbarBrand className="col-3">
            <Link to="/" style={linkStyle}>
              <img src="./assets/images/logo.webp" alt="GAN Tech" width="80" height="32"></img>
            </Link>
          </NavbarBrand>
          
          <NavbarToggler onClick={toggle} />

          <Offcanvas isOpen={is_open} toggle={toggle} direction="end">
            <OffcanvasHeader toggle={toggle}>Menu</OffcanvasHeader>
            <OffcanvasBody>
              <Nav className="me-auto my-2 my-lg-0 mx-auto" navbar>
                <NavItem active={location.pathname === "/"}>
                  <ReactstrapNavLink tag={Link} to="/" style={linkStyle}>
                    Trang chủ
                  </ReactstrapNavLink>
                </NavItem>
                <NavItem active={location.pathname === "/gioi-thieu"}>
                  <ReactstrapNavLink tag={Link} to="/gioi-thieu" style={linkStyle}>
                    Giới thiệu
                  </ReactstrapNavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={location.pathname.includes("/san-pham") ? "active" : ""}>
                    Sản phẩm
                  </DropdownToggle>
                  <DropdownMenu end>
                    {data.products.map((product, index) => (
                      <DropdownItem key={index}>
                        <Link to={`/san-pham/${product.slug}`} style={linkStyle}>
                          {product.name}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={location.pathname.includes("/dich-vu") ? "active" : ""}>
                    Dịch vụ
                  </DropdownToggle>
                  <DropdownMenu end>
                    {data.services.map((service, index) => (
                      <DropdownItem key={index}>
                        <Link to={`/dich-vu/${service.slug}`} style={linkStyle}>
                          {service.name}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </OffcanvasBody>
          </Offcanvas>

          {!is_open && (
            <Nav className="me-auto my-2 my-lg-0 mx-auto" navbar>
              <NavItem active={location.pathname === "/"}>
                <ReactstrapNavLink tag={Link} to="/" style={linkStyle}>
                  Trang chủ
                </ReactstrapNavLink>
              </NavItem>
              <NavItem active={location.pathname === "/gioi-thieu"}>
                <ReactstrapNavLink tag={Link} to="/gioi-thieu" style={linkStyle}>
                  Giới thiệu
                </ReactstrapNavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className={location.pathname.includes("/san-pham")}>
                  Sản phẩm
                </DropdownToggle>
                <DropdownMenu end>
                  {data.products.map((product, index) => (
                    <DropdownItem key={index}>
                      <Link to={`/san-pham/${product.slug}`} style={linkStyle}>
                        {product.name}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className={location.pathname.includes("/dich-vu")}>
                  Dịch vụ
                </DropdownToggle>
                <DropdownMenu end>
                  {data.services.map((service, index) => (
                    <DropdownItem key={index}>
                      <Link to={`/dich-vu/${service.slug}`} style={linkStyle}>
                        {service.name}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          )}

          <div className="d-none d-md-block col-3 text-end">
            Address: {data.address} <br />
            Phone: {data.phone}
          </div>
        </Navbar>
      </div>
    </React.Fragment>
  );
}