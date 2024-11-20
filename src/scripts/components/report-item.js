import { createReportItemTemplate } from '../views/templates/template-creator.js';

class reportItem extends HTMLElement {
  _report = {
    id: null,
    name: null,
    description: null,
    city: null,
    photoUrl: null,
    lon: null,
    lat: null,
    createdAt: null,
  };

  set report(value) {
    this._report = value;
    this.render();
  }

  get report() {
    return this._report;
  }

  constructor() {
    super();
  }

  render() {
    this.innerHTML = createReportItemTemplate(this._report);
  }
}

customElements.define('report-item', reportItem);
