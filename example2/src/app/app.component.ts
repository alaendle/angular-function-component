import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StdComponentsModule } from './std-components/components.module';
import { FcomponentsModule } from './fn-components/fcomponents.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FcomponentsModule, StdComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example2';

  msg(msg: string, event: any) {
    console.log(msg, event);
  }
}
