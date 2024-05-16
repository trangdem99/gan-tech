// Design by trangdem99

const setting = {
    name: "Công ty TNHH ABC",
    address: "123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh",
    logo: "./assets/images/logo.webp",
    phone: "0123 456 789",
    email: "abc@gmail.com",
    domain: "http://127.0.0.1:5500/",
    others: [
        "MST: 1234567890",
        "Giấy chứng nhận đăng ký kinh doanh số: 1234567890 do Sở Kế hoạch và Đầu tư TP.HCM cấp lần đầu ngày 01/01/2021"
    ]
}

const products = [
    {
        name: "Sản phẩm 1",
        link: "/san-pham/san-pham-1",
        image: "./assets/img/product-1.jpg",
    },
    {
        name: "Sản phẩm 2",
        link: "/san-pham/san-pham-2",
        image: "./assets/img/product-2.jpg",
    },
    {
        name: "Sản phẩm 3",
        link: "/san-pham/san-pham-3",
        image: "./assets/img/product-3.jpg",
    },
];

const services = [
    {
        name: "Dịch vụ 1",
        link: "/dich-vu/dich-vu-1",
        image: "./assets/img/service-1.jpg",
    },
    {
        name: "Dịch vụ 2",
        link: "/dich-vu/dich-vu-2",
        image: "./assets/img/service-2.jpg",
    },
    {
        name: "Dịch vụ 3",
        link: "/dich-vu/dich-vu-3",
        image: "./assets/img/service-3.jpg",
    },
];

(function($) {
    "use strict";

    // ______________ PAGE LOADING
    $(window).on("load", function(e) {
      $("#global-loader").delay(500).fadeOut(500);
      // $("#after-loader").delay(1000).fadeIn(500);
    })

    // ______________ BACK TO TOP BUTTON
    $(window).on("scroll", function(e) {
        if ($(this).scrollTop() > 0) {
            $("#back-to-top").fadeIn("slow");
        } else {
            $("#back-to-top").fadeOut("slow");
        }
    });
    $(document).on("click", "#back-to-top", function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        return false;
    });
    
    $(".dropdown-menu.product").each(function() {
        products.forEach(product => {
            $(this).append(`
                <li>
                    <a class="dropdown-item" href="${product.link}">${product.name ?? ""}</a>
                </li>
            `);
        });
    });
    
    
    $(".dropdown-menu.service").each(function() {
        services.forEach(service => {
            $(this).append(`
                <li>
                    <a class="dropdown-item" href="${service.link}">${service.name ?? ""}</a>
                </li>
            `);
        });
    });
})(jQuery);
