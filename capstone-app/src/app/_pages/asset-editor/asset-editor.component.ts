import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-editor',
  templateUrl: './asset-editor.component.html',
  styleUrls: ['./asset-editor.component.css']
})
export class AssetEditorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!window.sessionStorage.getItem('authenticated')){
      window.alert('you are not logged in, please login');
      this.router.navigateByUrl('/login');
    }
    else {}
  }

}
