export const renderHome = () => {
    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')

    const homeTitle = document.createElement('h2');
    homeTitle.classList.add('homeTitle');
    homeTitle.textContent = 'The Backyard Restaurant';

    const homeText1 = document.createElement('p');
    homeText1.classList.add('homeText1');
    homeText1.textContent = 'Welcome to The Backyard Restaurant!';

    const homeText2 = document.createElement('p');
    homeText2.classList.add('homeText2');
    homeText2.textContent = "We have some of the best food in the USA!";

    const homeAddress = document.createElement('p');
    homeAddress.classList.add('homeAddress');
    homeAddress.textContent = "Come join us at 602 Martini Street in Kansas City, Missouri.";

    const homeNumber = document.createElement('p');
    homeNumber.classList.add('homeNumber');
    homeNumber.textContent = "You can also call us at 123-456-789-10.";

    homeContent.append(homeTitle, homeText1, homeText2, homeAddress, homeNumber);
    content.append(homeContent);
}