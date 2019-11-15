import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A11yComponent } from './a11y/a11y.component';
import { BidiComponent } from './bidi/bidi.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { LayoutComponent } from './layout/layout.component';
import { ObserversComponent } from './observers/observers.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PlatformComponent } from './platform/platform.component';
import { PortalComponent } from './portal/portal.component';
import { ScrollComponent } from './scroll/scroll.component';
import { TextFieldComponent } from './text-field/text-field.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'a11y', pathMatch: 'full'},
      {path: 'a11y', component: A11yComponent},
      {path: 'bidi', component: BidiComponent},
      {path: 'drag-drop', component: DragDropComponent},
      {path: 'layout', component: LayoutComponent},
      {path: 'observers', component: ObserversComponent},
      {path: 'overlay', component: OverlayComponent},
      {path: 'platform', component: PlatformComponent},
      {path: 'portal', component: PortalComponent},
      {path: 'scroll', component: ScrollComponent},
      {path: 'text-field', component: TextFieldComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
