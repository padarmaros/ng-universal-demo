import {Component, OnInit, HostBinding} from '@angular/core';
import {ComponentRoute} from "@ng/common";
import {FlyInOutAnimation} from '@ng/animations';
import {DataService} from "../../services/api/data/data.service";
import {BaseAnimatedComponent} from "app/misc/baseAnimatedComponent";

/**
 * Home component
 */
@Component(
{
    selector: 'home-view',
    templateUrl: 'home.component.html',
    providers: [DataService],
    animations: [FlyInOutAnimation]
})
@ComponentRoute({path: ''})
export class HomeComponent extends BaseAnimatedComponent implements OnInit
{
    public static ngRoutes = [{path: '', component: HomeComponent}];
    //######################### public properties #########################
    public subs: string;
    public counter = 0;

    //######################### public properties - bindings #########################

    /**
     * Attach animation directly to component (enter, exit)
     */
    @HostBinding('@flyInOut') 
    public animatedComponent = true;

    /**
     * Class that is assigned for animated component
     */
    @HostBinding('class.fly-in-out')
    public animatedComponentClass = true;

    //######################### constructor #########################
    constructor(private dataSvc: DataService)
    {
        super();
    }

    //######################### public methods #########################
    public ngOnInit()
    {
        this.dataSvc.getData().map(data =>
        {
            return `${data.greeting} ${data.name}`;
        }).subscribe(data =>
        {
            this.subs = data;
        });
    }

    public inc()
    {
        this.counter++;
    }
}
