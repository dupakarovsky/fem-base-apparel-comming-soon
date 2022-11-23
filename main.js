import "./style.scss";
import logo from "./images/logo.svg";
import err from "./images/icon-error.svg";
import arr from "./images/icon-arrow.svg";
import chk from "./images/icon-check.svg";
import hrDs from "./images/hero-desktop.jpg";
import hrMb from "./images/hero-mobile.jpg";

document.querySelector("#app").innerHTML = `
         <header class="hero">
            <!-- Logo  -->
            <div class="hero__logo">
               <img src="${logo}" alt="Base Apparel Logo" />
            </div>
            <!-- Left Col  -->
            <div class="hero__content">
               <div class="hero__content--text">
                  <h1 class="heading-1">
                     <span> We're </span>
                     <span> coming </span>
                     <span>soon</span>
                  </h1>

                  <p class="text">
                     Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay
                     up-to-date with announcements and our launch deals.
                  </p>

                  <form class="form" action="#" novalidate>
                     <input id="email" type="email" name="email" placeholder="Email Address" />
                     <label id="label" for="email">Please enter a valid email</label>
                     <button class="btn"><img src="${arr}" alt="arrow" /></button>
                     <img
                        id="icon-error"
                        class="icon-error"
                        src="${err}"
                        alt="Icon Error"
                        aria-hidden="true"
                     /> 
                     <img
                        id="icon-check"
                        class="icon-check"
                        src="${chk}"
                        alt="Icon Check"
                        aria-hidden="true"
                     />

                  </form>
               </div>
            </div>
            <!-- Right Col  -->
            <div class="hero__splash">
               <picture>
                  <source srcset="${hrDs}" media="(min-width:376px)" />
                  <source srcset="${hrMb}" media="(max-width:375px)" />
                  <img class="splash" src="${hrDs}" alt="Hero Image" />
               </picture>
            </div>
         </header>
`;
// /////////////////////////////////////////////////////////////////

(function () {
   const form = document.querySelector("form");
   const email = document.getElementById("email");
   const message = document.getElementById("label");
   const errorIcon = document.getElementById("icon-error");
   const checkIcon = document.getElementById("icon-check");
   let valid = false;

   const resetIcon = ({ icon }) => {
      icon.removeAttribute("style");
   };
   const resetMessage = () => {
      message.removeAttribute("style");
   };
   const displayIcon = ({ icon }) => {
      icon.style.setProperty("transform", "translateY(-50%) scale(1)");
   };
   const displayMessage = () => {
      message.style.setProperty("visibility", "visible");
      message.style.setProperty("opacity", "1");
   };

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      valid = [".", "@"].every((char) => email.value.includes(char));

      if (!valid || email.value.length < 5) {
         displayMessage();
         displayIcon({ icon: errorIcon });
         return;
      }
      displayIcon({ icon: checkIcon });
   });
   email.addEventListener("input", (e) => {
      if (!valid) {
         resetMessage();
         resetIcon({ icon: errorIcon });
         return;
      }
      resetIcon({ icon: checkIcon });
   });
})();
