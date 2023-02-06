import { Component } from "@angular/core";
import {
  CrtInterfaceDesignerItem,
  CrtViewElement,
  ViewElementRegistrationConfig,
} from "@creatio-devkit/common";

@CrtViewElement({
	selector: "usr-demo",
	type: "usr.Demo"
})
@CrtInterfaceDesignerItem({
  toolbarConfig: {
    caption: "Your component",
    name: "usr-demo",
    icon: require("!!raw-loader?{esModule:false}!./demo-icon.svg"),
  },
})
@Component({
  selector: "usr-demo",
  template: `<button (click)="showAlert()">Click me!</button>`,
})
export class DemoComponent {
  public showAlert() {
    alert("Congrats, welcome to Freedom!");
  }
}
