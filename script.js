// (function($) {
//     $.fn.countdown = function(options, callback) {
        
//         thisEl = this;

        
//         let settings = {
//             'date': null,
//             'format': null
//         };

        
//         if (options) {
//             $.extend(settings, options);
//         }

        
//         function countdown_proc() {
//             let eventDate = Date.parse(settings.date) / 1000;
//             let currentDate = Math.floor($.now() / 1000);

//             if (eventDate <= currentDate) {
//                 callback.call(this);
//                 clearInterval(interval);
//             }

//             let seconds = eventDate - currentDate;

//             let days = Math.floor(seconds / (60 * 60 * 24));
            

//             seconds -= days * 60 * 60 * 24;
            

//             let hours = Math.floor(seconds / (60 * 60));
//             seconds -= hours * 60 * 60;
            

//             let minutes = Math.floor(seconds / 60);
//             seconds -= minutes * 60;
            

            
//             if (days == 1) { thisEl.find(".timeRefDays").innerText = "day"; } else { thisEl.find(".timeRefDays").innerText = "days"; }
//             if (hours == 1) { thisEl.find(".timeRefHours").innerText = "hour"; } else { thisEl.find(".timeRefHours").innerText = "hours"; }
//             if (minutes == 1) { thisEl.find(".timeRefMinutes").innerText = "minute"; } else { thisEl.find(".timeRefMinutes").innerText = "minutes"; }
//             if (seconds == 1) { thisEl.find(".timeRefSeconds").innerText = "second"; } else { thisEl.find(".timeRefSeconds").innerText = "seconds"; }

            
//             if (settings.format == "on") {
//                 days = (String(days).length >= 2) ? days : "0" + days;
//                 hours = (String(hours).length >= 2) ? hours : "0" + hours;
//                 minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
//                 seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
//             }

            
//             thisEl.find(".days").innerText = days;
//             thisEl.find(".hours").innerText = hours;
//             thisEl.find(".minutes").innerText = minutes;
//             thisEl.find(".seconds").innerText = seconds;
//         }

        
//         countdown_proc();

        
//         interval = setInterval(countdown_proc, 1000);
//     };

// })(jQuery);




// document.getElementById("countdown").countdown({
        
//         date: "1 January 2022 12:00:00",

        
//         format: "on"
//     },

//     function() {
        
        
//     });


// function setHeights() {
//     let windowHeight = window.innerHeight;
//     document.getElementsByClassName("slide")[0].style.height = windowHeight;
// }

// setHeights();

// window.resize(function() {
//     setHeights();
// });

function addSticky() {
    document.getElementByClassName("slide").each(function() {
        let scrollerAnchor = this.offset().top;
        if (window.scrollY >= scrollerAnchor) {
            this.classList.add("fix-it");
        } else {
            this.classList.remove("fix-it");
        }
    });
}

window.scroll(function() {
    addSticky();
});


function countdown() {
    const countToDate = new Date("2023-11-30").getTime(); // Replace YYYY-MM-DD with your target date
    const now = new Date().getTime();
    const difference = countToDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    document.getElementById('days').innerText = timeDays;
    document.getElementById('hours').innerText = timeHours;
    document.getElementById('minutes').innerText = timeMinutes;
    document.getElementById('seconds').innerText = timeSeconds;

    if (difference < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerText = "We are live!";
    }
}

setInterval(countdown, 1000);