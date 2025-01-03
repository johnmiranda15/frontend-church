import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html'
})
export class SermonsComponent {
  mainVideoId = 'DJyPx5u6sd0';  // ID del video principal
  mainVideoTitle = 'Título del Video Principal';
  mainVideoDescription = 'Descripción detallada del video principal...';

  playlist = [
    { id: 'I8FNdellz3Y', title: 'Título del Video 1', description: 'Descripción del Video 1' },
    { id: 'm7AZtSLv-wk', title: 'Título del Video 2', description: 'Descripción del Video 2' },
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