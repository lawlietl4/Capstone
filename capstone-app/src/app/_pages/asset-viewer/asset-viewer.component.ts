import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-viewer',
  templateUrl: './asset-viewer.component.html',
  styleUrls: ['./asset-viewer.component.css']
})
export class AssetViewerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!window.sessionStorage.getItem('authenticated')){
      window.alert('you are not logged in, please login');
      this.router.navigateByUrl('/login');
    }
    else {}
  }

}
