import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']

	
})
export class HeroDetailComponent {
		@Input() hero?: Hero;//接收從父元素傳過來的資料

	constructor(
		private route: ActivatedRoute, //儲存著到這個 HeroDetailComponent 例項的路由資訊。這個元件對從 URL 中提取的路由引數感興趣。其中的 id 引數就是要顯示的英雄的 id。
		private heroService: HeroService, //從遠端伺服器獲取英雄資料，本元件將使用它來獲取要顯示的英雄。
		private location: Location // 是一個 Angular 的服務，用來與瀏覽器打交道。 稍後，你就會使用它來導航回上一個檢視。
	) {}
	ngOnInit(): void {
		this.getHero();
	}
	
	getHero(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.heroService.getHero(id)
			.subscribe(hero => this.hero = hero);
	}
	
	goBack(): void {
		this.location.back();
	}
	save(): void {
		if (this.hero) {
			//使用service中的updateHero方法更新資料
			//然後導航回前一個檢視
			this.heroService.updateHero(this.hero)
				.subscribe(() => this.goBack());
		}
	}
}
