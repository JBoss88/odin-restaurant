export const renderHome = () => {
    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')
    const homeTitle = document.createElement('h2');
    homeTitle.classList.add('homeTitle');
    const openingText = document.createElement('p');
    openingText.classList.add('openingText');
    homeTitle.textContent = 'The Backyard Restaurant';
    openingText.textContent = 'Welcome to The Backyard Restaurant! We have some of the best food in the USA!';
    homeContent.append(homeTitle, openingText);
    content.append(homeContent);
}