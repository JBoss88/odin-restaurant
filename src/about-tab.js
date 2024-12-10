export const renderAbout = () => {
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('aboutTitle');
    aboutTitle.textContent = 'About';

    const owner = document.createElement('li');
    owner.classList.add('owner');
    owner.textContent = 'Owner - Jackson Boss';

    const established = document.createElement('li');
    established.textContent = 'Established - February 2, 1899';
    established.classList.add('established');

    const faq = document.createElement('li');
    
    const faqLink = document.createElement('a');
    faq.classList.add('faqLink')
    faqLink.href = 'https://www.espn.com/';
    faqLink.target = '__blank';
    faqLink.textContent = "FAQ's";
    faq.append(faqLink);
    aboutContent.append(aboutTitle, owner, established, faq);
    content.append(aboutContent);
}
