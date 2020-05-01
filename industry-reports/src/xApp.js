//  Ignore this:    It's simply pre-work on making the homePage (App.js) transition smoothly btw sections

//  It may link to every other thing but Nothing links to it or calls it.

//    I'm exploring multiple methods....  reading up on it too.


// jQuery Smooth Scroll Script  

$('.navbar a').on('click', function(e){
    if (this.hash !==''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top
            },
            800
        };
    }
});



// GtiHub: Smooth Scroll Script