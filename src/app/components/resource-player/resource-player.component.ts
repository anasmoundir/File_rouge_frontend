import { Component, Input } from '@angular/core';
import { ResourcesDTO } from 'src/app/dto/resources.dto';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-player',
  templateUrl: './resource-player.component.html',
  styleUrls: ['./resource-player.component.css']
})
export class ResourcePlayerComponent {
  @Input() resource: ResourcesDTO | undefined;
 constructor( private ressourceservice: ResourceService) { }

 isVideo(): boolean {
  if (!this.resource) {
    return false;
  }
  const extensions = ['.mp4', '.avi', '.mov'];
  const url = this.resource.url.toLowerCase();
  return extensions.some(ext => url.endsWith(ext));
}

  isFile(): boolean {
    return !this.isVideo();
  }



}
