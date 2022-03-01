import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//модуль представляет из себя - класс
//конструкция @NgModule - называется декоратор - это спец. синтаксис для TS
//в действительности это просто функция которая оборачивает данный класс
//мы с помощью декоратора добавляем новые возможности для данного класса и в последствии
//он становится целым модулем

//что делают модули - они регистрируют различные другие модули и различные компоненты
//у нас есть компонент AppComponent и мы складываем его в массив declorations
//таким образом мы говорим Angular у нас есть такой то компонент, имей ввиду
//в массив imports мы складываем модули (модуль BrowserModule) и мы говорим Angular
//что у нас есть модуль который позволяет Angular работать в браузере
//в providers хранятся различные сервисы, интерсептеры и т.д.
//в массиве bootstrap указывается, что всё приложение стартует с AppComponent
