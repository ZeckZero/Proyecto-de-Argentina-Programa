import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { TokenService } from 'src/app/service/token.service';
  
