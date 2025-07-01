       // Mobile Navigation Toggle
        const navToggle = document.getElementById('navToggle');
        const nav = document.getElementById('nav');
        
        navToggle.addEventListener('click', () => {
            nav.querySelector('ul').classList.toggle('active');
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Close mobile menu if open
                nav.querySelector('ul').classList.remove('active');
                
                // Update active link
                document.querySelectorAll('nav ul li a').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
                
                // Smooth scroll to section
                if(this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header Scroll Effect
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
        
        // Set initial header state
        if(window.scrollY > 100) {
            header.classList.add('header-scrolled');
        }
        
        // Testimonial Slider
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.slider-dot');
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentTestimonial = index;
        }
        
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                showTestimonial(parseInt(this.getAttribute('data-index')));
            });
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            let nextIndex = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(nextIndex);
        }, 5000);
        
        // Form Submission
        const reservationForm = document.getElementById('reservationForm');
        
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation would go here
            const name = document.getElementById('name').value;
            
            // Simulate form submission
            alert(`Thank you, ${name}! Your reservation request has been received. We will contact you shortly to confirm.`);
            
            // Reset form
            this.reset();
        });
