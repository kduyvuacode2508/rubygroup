// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (slides.length > 0) {
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        showSlide(n);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        }
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        this.reset();
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .reason-card, .content-card, .product-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active Navigation
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath ||
        (currentPath.endsWith('/') && linkPath.endsWith('index.html')) ||
        (currentPath === '/' && linkPath.endsWith('index.html'))) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});



const arrSon = [
    {
        maSon: "RN1000",
        loaiSon: "Sơn Lót Khánh Kiềm Nội Thất Tiêu Chuẩn",
        hangSon: "NANO",
        image: "./anh/RN1000.jpg",
        moTa: "Loại sơn lót chuyên dụng giúp tăng độ bám dính giữa tường và lớp sơn phủ, ngăn kiềm hóa bề mặt xi măng, giảm tiêu hao sơn phủ và chống ố vàng hiệu quả. Phù hợp cho các công trình nội thất dân dụng và văn phòng."
    },
    {
        maSon: "RN1200",
        loaiSon: "Sơn Lót Khánh Kiềm Nội Thất Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN1200.jpg",
        moTa: "Sơn lót gốc nước cao cấp có khả năng kháng kiềm mạnh, tăng độ mịn và sáng cho lớp sơn phủ. Giúp tường bền màu lâu hơn, chống nấm mốc, bong tróc và ẩm mốc trong điều kiện khí hậu nóng ẩm."
    },
    {
        maSon: "RN1300",
        loaiSon: "Sơn Lót Khánh Kiềm Ngoại Thất Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN1300.jpg",
        moTa: "Sản phẩm chuyên dụng cho bề mặt tường ngoài trời, giúp chống thấm, chống rêu mốc và tăng độ bền màu cho lớp sơn phủ. Bám dính tốt trên bê tông, xi măng, thích hợp với mọi điều kiện thời tiết khắc nghiệt."
    },
    {
        maSon: "RN4000",
        loaiSon: "Sơn Chống Thấm Hệ Trộn Với Xi Măng",
        hangSon: "NANO",
        image: "./anh/RN4000.jpg",
        moTa: "Sơn chống thấm hai thành phần được pha trộn với xi măng tạo lớp màng bảo vệ chắc chắn, ngăn thấm nước từ ngoài vào tường. Thích hợp cho tầng hầm, sân thượng, phòng tắm, mái và các khu vực thường xuyên ẩm ướt."
    },
    {
        maSon: "RN2200",
        loaiSon: "Sơn Siêu Trắng Trần Nội Thất Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN2200.jpg",
        moTa: "Dòng sơn trần có độ trắng tinh khiết cao, giúp phản xạ ánh sáng tốt và tạo không gian sáng sủa, sang trọng. Sơn khô nhanh, không ố vàng, chống bám bụi và thi công dễ dàng trên bề mặt bê tông, trần thạch cao."
    },
    {
        maSon: "RN4100",
        loaiSon: "Sơn Chống Thấm Màu Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN4100.jpg",
        moTa: "Sơn tích hợp khả năng chống thấm và tạo màu, giúp tiết kiệm thời gian thi công. Có thể sơn trực tiếp lên tường ngoài trời, bảo vệ và làm đẹp công trình với độ bền màu vượt trội và khả năng kháng tia UV hiệu quả."
    },
    {
        maSon: "RN2000",
        loaiSon: "Sơn Mịn Nội Thất Tiêu Chuẩn",
        hangSon: "NANO",
        image: "./anh/RN2000.jpg",
        moTa: "Sơn phủ có độ mịn cao, bề mặt nhẵn, dễ lau chùi và có khả năng che phủ tốt. Phù hợp cho phòng khách, phòng ngủ, giúp không gian nội thất sang trọng và tươi sáng."
    },
    {
        maSon: "RN2400",
        loaiSon: "Sơn Bóng Nội Thất Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN2400.jpg",
        moTa: "Sơn có độ bóng hoàn hảo giúp phản xạ ánh sáng, tạo cảm giác rộng rãi và hiện đại cho không gian. Bề mặt chống bám bẩn, dễ lau chùi, thích hợp cho khu vực thường xuyên sử dụng như phòng khách, hành lang."
    },
    {
        maSon: "RN2500",
        loaiSon: "Sơn Siêu Bóng Nội Thất Men Đặc Biệt",
        hangSon: "NANO",
        image: "./anh/RN2500.jpg",
        moTa: "Sơn có lớp phủ bóng gương đặc biệt, chống bám bụi, dễ lau rửa và có khả năng phản chiếu ánh sáng tốt. Mang lại vẻ đẹp sang trọng, đẳng cấp cho không gian nội thất cao cấp."
    },
    {
        maSon: "RN3000",
        loaiSon: "Sơn Mịn Ngoại Thất Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN3000.png",
        moTa: "Sơn phủ ngoài trời có khả năng kháng kiềm, chống tia UV và chịu thời tiết khắc nghiệt. Màu sắc bền đẹp lâu dài, giúp bề mặt tường luôn tươi mới, sạch sẽ theo thời gian."
    },
    {
        maSon: "RN2100",
        loaiSon: "Sơn Mịn Nội Thất Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN2100.png",
        moTa: "Dòng sơn cao cấp có độ che phủ vượt trội, bề mặt mịn và mượt, dễ lau chùi, không chứa chì và thủy ngân. Giúp không gian sống an toàn, sạch đẹp và thân thiện môi trường."
    },
    {
        maSon: "RN3100",
        loaiSon: "Sơn Bóng Ngoại Thất Cao Cấp",
        hangSon: "NANO",
        image: "./anh/RN3100.png",
        moTa: "Sơn có khả năng chống bám bụi, kháng tia cực tím và chống bám rêu mốc hiệu quả. Bề mặt bóng đẹp, bền màu dưới ánh nắng và mưa gió, giúp công trình luôn mới và sang trọng."
    },
    {
        maSon: "RN3300",
        loaiSon: "Sơn Siêu Bóng Ngoại Thất Men Sứ Đặc Biệt",
        hangSon: "NANO",
        image: "./anh/RN3300.png",
        moTa: "Dòng sơn cao cấp nhất với độ bóng như men sứ, khả năng chống bám bụi, kháng tia UV và tự làm sạch khi gặp mưa. Bề mặt sáng mịn, giữ màu cực lâu, phù hợp cho các công trình sang trọng và cao cấp."
    },
    {
        maSon: "KR1000",
        loaiSon: "Sơn Lót Khánh Kiềm Nội Thất Tiêu Chuẩn",
        hangSon: "KING",
        image: "./anh/KR1000.png",
        moTa: "Loại sơn lót chuyên dụng giúp tăng độ bám dính giữa tường và lớp sơn phủ, ngăn kiềm hóa bề mặt xi măng, giảm tiêu hao sơn phủ và chống ố vàng hiệu quả. Phù hợp cho các công trình nội thất dân dụng và văn phòng."
    },
    {
        maSon: "KR1200",
        loaiSon: "Sơn Lót Khánh Kiềm Nội Thất Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR1200.png",
        moTa: "Sơn lót gốc nước cao cấp có khả năng kháng kiềm mạnh, tăng độ mịn và sáng cho lớp sơn phủ. Giúp tường bền màu lâu hơn, chống nấm mốc, bong tróc và ẩm mốc trong điều kiện khí hậu nóng ẩm."
    },
    {
        maSon: "KR1300",
        loaiSon: "Sơn Lót Khánh Kiềm Ngoại Thất Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR1300.png",
        moTa: "Sản phẩm chuyên dụng cho bề mặt tường ngoài trời, giúp chống thấm, chống rêu mốc và tăng độ bền màu cho lớp sơn phủ. Bám dính tốt trên bê tông, xi măng, thích hợp với mọi điều kiện thời tiết khắc nghiệt."
    },
    {
        maSon: "KR4000",
        loaiSon: "Sơn Chống Thấm Hệ Trộn Với Xi Măng",
        hangSon: "KING",
        image: "./anh/KR4000.png",
        moTa: "Sơn chống thấm hai thành phần được pha trộn với xi măng tạo lớp màng bảo vệ chắc chắn, ngăn thấm nước từ ngoài vào tường. Thích hợp cho tầng hầm, sân thượng, phòng tắm, mái và các khu vực thường xuyên ẩm ướt."
    },
    {
        maSon: "KR2200",
        loaiSon: "Sơn Siêu Trắng Trần Nội Thất Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR2200.png",
        moTa: "Dòng sơn trần có độ trắng tinh khiết cao, giúp phản xạ ánh sáng tốt và tạo không gian sáng sủa, sang trọng. Sơn khô nhanh, không ố vàng, chống bám bụi và thi công dễ dàng trên bề mặt bê tông, trần thạch cao."
    },
    {
        maSon: "KR4100",
        loaiSon: "Sơn Chống Thấm Màu Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR4100.png",
        moTa: "Sơn tích hợp khả năng chống thấm và tạo màu, giúp tiết kiệm thời gian thi công. Có thể sơn trực tiếp lên tường ngoài trời, bảo vệ và làm đẹp công trình với độ bền màu vượt trội và khả năng kháng tia UV hiệu quả."
    },
    {
        maSon: "KR2000",
        loaiSon: "Sơn Mịn Nội Thất Tiêu Chuẩn",
        hangSon: "KING",
        image: "./anh/KR2000.png",
        moTa: "Sơn phủ có độ mịn cao, bề mặt nhẵn, dễ lau chùi và có khả năng che phủ tốt. Phù hợp cho phòng khách, phòng ngủ, giúp không gian nội thất sang trọng và tươi sáng."
    },
    {
        maSon: "KR2400",
        loaiSon: "Sơn Bóng Nội Thất Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR2400.png",
        moTa: "Sơn có độ bóng hoàn hảo giúp phản xạ ánh sáng, tạo cảm giác rộng rãi và hiện đại cho không gian. Bề mặt chống bám bẩn, dễ lau chùi, thích hợp cho khu vực thường xuyên sử dụng như phòng khách, hành lang."
    },
    {
        maSon: "KR2500",
        loaiSon: "Sơn Siêu Bóng Nội Thất Men Đặc Biệt",
        hangSon: "KING",
        image: "./anh/KR2500.png",
        moTa: "Sơn có lớp phủ bóng gương đặc biệt, chống bám bụi, dễ lau rửa và có khả năng phản chiếu ánh sáng tốt. Mang lại vẻ đẹp sang trọng, đẳng cấp cho không gian nội thất cao cấp."
    },
    {
        maSon: "KR3000",
        loaiSon: "Sơn Mịn Ngoại Thất Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR3000.png",
        moTa: "Sơn phủ ngoài trời có khả năng kháng kiềm, chống tia UV và chịu thời tiết khắc nghiệt. Màu sắc bền đẹp lâu dài, giúp bề mặt tường luôn tươi mới, sạch sẽ theo thời gian."
    },
    {
        maSon: "KR2100",
        loaiSon: "Sơn Mịn Nội Thất Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR2100.png",
        moTa: "Dòng sơn cao cấp có độ che phủ vượt trội, bề mặt mịn và mượt, dễ lau chùi, không chứa chì và thủy ngân. Giúp không gian sống an toàn, sạch đẹp và thân thiện môi trường."
    },
    {
        maSon: "KR3200",
        loaiSon: "Sơn Bóng Ngoại Thất Cao Cấp",
        hangSon: "KING",
        image: "./anh/KR3200.png",
        moTa: "Sơn có khả năng chống bám bụi, kháng tia cực tím và chống bám rêu mốc hiệu quả. Bề mặt bóng đẹp, bền màu dưới ánh nắng và mưa gió, giúp công trình luôn mới và sang trọng."
    },
    {
        maSon: "KR3300",
        loaiSon: "Sơn Siêu Bóng Ngoại Thất Men Sứ Đặc Biệt",
        hangSon: "KING",
        image: "./anh/KR3300.png",
        moTa: "Dòng sơn cao cấp nhất với độ bóng như men sứ, khả năng chống bám bụi, kháng tia UV và tự làm sạch khi gặp mưa. Bề mặt sáng mịn, giữ màu cực lâu, phù hợp cho các công trình sang trọng và cao cấp."
    },
    {
        maSon: "QR101",
        loaiSon: "Sơn Lót Khánh Kiềm Nội Thất Tiêu Chuẩn",
        hangSon: "QUEENS",
        image: "./anh/QR101.png",
        moTa: "Loại sơn lót chuyên dụng giúp tăng độ bám dính giữa tường và lớp sơn phủ, ngăn kiềm hóa bề mặt xi măng, giảm tiêu hao sơn phủ và chống ố vàng hiệu quả. Phù hợp cho các công trình nội thất dân dụng và văn phòng."
    },
    {
        maSon: "QR102",
        loaiSon: "Sơn Lót Khánh Kiềm Nội Thất Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR102.png",
        moTa: "Sơn lót gốc nước cao cấp có khả năng kháng kiềm mạnh, tăng độ mịn và sáng cho lớp sơn phủ. Giúp tường bền màu lâu hơn, chống nấm mốc, bong tróc và ẩm mốc trong điều kiện khí hậu nóng ẩm."
    },
    {
        maSon: "QR103",
        loaiSon: "Sơn Lót Khánh Kiềm Ngoại Thất Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR103.png",
        moTa: "Sản phẩm chuyên dụng cho bề mặt tường ngoài trời, giúp chống thấm, chống rêu mốc và tăng độ bền màu cho lớp sơn phủ. Bám dính tốt trên bê tông, xi măng, thích hợp với mọi điều kiện thời tiết khắc nghiệt."
    },
    {
        maSon: "QR400",
        loaiSon: "Sơn Chống Thấm Hệ Trộn Với Xi Măng",
        hangSon: "QUEENS",
        image: "./anh/QR400.png",
        moTa: "Sơn chống thấm hai thành phần được pha trộn với xi măng tạo lớp màng bảo vệ chắc chắn, ngăn thấm nước từ ngoài vào tường. Thích hợp cho tầng hầm, sân thượng, phòng tắm, mái và các khu vực thường xuyên ẩm ướt."
    },
    {
        maSon: "QR202",
        loaiSon: "Sơn Siêu Trắng Trần Nội Thất Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR202.png",
        moTa: "Dòng sơn trần có độ trắng tinh khiết cao, giúp phản xạ ánh sáng tốt và tạo không gian sáng sủa, sang trọng. Sơn khô nhanh, không ố vàng, chống bám bụi và thi công dễ dàng trên bề mặt bê tông, trần thạch cao."
    },
    {
        maSon: "QR402",
        loaiSon: "Sơn Chống Thấm Màu Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR402.png",
        moTa: "Sơn tích hợp khả năng chống thấm và tạo màu, giúp tiết kiệm thời gian thi công. Có thể sơn trực tiếp lên tường ngoài trời, bảo vệ và làm đẹp công trình với độ bền màu vượt trội và khả năng kháng tia UV hiệu quả."
    },
    {
        maSon: "QR200",
        loaiSon: "Sơn Mịn Nội Thất Tiêu Chuẩn",
        hangSon: "QUEENS",
        image: "./anh/QR200.png",
        moTa: "Sơn phủ có độ mịn cao, bề mặt nhẵn, dễ lau chùi và có khả năng che phủ tốt. Phù hợp cho phòng khách, phòng ngủ, giúp không gian nội thất sang trọng và tươi sáng."
    },
    {
        maSon: "QR204",
        loaiSon: "Sơn Bóng Nội Thất Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR204.png",
        moTa: "Sơn có độ bóng hoàn hảo giúp phản xạ ánh sáng, tạo cảm giác rộng rãi và hiện đại cho không gian. Bề mặt chống bám bẩn, dễ lau chùi, thích hợp cho khu vực thường xuyên sử dụng như phòng khách, hành lang."
    },
    {
        maSon: "QR205",
        loaiSon: "Sơn Siêu Bóng Nội Thất Men Đặc Biệt",
        hangSon: "QUEENS",
        image: "./anh/QR205.png",
        moTa: "Sơn có lớp phủ bóng gương đặc biệt, chống bám bụi, dễ lau rửa và có khả năng phản chiếu ánh sáng tốt. Mang lại vẻ đẹp sang trọng, đẳng cấp cho không gian nội thất cao cấp."
    },
    {
        maSon: "QR301",
        loaiSon: "Sơn Mịn Ngoại Thất Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR301.png",
        moTa: "Sơn phủ ngoài trời có khả năng kháng kiềm, chống tia UV và chịu thời tiết khắc nghiệt. Màu sắc bền đẹp lâu dài, giúp bề mặt tường luôn tươi mới, sạch sẽ theo thời gian."
    },
    {
        maSon: "QR201",
        loaiSon: "Sơn Mịn Nội Thất Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR201.png",
        moTa: "Dòng sơn cao cấp có độ che phủ vượt trội, bề mặt mịn và mượt, dễ lau chùi, không chứa chì và thủy ngân. Giúp không gian sống an toàn, sạch đẹp và thân thiện môi trường."
    },
    {
        maSon: "QR301",
        loaiSon: "Sơn Bóng Ngoại Thất Cao Cấp",
        hangSon: "QUEENS",
        image: "./anh/QR302.png",
        moTa: "Sơn có khả năng chống bám bụi, kháng tia cực tím và chống bám rêu mốc hiệu quả. Bề mặt bóng đẹp, bền màu dưới ánh nắng và mưa gió, giúp công trình luôn mới và sang trọng."
    },
    {
        maSon: "QR303",
        loaiSon: "Sơn Siêu Bóng Ngoại Thất Men Sứ Đặc Biệt",
        hangSon: "QUEENS",
        image: "./anh/QR303.png",
        moTa: "Dòng sơn cao cấp nhất với độ bóng như men sứ, khả năng chống bám bụi, kháng tia UV và tự làm sạch khi gặp mưa. Bề mặt sáng mịn, giữ màu cực lâu, phù hợp cho các công trình sang trọng và cao cấp."
    }
];

let currentFilter = 'all';
let currentSearch = '';

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');

    let filtered = arrSon;

    // Apply filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(son =>
            son.loaiSon.toLowerCase().includes(currentFilter.toLowerCase())
        );
    }

    // Apply search
    if (currentSearch) {
        filtered = filtered.filter(son =>
            son.loaiSon.toLowerCase().includes(currentSearch.toLowerCase()) ||
            son.maSon.toLowerCase().includes(currentSearch.toLowerCase()) ||
            son.moTa.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    grid.innerHTML = filtered.map(son => `
        <div class="product-card" onclick="openModal('${son.maSon}')">
            <div class="product-image">
                <img src="${son.image}" alt="${son.loaiSon}" onerror="this.src='https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600'">
                <span class="product-code">${son.maSon}</span>
            </div>
            <div class="product-info">
                <span class="product-brand">${son.hangSon}</span>
                <h3 class="product-name">${son.loaiSon}</h3>
                <p class="product-description">${son.moTa}</p>
                <div class="product-actions">
                    <button class="btn-view">
                        <i class="fas fa-eye"></i> Xem Chi Tiết
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderProducts();
    });
});

// Search
document.getElementById('searchInput').addEventListener('input', function(e) {
    currentSearch = e.target.value;
    renderProducts();
});

// Modal
function openModal(maSon) {
    const product = arrSon.find(son => son.maSon === maSon);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.loaiSon}" onerror="this.src='https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600'">
        </div>
        <div class="modal-details">
            <h2>${product.loaiSon}</h2>
            <div class="modal-info">
                <div class="modal-info-item">
                    <span class="modal-info-label">Mã sản phẩm:</span>
                    <span class="modal-info-value">${product.maSon}</span>
                </div>
                <div class="modal-info-item">
                    <span class="modal-info-label">Thương hiệu:</span>
                    <span class="modal-info-value">${product.hangSon}</span>
                </div>
            </div>
            <div class="modal-description">
                <h3 style="margin-bottom: 15px; color: var(--primary-color);">Mô tả sản phẩm</h3>
                <p>${product.moTa}</p>
            </div>
            <div class="modal-cta">
                <button class="btn-contact" onclick="window.location.href='contact.html'">
                    <i class="fas fa-phone"></i> Liên Hệ Báo Giá
                </button>
                <button class="btn-contact" onclick="window.open('https://zalo.me/0977912846', '_blank')">
                    <i class="fas fa-comment-dots"></i> Chat Zalo
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initial render
renderProducts();


  document.getElementById("viewProductsBtn").addEventListener("click", function() {
    const productSection = document.getElementById("products");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Không tìm thấy danh sách sản phẩm!");
    }
  });









  