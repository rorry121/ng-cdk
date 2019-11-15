import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutNavComponent } from './layout-nav/layout-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ListOptionComponent } from './a11y/list-option.component';
import { ListComponent } from './a11y/list.component';
import { ObserversChildComponent } from './observers/observers-child/observers-child.component';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { AutosizeDirective } from './text-field/autosize.directive';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { PortalAComponent } from './portal/portal-a/portal-a.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutNavComponent,
    A11yComponent,
    BidiComponent,
    DragDropComponent,
    LayoutComponent,
    ObserversComponent,
    OverlayComponent,
    PlatformComponent,
    PortalComponent,
    ScrollComponent,
    TextFieldComponent,
    ListComponent,
    ListOptionComponent,
    ObserversChildComponent,
    AutosizeDirective,
    PortalAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    TextFieldModule,
    ScrollingModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
