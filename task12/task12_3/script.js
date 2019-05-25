var StarRating = (function () {
    function StarRating(target) {
        function attr(name, d) {
            var a = target.getAttribute(name);
            return (a ? a : d);
        }

        var max = 5,
            currentRating = -1,
            stars = [];

        target.style.display = 'inline-block';

        for (let i = 0; i < max; i++) {
            var star_item = document.createElement('span');
            star_item.className = 'star';
            star_item.addEventListener('click', starClick);
            if (i > 0)
                stars[i - 1].appendChild(star_item);
            else
                target.appendChild(star_item);

            stars.push(star_item);
        }


        function setCurrentRating(rating) {
            currentRating = rating;
            target.setAttribute('data-rating', currentRating);
            showCurrentRating();
        }
        this.setCurrentRating = setCurrentRating;

        target.addEventListener('mouseout', function () {
            showCurrentRating();
        });

        target.addEventListener('mouseover', function () {
           clearRating();
        });


        function showRating(cur_rat) {
            for (let i = 0; i < stars.length; i++) {
                if (i >= cur_rat)
                    break;
                if (i !== cur_rat)
                stars[i].classList.add('active');
            }
        }

        function showCurrentRating() {
            var currentRating = parseInt(attr('data-rating', 0));
                showRating(currentRating);
        }


        function clearRating() {
            for (let i = 0; i < stars.length; i++) {
                stars[i].classList.remove('active');
            }
        }

        function starClick(e) {

            if (this === e.target) {
                var starClicked = stars.indexOf(e.target);
                if (starClicked !== -1) {
                    var star_rating = starClicked + 1;
                    setCurrentRating(star_rating);
                    var myEvent = new CustomEvent('rate', {
                        detail: star_rating,
                    });
                    target.dispatchEvent(myEvent);
                }
            }
        }
    }

    return StarRating;
})();
