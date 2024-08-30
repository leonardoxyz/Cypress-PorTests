const BasePage = require('../pages/base/BasePage');

class HomePage extends BasePage {
    validateHomeTitle(expectedText) {
        cy.get('h1.home__title.typing-animation', { timeout: 10000 }).should('include.text', expectedText);
    }

    navigateToProjects() {
        cy.get('a[href="#projects"]').first().scrollIntoView().click({force: true});
    }

    navigateToAbout() {
        cy.get('a[href="#about"]').first().scrollIntoView().click({force: true});
    }

    navigateToContact() {
        cy.get('a[href="#contact"]').first().scrollIntoView().click({force: true});
    }

    openMobileMenu() {
        cy.get('div.nav__toggle').click();
        cy.wait(1000);
        cy.get('#root > header > nav > div.nav__menu.show-menu > i').click();
    }
}

module.exports = HomePage;