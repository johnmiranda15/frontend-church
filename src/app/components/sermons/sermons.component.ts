import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html'
})
export class SermonsComponent {
  mainVideoId = 'lhmz6wex4dA';  // ID del video principal
  mainVideoTitle = 'Conociendo a la Iglesia Bautista de Pacora';
  mainVideoDescription = 'Descripción detallada del video principal...';

  playlist = [
    { id: '_qvXqlnsbrU', title: 'La Escalera que nos lleva a Dios. Génesis 28:10-22', description: 'Descripción del Video 1' },
    { id: 'qEfIRaOe6wA', title: 'La Roca era Cristo. Éxodo 17:1-7', description: 'Descripción del Video 2' },
  ];
  constructor(private sanitizer: DomSanitizer) {}

   playVideo(video: { id: string; title: string; description: string }) {
    // Actualiza el video principal
    this.mainVideoId = video.id;
    this.mainVideoTitle = video.title;
    this.mainVideoDescription = video.description;
  }

  getVideoUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

}