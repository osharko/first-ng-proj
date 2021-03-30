import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
})
export class ZipComponent {

  public scelte = [
    { name: "Pinguino", checked: false, folder: "penguino", elements: [{ file: "Penguin.jpg", path: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/16/10/emperor-penguin.jpg", }] },
    { name: "Bradipo", checked: false, folder: "sloth", elements: [{ file: "Didattilo.jpg", path: "http://mashable.com/wp-content/uploads/2013/07/two-toed-sloth.jpg", }, { file: "Bradipo.jpg", path: "https://d.newsweek.com/en/full/1537892/sloth.jpg", }] },
    { name: "Giraffa", checked: false, folder: "girafa", elements: [{ file: "Giraffe.jpg", path: "https://www.waveexpeditions.ug/wp-content/uploads/2019/11/giraffe-in-uganda.jpg", },] },
    { name: "Auto", checked: false, folder: "supercar", elements: [{ file: "Lambo.jpg", path: "https://www.autotoday.it/wp-content/uploads/2019/05/HURACAN-EVO.jpg", }, {file: "Koenigsegg.jgp", path: "https://sm.askmen.com/t/askmen_me/article/2/2015-frank/2015-frankfurt-auto-show-reveals_j7g5.1200.jpg"}] },
  ];

  public get IsEnabled(): boolean { return this.scelte.some(scelta => scelta.checked); }

  constructor(private toolbarService: ToolbarService) {
    this.toolbarService.title = "Zipper";
  }

  download() {
    const zip: JSZip = new JSZip();

    const folders = [...new Set(this.scelte.filter(scelta => scelta.checked).map(scelta => scelta.folder))];

    folders.forEach(folder => {
      const currentFolder = zip.folder(folder);

      this.scelte
        .filter(scelta => scelta.folder == folder)
        .forEach(file => file.elements
          .forEach(element => currentFolder?.file(element.file, element.path))
        )
        ;
    });

    zip.generateAsync({ type: "blob" }).then(content => {
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(new Blob([content], { type: "application/zip" }));
      link.download = "Animali.zip";
      link.click();
    });
  }
}
