class BasePage {
    validateFooterTitle(expectedText) {
        cy.get('h1.footer__title', { timeout: 10000 }).should('include.text', expectedText);
    }

    scrollToTop() {
        cy.get('a.scrollup').click({ force: true });
    }

    validateExternalLink() {
        cy.get('a[href="https://github.com/Leonardoxyz"]').click({ multiple: true });
    }
}

module.exports = BasePage;