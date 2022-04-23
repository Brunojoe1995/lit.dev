import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClockController} from './clock-controller.js';

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
});

@customElement('digital-clock')
export class DigitalClockElement extends LitElement {

  static styles = css`
    :host {
      display: block;
      font-family: Monospace;
      font-size: 3em;
      text-align: center;
    }
  `;

  private _clock = new ClockController(this);

  render() {
    return html`${timeFormat.format(this._clock.value)}`;
  }

}