describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:3000')
        expect(browser).toHaveTitle('React App');
    })
})