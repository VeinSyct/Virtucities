function allAvatars(index){
  skin=randomString(_mz.skins)
  hair=randomString(_mz.hairs)
  upper=randomString(_mz.uppers)
  lower=randomString(_mz.lowers)
  return[
    {name:'amareekon',type:'player',index:index,loader:true,x:0,y:0,z:0,o:0,s:1,si:0,ht:1.55,kg:47,of:0},
    {name:'eadiedavies',type:'player',index:index,loader:true,x:0,y:0,z:0,o:0,s:1,si:0,ht:1.5,kg:42,of:0},
    {name:'mariamoore',type:'player',index:index,loader:true,x:0,y:0,z:0,o:0,s:1,si:0,ht:1.5,kg:44,of:-.02},
    {name:'marlonkabilin',type:'player',index:index,loader:true,x:0,y:0,z:0,o:0,s:1,si:0,ht:1.7,kg:82,of:.08},
    {name:'umbawa',type:'player',index:index,loader:true,x:0,y:0,z:0,o:0,s:1,si:0,ht:1.8,kg:97,of:.12},
    {
      avatar:'Basic Male',
      name:'generic male basic mesh',type:'player',index:index,loader:true,x:0,y:0,z:0,o:0,s:1,si:0,ht:1.85,kg:79,of:.215,
      character:{
        gender:'male',
        attached:[
          'head','eye','glove','shoe',
          'ear_'+Math.floor(Math.random()*2),
          'brow_'+Math.floor(Math.random()*2),
          'hair_'+Math.floor(Math.random()*7),
          'mostache_'+Math.floor(Math.random()*2),
          'beard_'+Math.floor(Math.random()*2),
          'upper_'+Math.floor(Math.random()*6),
          'lower_'+Math.floor(Math.random()*3),
          'colar_'+Math.floor(Math.random()*2),
          'shade_'+Math.floor(Math.random()*10)
        ],
        profile:{back:'upper',text:'white'},
        component:[
          {name:'skin',value:skin},
          {name:'avatarface',value:skin},
          {name:'eye',value:randomString(_mz.eyes)},
          {name:'brow',value:hair},
          {name:'hair',value:hair},
          {name:'beard',value:hair},
          {name:'mostache',value:hair},
          {name:'shade',value:randomString(_mz.eyes)},
          {name:'lower',value:lower},
          {name:'belt',value:randomString(_mz.uppers)},
          {name:'upper',value:upper},
          {name:'avatarfront',value:upper},
          {name:'inner',value:randomString(_mz.colors)},
          {name:'rim',value:randomString(_mz.colors)},
          {name:'colar',value:randomString(_mz.lowers)},
          {name:'glove',value:randomString(_mz.uppers)},
          {name:'shoe',value:randomString(_mz.uppers)}
        ]
      }
    },
    {
      avatar:'Basic Female',
      name:'generic female basic mesh',type:'player',index:index,loader:true,x:0,y:0,z:0,o:0,s:1,si:0,ht:1.65,kg:47,of:.13,
      character:{
        gender:'female',
        attached:[
          'head','eye','glove','shoe',
          'ear_'+Math.floor(Math.random()*2),
          'brow_'+Math.floor(Math.random()*2),
          'hair_'+Math.floor(Math.random()*9),
          'upper_'+Math.floor(Math.random()*6),
          'lower_'+Math.floor(Math.random()*3),
          'colar_'+Math.floor(Math.random()*2),
          'shade_'+Math.floor(Math.random()*10)
        ],
        profile:{back:'upper',text:'white'},
        profile:{back:'upper',text:'white'},
        component:[
          {name:'skin',value:skin},
          {name:'avatarface',value:skin},
          {name:'eye',value:randomString(_mz.eyes)},
          {name:'brow',value:hair},
          {name:'hair',value:hair},
          {name:'shade',value:randomString(_mz.eyes)},
          {name:'lower',value:lower},
          {name:'belt',value:randomString(_mz.uppers)},
          {name:'upper',value:upper},
          {name:'avatarfront',value:upper},
          {name:'inner',value:randomString(_mz.colors)},
          {name:'rim',value:randomString(_mz.colors)},
          {name:'colar',value:randomString(_mz.lowers)},
          {name:'glove',value:randomString(_mz.uppers)},
          {name:'shoe',value:randomString(_mz.uppers)}
        ]
      }
    },
  ]
}
function onlineAvatars(){
  return[
    {avatar:'Ready Player Me, Female Clerk',url:'https://d1a370nemizbjq.cloudfront.net/08d36dc9-ffe9-419f-b115-679bba8b84b9.glb',name:'Rf2E566s8'},
    {avatar:'Ready Player Me, Female Violet',url:'https://d1a370nemizbjq.cloudfront.net/165ec72e-a9cc-4c17-96c4-06ca80733d7c.glb',name:'Eq2GGlzOZ'},
    {avatar:'Ready Player Me, Female Student',url:'https://d1a370nemizbjq.cloudfront.net/28f57e8f-7269-40ad-8769-c0b37b472c60.glb',name:'R1uqXzIP7'},
    {avatar:'Ready Player Me, Male Tech Clerk',url:'https://d1a370nemizbjq.cloudfront.net/45c207c1-9367-4fcf-85c1-398785a04e0d.glb',name:'yBQ33Kyja'},
    {avatar:'Ready Player Me, Male Tech',url:'https://d1a370nemizbjq.cloudfront.net/819301d1-a5c2-4bd3-9d0b-01ba4ed9bfa5.glb',name:'FmPwfTos6'},
    {avatar:'Ready Player Me, Male Student',url:'https://d1a370nemizbjq.cloudfront.net/e49248bc-a177-4363-9373-d5618a81ab19.glb',name:'HfqkqJB6z'},
  ]
}
