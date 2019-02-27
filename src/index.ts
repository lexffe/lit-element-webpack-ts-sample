import './components/hello';
import { customElement, LitElement, html, css } from 'lit-element';

@customElement('root-el')
export class RootElement extends LitElement {

  static get styles() {
    return css`
      h1 {
        font-family: serif;
        color: green;
      }
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        color: red;
      }
    `
  }

  render() {
    return html`
      <h3>Test drive</h3> <h1>parent component with "conflicting styles"</h1>
      <hello-element name="World"></hello-element>
      <hello-element name="Bye"></hello-element>
    `
  }
}
 