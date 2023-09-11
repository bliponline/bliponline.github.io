const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('welcomeword1show')
        } 
    });
});

const welcomeword1Elements = document.querySelectorAll('.welcomeword1');
welcomeword1Elements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('welcomeword2show')
        }
    });
});

const welcomeword2Elements = document.querySelectorAll('.welcomeword2');
welcomeword2Elements.forEach((el) => observer2.observe(el))

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('welcomeword3show')
        }
    });
});

const welcomeword3Elements = document.querySelectorAll('.welcomeword3');
welcomeword3Elements.forEach((el) => observer3.observe(el))

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('welcomepshow')
        }
    });
});

const welcomepElements = document.querySelectorAll('.welcomep');
welcomepElements.forEach((el) => observer4.observe(el))
