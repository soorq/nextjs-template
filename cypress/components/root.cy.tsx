import RootPage from '../../app/page';

describe('<Page />', () => {
	it('should render and display expected content', () => {
		cy.mount(<RootPage />);

		// The new page should contain an h1 with "Home"
		cy.get('h1').contains('Home');

		// Validate that a link with the expected URL is present
		// Following the link is better suited to an E2E test
		cy.get('a[href="/about"]').should('be.visible');
	});
});
