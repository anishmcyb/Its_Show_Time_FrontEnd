import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
<<<<<<< HEAD
    ServerModule,
=======
    ServerModule
>>>>>>> b500877e5d333b70d9bd91096a476e13b58f81df
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
