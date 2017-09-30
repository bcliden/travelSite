import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";


class StickyHeader {
   constructor() {
      this.siteHeader = $(".site-header");
      this.headerLinks = $(".primary-nav a");
      this.headerTriggerElement = $(".large-hero__title");
      this.pageSections = $(".page-section");
      this.createHeaderWaypoint(this.siteHeader, this.headerLinks);
      this.createPageSectionWaypoints(this.headerLinks);
      this.addSmoothScrolling();
   };
   addSmoothScrolling() {
      this.headerLinks.smoothScroll();
   };
   createHeaderWaypoint(header, links) {
      new Waypoint({
         element: this.headerTriggerElement[0],
         handler: function(direction) {
            if (direction == "down") {
               header.addClass("site-header--dark");
            } else {
               header.removeClass("site-header--dark");
               links.removeClass("is-current-link");
            };
         },
      });
   }
   createPageSectionWaypoints(links) {
      this.pageSections.each(function() {
         var currentPageSection = this;
         new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
               if (direction == "down") {
                  var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                  links.removeClass("is-current-link");
                  $(matchingHeaderLink).addClass("is-current-link");
               };
            },
            offset: "18%"
         });
         new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
               if (direction == "up") {
                  var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                  links.removeClass("is-current-link");
                  $(matchingHeaderLink).addClass("is-current-link");
               };
            },
            offset: "-40%"
         });
      });
   };
};

export default StickyHeader;
