import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollHandler();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentViewport);
  }
  scrollToHireMe = () => {
    let homeScreen = document.getElementById("Contact Me");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let contactMeScreen = document.getElementById("Home");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  }
  checkCurrentScreenUnderViewport = (event) =>{
      if(!event || object.keys(event).length < 1) return; 
      for(let screen of TOTAL_SCREENS){
          let screenFromDOM = document.getElementById(screen.screen_name);
          if(!screenFromDOM) continue;

          let fullyVisible = this.isElementInView(screenFromDOM, "complete");
          let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

          if(fullyVisible || partiallyVisible){
              if(partiallyVisible && !screen.alreadyRendered){
                  ScrollService.currentScreenFadeIn.next({
                      fadeInScreen: screen.screen_name
                  });
                  screen['alreadyRendered'] = true;
                  break;
              }
              if(fullyVisible){
                  ScrollService.currentScreenBroadCaster.next({
                      screenView: screen.screen_name
                  });
                  break;
              }
          }
      }
  }
}