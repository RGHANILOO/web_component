customElements.define(
  "show-hide",
  class extends HTMLElement {
    constructor() {
      // instantiate thew web compo
      super();
      // get the parent class properties
      this.trigger = this.querySelector("[trigger]");
      this.content = this.querySelector("[content]");
      if (!this.trigger || !this.content) return;

      //  setup default ui
      this.trigger.removeAttribute("hidden");
      this.trigger.setAttribute("aria-expanded", "false");

      // listen for click events
      this.trigger.addEventListener("click", this);
    }
    // handleventsin the web component
    // @pram {event} event the event object

    handleEvent(event) {
      event.preventDefault();
      // if the ocntent is ex[pnaded , hide it, otheirse show it]
      if (this.trigger.getAttribute("aria-expanded") === "true") {
        this.trigger.setAttribute("aria-expanded", "false");
        this.content.setAttribute("hidden", "");
      } else {
        this.trigger.setAttribute("aria-expanded", "true");
        this.content.removeAttribute("hidden");
      }
    }
  }
);
