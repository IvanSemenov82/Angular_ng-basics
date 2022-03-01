//главный (входной) файл приложения

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// данная функция возвращает объект у кторого есть метод bootstrapModule в который мы передаём класс AppModule
// в Angular основой являются модули, которые мы можем группировать и тем самым оптимизировать наше приложение

