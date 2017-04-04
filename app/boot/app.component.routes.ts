import {RouterModule} from '@angular/router';
import {Utils} from '@ng/common';

import {HomeComponent} from '../pages/home/home.component';
import {AccessDeniedComponent} from "../pages/accessDenied/accessDenied.component";
import {ForbiddenComponent} from "../pages/forbidden/forbidden.component";
import {NotFoundComponent} from "app/pages/notFound/notFound.component";

var componentRoutes = [...HomeComponent.ngRoutes,...AccessDeniedComponent.ngRoutes,...ForbiddenComponent.ngRoutes,...NotFoundComponent.ngRoutes];

var routes = 
[
    { 
        path: 'samples', 
        loadChildren: '../pages/+samples/samples.module#SamplesModule'
    },
    ...componentRoutes
];

export var appRoutesModule = RouterModule.forRoot(routes, {enableTracing: false});
export var appComponents = [HomeComponent,
                            AccessDeniedComponent,
                            ForbiddenComponent,
                            NotFoundComponent];
