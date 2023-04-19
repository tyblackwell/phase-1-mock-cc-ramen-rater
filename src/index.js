// write your code here
//When the page loads,
document.addEventListener("DOMContentLoaded", function() {
    const ramenMenu = document.querySelector("#ramen-menu")
    const ramenDetail = document.querySelector("#ramen-detail")
    const newRamenForm = document.querySelector("#new-ramen")
    const ratingInput = document.querySelector("#rating-display")
    const commentInput = document.querySelector("#comment-display")
    const ramenImage = document.querySelector("#ramen-detail > img")
    const ramenName = document.querySelector("#ramen-detail > h2")
    const ramenRestaurant = document.querySelector("#ramen-detail > h3")
    let ratingForm = document.querySelector("#new-ramen")
    const newRamenName = document.querySelector("#new-name")
    const newRamenRestaurant = document.querySelector("#new-restaurant")
    const newRamenImage = document.querySelector("#new-image")
    const newRatingInput = document.querySelector("#new-rating")
    const newCommentInput = document.querySelector("#new-comment")

    const createRamenImg = (ramen) => {
        const ramenImg = document.createElement("img")
        ramenImg.src = ramen.image
        ramenImg.addEventListener("click", () => {
            displayRamenDetail(ramen);
        });
        return ramenImg;
    };

    const displayRamenMenu = (ramens) => {
        ramens.forEach(ramen => {
            ramenMenu.append(createRamenImg(ramen));
        });
    };

    fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then(ramens => {
            displayRamenMenu(ramens);               
    });

    const displayRamenDetail = (ramen) => {
        ramenImage.src = ramen.image;
        ramenName.textContent = ramen.name;
        ramenRestaurant.textContent = ramen.restaurant;
        ratingInput.textContent = ramen.rating;
        commentInput.textContent = ramen.comment;
    };

    ratingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const rating = ratingInput.value;
    });

    const commentForm = document.querySelector("#comment-form");
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const comment = commentInput.value;
    });

    const formSubmit = (event) => {
        event.preventDefault();
        const newRamen = {
            name: newRamenName.textContent,
            restaurant: newRamenRestaurant.textContent,
            image: newRamenImage.src,
            rating: newRatingInput.textContent,
            comment: newCommentInput.textContent      
        };

        ramenMenu.append(createRamenImg(newRamen));
        displayRamenDetail(newRamen);
        newRamenForm.reset();
    };

    newRamenForm.addEventListener("submit", formSubmit);
});

// - See all ramen images in the `div` 
//with the id of `ramen-menu`. 
// request the data from the server to get all the ramen objects. 
//Then, display the image for each of the ramen using an `img` tag inside the
// `#ramen-menu` div.

// - Click on an image from the `#ramen-menu` div 
//and see all the info about that ramen 
//displayed inside the `#ramen-detail` div and 
//where it says `insert comment here` and `insert rating here`.

// - Create a new ramen after submitting the `new-ramen` form. 
//The new ramen should be added to the`#ramen-menu` div. 
//The new ramen does not need to persist; 