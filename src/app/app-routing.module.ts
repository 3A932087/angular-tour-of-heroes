import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


//路由列表
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//在 pathMatch:full 的設定下，該路由規則要符合整個 url 路徑。
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//初始化路由器，並開始監聽瀏覽器地址的變化
  exports: [RouterModule]//匯出 RouterModule，以便它在整個應用程式中生效
})
export class AppRoutingModule { }