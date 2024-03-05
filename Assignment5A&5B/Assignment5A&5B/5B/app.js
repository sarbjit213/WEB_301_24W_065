document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Validation using Validate.js
    const userFormConstraints = {
        email: {
            email: true,
        },
        phone: {
            format: {
                pattern: '[0-9]{10}',
            },
        },
        zip: {
            format: {
                pattern: '[0-9]{5}',
            },
        },
    };
    const paymentFormConstraints = {
        creditCard: {
            format: {
                pattern: '[0-9]{10}',
            },
        },
        expirationDate: {
            date: {
                format: 'MM/YYYY',
            },
        },
        cvv: {
            format: {
                pattern: '[0-9]{3}',
            },
        },
    };

    document.getElementById('userForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const userFormData = validate.collectFormValues(this);
        const userFormErrors = validate(userFormData, userFormConstraints);
        if (userFormErrors) {
            // Handle errors (display messages, etc.)
            console.log(userFormErrors);
        } else {
            // Move to the next slide
            swiper.slideNext();
        }
    });

    document.getElementById('userForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const userFormData = validate.collectFormValues(this);
        const userFormErrors = validate(userFormData, userFormConstraints);
        if (userFormErrors) {
            // Handle errors (display messages, etc.)
            console.log(userFormErrors);
        } else {
            // Move to the next slide
            swiper.slideNext();
        }
    });

    document.getElementById('paymentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const paymentFormData = validate.collectFormValues(this);
        const paymentFormErrors = validate(paymentFormData, paymentFormConstraints);
        if (paymentFormErrors) {
            // Handle errors (display messages, etc.)
            console.log(paymentFormErrors);
        } else {
            // Handle successful form submission
            console.log('Form submitted successfully!');
        }
   });
});
