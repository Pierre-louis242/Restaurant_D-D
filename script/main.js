window.onload = () => {

    $(window).on('load', function() {
        $("#cover").fadeOut(350);
    });
    
    function newW() {
        $(window).load();
    }
    setTimeout(newW, 2000);
    
    showText = () => {
        let divLoading = document.querySelector('#coverText');
        divLoading.style.color = "#F4A940";
    }
    setTimeout(showText, 200);

    hiddeText = () => {
        let divLoading = document.querySelector('#coverText');
        divLoading.style.color = "black";
    }
    setTimeout(hiddeText, 1000);


    goToBookTable = () => {
        const bookTable = document.querySelector('.descriptionForTheMap');
        if(bookTable){
            const top = bookTable.offsetTop
            if(top > window.innerWidth){
                window.scrollTo({
                    behavior: 'smooth',
                    top, 
                })
            }
        }
    }

    let bookTableRest = document.querySelector('.buttonToReserve');
    bookTableRest.addEventListener('click', goToBookTable);



    goToOurFoodAndWine = () => {
        const foodAndWine = document.querySelector('.descriptionForFoodAndWine');
        if(foodAndWine){
            const top = foodAndWine.offsetTop
            if(top > window.innerWidth){
                window.scrollTo({
                    behavior: 'smooth',
                    top, 
                })
            }
        }
    }

    let foodAndWines = document.querySelector('.buttonToSeeFood');
    foodAndWines.addEventListener('click', goToOurFoodAndWine);



    goToOurStory = () => {
        const ourStory = document.querySelector('.descriptionStoryRestau');
        const top = ourStory.offsetTop
        window.scrollTo({
            behavior: 'smooth',
            top, 
        })
    }

    let arrowStory = document.querySelector('.fa-chevron-down');
    arrowStory.addEventListener('click', goToOurStory);


    redirectFacebook = () => {
        window.open('https://fr-fr.facebook.com/DollyDomibzv/?ref=page_internal', '_blank');
    }

    let faceButton = document.querySelector('.fa-facebook');
    faceButton.addEventListener('click', redirectFacebook);

    redirectInsta = () => {
        window.open('https://instagram.com/dom_et_dolly?igshid=1ansll6dv065p', '_blank');
    }

    let instaButton = document.querySelector('.fa-instagram');
    instaButton.addEventListener('click', redirectInsta);

    redirectTwitter = () => {
        window.open('https://twitter.com/DD25353383', '_blank');
    }

    let twitterButton = document.querySelector('.fa-twitter');
    twitterButton.addEventListener('click', redirectTwitter);
    
    callUs = () => {
        window.open('tel:+242066691688');
    }

    let phoneNumber = document.querySelector('#phoneNumber');
    phoneNumber.addEventListener('click', callUs);

    joinUs = () => {
        window.open('https://www.google.com/maps/search/Immeuble+Bollor%C3%A9,+Avenue+Amilcar+Cabral,+Brazzaville,+RC/@-4.273635, 15.286967/data=!3m1!4b1?hl=fr', '_blank');
    }

    let mapIndic = document.querySelector('#contactDetailsMap');
    mapIndic.addEventListener('click', joinUs);
    let mapAddress = document.querySelector('#contactDetailsMap2')
    mapAddress.addEventListener('click', joinUs);


}