import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Esercizio1RoutingEnum, Esercizio2RoutingEnum, HomepageRoutingEnum } from './enum/routing.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public treeControl = new NestedTreeControl<ITree>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<ITree>();
  public hasChild = (_: number, node: ITree) => !!node.children && node.children.length > 0;
  private readonly TREE_DATA: ITree[] = [
    { name: "Homepage", url: HomepageRoutingEnum.Homepage },
    {
      name: "Esercizio 1",
      children: [
        { name: "Navigazione", url: Esercizio1RoutingEnum.Landing }
      ]
    },
    {
      name: "Esercizio 2",
      children: [
        { name: "Navigazione et Riutilizzo", url: Esercizio2RoutingEnum.Introduzione }
      ]
    },
  ];

  constructor() { this.dataSource.data = this.TREE_DATA; }

}

interface ITree {
  name: string;
  url?: string;
  children?: ITree[];
}