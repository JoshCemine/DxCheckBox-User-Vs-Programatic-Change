import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule, DxCheckBoxComponent, DxCheckBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxCheckBoxModule, DxButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repeatedFire';

  detail = { isRead: false }; // Example state to bind to the checkbox
  @ViewChild('checkBox', { static: false }) checkBox!: DxCheckBoxComponent


  onValueChangedRunning = false
  onValueChanged(e: any): void {
    if (this.onValueChangedRunning) return
    this.onValueChangedRunning = true

    if (e.event && e.event.type === 'dxclick') {
      console.log("User Change")
      this.changeValueByUser()
    }
    else {
      console.log("Changed from other function")
      this.changeValueByCode()
    }

    this.onValueChangedRunning = false
  }


  changeValueByUser() {
    this.checkBox.instance.option('value', true)
  }
  changeValueByCode() {
    this.checkBox.instance.option('value', false)
  }


  onClick(e: any) {
    this.changeValueByCode()
  }


}
