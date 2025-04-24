import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCe0x3RXxbf1x1ZFFMY1hbRXNPMyBoS35Rc0VnWH9edHdRR2lcU0RwVEBU'
);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
