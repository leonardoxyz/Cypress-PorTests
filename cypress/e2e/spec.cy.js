const HomePage = require('./pages/HomePage');

describe('Home Page Tests', () => {
    const homePage = new HomePage();
    const url = 'https://leonardo.vercel.app';

    beforeEach(() => {
        cy.visit(url);
    });

    it('should validate home page and footer title', () => {
        const footerTitle = 'Leonardo Santos';
        const homeTitle = 'Léo Santos';
        homePage.validateFooterTitle(footerTitle);
        homePage.validateHomeTitle(homeTitle);
    });

    it('should navigate to the projects section and validate content', () => {
        const projectTitle = 'My Projects';
        const footerTitle = 'Leonardo Santos';
        homePage.navigateToProjects();
        cy.get('h2.section__title').should('include.text', projectTitle);
        homePage.validateFooterTitle(footerTitle);
    });

    it('should navigate to the about section and validate content', () => {
        const aboutTitle = 'About Me';
        const aboutDescription = 'I delved into the world of programming in 2017 without much knowledge but with a huge desire to learn. I used Java Decompiler to find out what each feature of that plugin was made of.';
        const modalDescription1 = 'Today I study Systems Analysis and Developer at Fatec - Taquaritinga. A place where I acquired diverse knowledge on various subjects with teachers dedicated to teaching. I have always been fascinated by drawings and their designs, I like their colors and shapes. I believe that this was the initiative for liking Front-end so much.';
        const modalDescription2 = "All the projects developed by me are listed in this portfolio and they won't be the only ones! In addition to developing these projects, I also like to assemble your Design before programming using Figma. I'm still learning to use its various functions, but I can say that I'm aware of most of it.";
        homePage.navigateToAbout();
        cy.get('h2.section__title').should('include.text', aboutTitle);
        cy.get('p.about__description').should('include.text', aboutDescription);
        cy.contains('span', 'Ler mais').should('be.visible').click({ force: true });
        cy.get('p.about__modal-description').should('include.text', modalDescription1);
        cy.get('p.about__modal-description').should('include.text', modalDescription2);
        cy.get('button.services__button-repository').should('be.visible').click({ force: true });
    });

    it('should navigate to the contact section and validate footer title', () => {
        const footerTitle = 'Leonardo Santos';
        homePage.navigateToContact();
        homePage.validateFooterTitle(footerTitle);
    });

    it('should validate external links', () => {
        homePage.validateExternalLink();
    });

    it('should scroll to the top using the scrollup button', () => {
        homePage.scrollToTop();
    });

    it('should validate the mobile menu', () => {
        cy.viewport('iphone-6');
        homePage.openMobileMenu();
    });

    it('should navigate to sections and validate content in mobile view', () => {
        const sections = ['projects', 'about', 'contact'];
        sections.forEach(section => {
            cy.viewport('iphone-6');
            homePage[`navigateTo${section.charAt(0).toUpperCase() + section.slice(1)}`]();
            cy.get('h2.section__title').should('be.visible');
        });
    });

    it('should open modal to see header options', () => {
        cy.viewport('iphone-6');
        homePage.openMobileMenu();
    });

    it('should transform viewport to ipad', () => {
        cy.viewport('macbook-16');
    })
});