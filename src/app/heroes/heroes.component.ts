import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  //初始化
  heroes: Hero[] = [];
  
  selectedHero?: Hero;

  constructor(private heroService: HeroService,) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  //获取数据
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }  //如果名字為空值則回傳空
    //如果名字不為空值則執行下列程序
    //當 addHero() 儲存成功時，subscribe() 的回呼(Callback)函式會收到這個新英雄，並把它追加到 heroes 列表中以供顯示。
    this.heroService.addHero({ name } as Hero)  
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    //先從列表中移除要刪除的英雄
    this.heroes = this.heroes.filter(h => h !== hero);
    //再刪除資料庫
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
