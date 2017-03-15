import 'web-animations-js';
import './dependencies';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from './app/browser-app.module';
import {hmrAccept, hmrFinishedNotification} from '@ng/common';

// Enable Hot Module Reloading if available
hmrAccept(platform);
var platform = platformBrowserDynamic();

platform.bootstrapModule(BrowserAppModule).then(() =>
{
    hmrFinishedNotification();
});