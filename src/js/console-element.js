'use strict'

import RedsiftConsole from './console.js';

class RedsiftConsoleElement extends HTMLElement {
    createdCallback() {
        this.rsConsole = new RedsiftConsole(this, this.width, this.height, this.textPadding);
    }

    //----------------------------------------------------------
    // Attributes:
    //----------------------------------------------------------
    get textlines() {
      let a = this.getAttribute('textlines');
      return a ? JSON.parse(a) : [];
    }

    set textlines(val) {
        this.setAttribute('textlines', JSON.stringify(val));
        this.rsConsole.update(val, this.animated);
    }

    get width() {
      return +this.getAttribute('width');
    }

    set width(val) {
      this.setAttribute('width', +val);
      this.rsConsole.render();
    }

    get height() {
      return +this.getAttribute('height');
      this.rsConsole.render();
    }

    set height(val) {
      this.setAttribute('height', +val);
      this.rsConsole.render();
    }

    get textPadding() {
      return +this.getAttribute('textPadding');
      this.rsConsole.render();
    }

    get animated() {
      let animated = this.getAttribute('animated');
      if (animated == '' || animated === 'true') {
        return true;
      }

      return false;
    }

    set animated(val) {
      this.setAttribute('animated', val);
      this.rsConsole.update(this.textlines, val);
    }
}

export default () => {
    try {
        document.registerElement('rs-console', RedsiftConsoleElement);
    } catch (e) {
        console.log('[redsift-ui] Element already exists: ', e);
    }
}
