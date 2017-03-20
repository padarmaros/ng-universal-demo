import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserTransferStateRestModule, TransferStateService} from '@ng/rest';
import {InterceptableHttpModule} from '@ng/http-extensions';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';

@NgModule(
{
	bootstrap: [AppComponent],
	imports: 
	[
		AppModule,
		BrowserAnimationsModule,
		BrowserTransferStateRestModule.forRoot(),
		InterceptableHttpModule.forRoot()
	]
})
export class BrowserAppModule
{
	constructor(private _transferState: TransferStateService)
	{
	}

	// Gotcha
	ngOnBootstrap = () => 
	{
		this._transferState.deactivate();
	}
}
