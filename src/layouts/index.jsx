import React from 'react';
import {
  Button
} from 'reactstrap';

import NavBar from './navbar';
import Footer from './footer';

export default function Layout(props) {
  React.useEffect(() => {
    const scrollToTopButton = document.querySelector(".scrollToTop");

    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    }

    scrollToTopButton.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    return () => {
      window.onscroll = null;

      scrollToTopButton.removeEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <div className="flex-grow-1">
          {props.children}</div>
        <Footer />

        <Button className="scrollToTop" title="Go to top">&#8593;</Button>
      </div>
    </React.Fragment>
  );
}