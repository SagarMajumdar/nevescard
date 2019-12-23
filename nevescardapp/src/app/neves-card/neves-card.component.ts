import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-neves-card',
  templateUrl: './neves-card.component.html',
  styleUrls: ['./neves-card.component.css']
})
export class NevesCardComponent implements OnInit {
  @Input() nevesCardTitleMain: string;
  @Input() nevesCardCover: string;
  @Input() nevesCardAvatarImg: string;
  @Input() nevesCardAvatarTitle: string;
  @Input() nevesCardAvatarDesc: string;
  @Input() nevesCardMainDesc: string;
  @Input() tblData;
  @Input() nevesAction: string[];
  @Input() nevesFeatures: string[];
  @Input()  listData: string[];
  @Input() nevesIndx: string;

  headers: string[] = [];

  @Output() outAdd = new EventEmitter<{nevesindx:string}>();
  @Output() outDel = new EventEmitter<{nevesindx:string}>();
  @Output() outEdit = new EventEmitter<{nevesindx:string}>();
  @Output() outLike = new EventEmitter<{nevesindx:string}>();
  @Output() outShare = new EventEmitter<{nevesindx:string}>();


  constructor() { }

  ngOnInit() {
      this.headers = Object.keys(this.tblData[0]);
  }

  
  nevesAdd = (indx: string) => { this.outAdd.emit({nevesindx:indx});}
  nevesDel = (indx: string) => { this.outDel.emit({nevesindx:indx}); }
  nevesEdit = (indx: string) => { this.outEdit.emit({nevesindx:indx});}
  nevesLike = (indx: string) => { this.outLike.emit({nevesindx:indx});}
  nevesShare = (indx: string) => { this.outShare.emit({nevesindx:indx});}


}
