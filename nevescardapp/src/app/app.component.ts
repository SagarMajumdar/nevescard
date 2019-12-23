import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  x = [ 
    {
      indx: '58',
         features : ['title-main', 'card-cover', 'avatar', 'main-desc', 'tbl', 'list', 'btn-add', 'btn-del', 'btn-share', 'btn-like', 'btn-edit']
       , nevesCardTitleMain: 'consequatur saepe rerum est sint'
       ,nevesCardCover : 'https://images.unsplash.com/photo-1480911620066-b6ccd99c48f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80'
       ,nevesCardAvatarImg :'https://c402277.ssl.cf1.rackcdn.com/photos/182/images/circle/Chimpanzees_Circle_image_%28c%29_Howard_W._Buffett_WWF_US.jpg?1345516061'
       ,nevesCardAvatarTitle : 'ljsdkin jshdfj'
       ,nevesCardAvatarDesc : 'kjfhjfg jfgjshgfshgfjhgj | jhsgfhjsgf | kdha skjjkad '
       ,nevesCardMainDesc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus tempora, atque dolore quasi aperiam. Tempora nam aut a dolores, praesentium corporis dolorem, accusantium velit minima laudantium excepturi voluptate eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus qui esse ab delectus, quo quod consectetur, repudiandae deserunt sequi praesentium tempora adipisci ea quidem a numquam maiores. Consectetur, pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti odio odit et accusamus perspiciatis quo minima asperiores, consequatur saepe rerum est sint ipsum, itaque dicta. Laudantium libero molestiae aperiam.'
       , tbldata : [
         {head1: 'data1', head2: 'data2' },
         {head1: 'data6', head2: 'data299' },
         {head1: 'data313', head2: 'data12'}]    
       , listData: {
         list_title: 'list one',
         list_content: [ 'abc', 'dsadasd', 'gdgeewrw', 'dsdda', 'dadsssd','gdgeewrw asdada dasd','gdgeewrw asdada dasd','gdgeewrw asdada dasd','gdgeewrw asdada dasd','gdgeewrw asdada dasd' ]
       }
  }
  
  ,
  { 
    indx: '21',
         features : ['card-cover', 'avatar', 'list', 'btn-add', 'btn-like', 'btn-edit', 'btn-share']
    , nevesCardTitleMain: ''
    ,   nevesCardCover : 'https://images.pexels.com/photos/894443/pexels-photo-894443.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    ,   nevesCardAvatarImg : 'https://c402277.ssl.cf1.rackcdn.com/photos/182/images/circle/Chimpanzees_Circle_image_%28c%29_Howard_W._Buffett_WWF_US.jpg?1345516061'
    ,   nevesCardAvatarTitle : 'Fhijkj jhhjgada '
    ,   nevesCardAvatarDesc : 'lorem ipsum lorem ipsum'
    ,   nevesCardMainDesc : ''
    ,    tbldata : [{}]
      , listData: {
         list_title: 'list two',
         list_content: [ 'abc', 'dsadasd','gdgeewrw asdada dasd','gdgeewrw asdada dasd' ]
       }
  },
  {
    indx: '3',
    features : ['title-main', 'card-cover', 'main-desc', 'tbl','btn-add', 'tn-del', 'btn-like', 'btn-edit']
    ,nevesCardTitleMain: 'consequatur saepe rerum est sint'
   ,    nevesCardCover : 'https://i.pinimg.com/564x/b8/f8/c6/b8f8c61ca7d9050b3045eb118d2cdedc.jpg'
   ,    nevesCardAvatarImg : ''
    ,   nevesCardAvatarTitle : ''
    ,   nevesCardAvatarDesc : ''
    ,   nevesCardMainDesc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus tempora, atque dolore quasi aperiam. Tempora nam aut a dolores, praesentium corporis dolorem, accusantium velit minima laudantium excepturi voluptate eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus qui esse ab delectus, quo quod consectetur, repudiandae deserunt sequi praesentium tempora adipisci ea quidem a numquam maiores. Consectetur, pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti odio odit et accusamus perspiciatis quo minima asperiores, consequatur saepe rerum est sint ipsum, itaque dicta. Laudantium libero molestiae aperiam.'
    ,    tbldata : [{head1: 'data1', head2: 'data2',head12: 'data1', head23: 'data2',head41: 'data1', head62: 'data2',head18: 'data1', head29: 'data2',head01: 'data1', head02: 'data2',head09: 'data1', head03: 'data2',head04: 'data1', head05: 'data2',head06: 'data1', head011: 'data2',head012: 'data1', head013: 'data2'}]
    , listData: {
         list_title: '',
         list_content: []
       }
  },
  {
    indx: '42',
    features : ['title-main', 'card-cover', 'main-desc','btn-add', 'btn-del', 'btn-like', 'btn-edit','btn-share']
    ,nevesCardTitleMain: 'consequatur saepe rerum est sint'
   ,    nevesCardCover : 'https://images.unsplash.com/photo-1576895225171-ce4059ba7d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
   ,   nevesCardAvatarImg :''
    ,   nevesCardAvatarTitle : ''
    ,   nevesCardAvatarDesc : ''
    ,   nevesCardMainDesc :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus tempora, atque dolore quasi aperiam. Tempora nam aut a dolores, praesentium corporis dolorem, accusantium velit minima laudantium excepturi voluptate eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus qui esse ab delectus, quo quod consectetur, repudiandae deserunt sequi praesentium tempora adipisci ea quidem a numquam maiores. Consectetur, pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti odio odit et accusamus perspiciatis quo minima asperiores, consequatur saepe rerum est sint ipsum, itaque dicta. Laudantium libero molestiae aperiam."
    ,    tbldata : [{}]
    , listData: {
         list_title: '',
         list_content: []
       }
  },
  {
    indx: '6',
    features : ['title-main']
    ,nevesCardTitleMain: 'consequatur saepe rerum est sint consequatur saepe rerum'
    ,    nevesCardCover : ''
    ,   nevesCardAvatarImg :''
     ,   nevesCardAvatarTitle : '' 
     ,   nevesCardAvatarDesc : ''
     ,   nevesCardMainDesc : ''
     ,    tbldata : [{}]
     , listData: {
          list_title: '',
          list_content: []
        }
  },
  {
    indx: '12',
    features : ['card-cover']
    ,nevesCardTitleMain: ''
    ,    nevesCardCover : 'https://i.pinimg.com/564x/8c/cd/97/8ccd97ebaab901742670abbe2f353c53.jpg'
    ,   nevesCardAvatarImg :''
     ,   nevesCardAvatarTitle : '' 
     ,   nevesCardAvatarDesc : ''
     ,   nevesCardMainDesc :''
     ,    tbldata : [{}]
     , listData: {
          list_title: '',
          list_content: []
        }
  } 
  ];

  fnAdd(dt: {nevesindx:string}) {
      console.log('add clicked for card ' + dt.nevesindx);
  }
  fnDel(dt: {nevesindx:string}) {
    console.log('del clicked for card ' + dt.nevesindx);
  }
  fnEdit(dt: {nevesindx:string}) {
    console.log('edit clicked for card ' + dt.nevesindx);
  }
  fnLike(dt: {nevesindx:string}) {
    console.log('like clicked for card ' + dt.nevesindx);
  }
  fnShare(dt: {nevesindx:string}) {
    console.log('share clicked for card ' + dt.nevesindx);
  }

  
}
