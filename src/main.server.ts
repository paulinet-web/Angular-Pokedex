import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { config } from './app/app.config.server';
import {AppComponent} from "./app/app.component";

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
