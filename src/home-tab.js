const homeContent = document.createElement('div');
homeContent.classList.add('homeContent')
const homeTitle = document.createElement('h2');
const openingText = document.createElement('p');
homeTitle.textContent = 'The Backyard Restaurant';
openingText.textContent = 'Welcome to The Backyard Restaurant! We have some of the best food in the USA!';

export {homeContent, homeTitle, openingText};