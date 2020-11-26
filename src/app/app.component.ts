import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
// @NgModule({
//   imports: [BrowserModule, FormsModule]
// })
export class AppComponent {
  title = "Tour of Heroes";
}
