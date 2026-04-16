// ==== SYSTEM INITIALIZATION ====
// Vrrency license control string
var cStr='alq<wfi"rB"t##!5hnbd$.nqn!P"vbxgJ!wj$fi#X"!cNrpo#n!5!j#%1hop!l#Lvg$cIcnsesb]#h$#!9ct$rK$rs$"e-$jk%#Kfb"#"2%s'
var charString='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// Rithmytic engine variables
var fBOn=opFlag=false,inStr=''
// Upload variables
var cmprsF=false,upKey=null,imMxSz=null,imgQa=1,upFlNme,upFlURL,flMxSz=null
// Database variables
var onRe={received:0,total:0,key:null,target:null,data:null,exist:null,contact:null,contacts:[]}
let myUserID={uid:null,contact:null,account:null,name:'Noname',profile:null,update:null,notification:null,validity:cDtNly()}
// ==== RYTHMETIC ENGINE ====
// Derivative
function cDer(n){return cStr.charAt(n).charCodeAt(0)}
// EnFormat
function enFrmt(txtString){txtString=txtString.replace(/\\/g,"\\\\");return txtString.replace(/"/g,"\\\"")}
// DeFormat
function deFrmt(txtString){txtString=txtString.replace(/\\\\/g,"\\");return txtString.replace(/\\"/g,"\"")}
// ==== ARITMETIC CALCULATION ====
// Addition
function enAdStr(txtString){
  s0=oRyt('enadd')
  if(s0!='er44'){
    enadd=null
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    return opEnAddStr(txtString)
  }return 'er44'
}
// Subtraction
function deSuStr(txtString){
  s0=oRyt('desub')
  if(s0!='er44'){
    desub=null
    if(s0!=null)$("#calCulus").html(deFcStr(deFrmt(s0)));s0=true
    return opDeSubStr(txtString)
  }return 'er44'
}
// ==== INTEGRAL CALCULUS ====
// Multiplication | Division
function enDeMuDiStr(txtString){
  s0=oRyt('enmul')
  if(s0!='er44'){
    enmul=null
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    return opEnDeMulDivStr(txtString)
  }return 'er44'
}
// ==== DIFFERENTIAL EQUATION ====
// Fraction
function enFrStr(txtString){
  s0=oRyt('enfra')
  if(s0!='er44'){
    enfra=null
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    return opEnFraStr(txtString)
  }return 'er44'
}
// Faction
function deFcStr(txtString){
  s0=oRyt('pdefc')
  if(s0!='er44'){
    pdefc=null
    if(s0!=null)$("#calCulus").html(s0);s0=true
    return opDeFacStr(txtString)
  }return 'er44'
}
// ==== CONNECTION ====
// Connection
function appConnect(mode){
  userUID()
  inStr=fitImageSize()
  s0=oRyt('imageuv')
  if(s0!='er44'){
    imageuv='assets/images/waternormals.jpg'
    if(s0!=null)$("#calCulus").html(deSuStr(enDeMuDiStr(deFcStr(s0))));s0=true
    signIn(mode)
  }
}
// ==== REALTIME DATABASE ====
// Save online database
function onSv(fKey,s0){enDB();firebase.database().ref(fKey).set(s0)}
// Realtime connection
function onCo(fKey,ret,sel){
  firebase.database().ref(fKey).on('value',data=>{
    data.forEach(root=>{
      if(sel=='player'){
        onRe.key=root.key
        onRe.target=root.val()
      }
      if(sel=='notification')onRe.contact=root.key
      $('#calCulus').html(`<script>function retReceived(){`+ret+`}</script>`)
      retReceived()
    })
  })
}
// Read online database
function onRd(fKey,tag,ret){
  enDB()
  onRe.total=tag.length
  onRe.received=0
  onRe.data=[]
  for(oi0=0;oi0<tag.length;oi0++){
    firebase.database().ref(fKey).child(tag[oi0]).get().then((snapshot)=>{
      if(snapshot.exists()){
        onRe.data.push(snapshot.val())
      }else onRe.data.push(null)
      onRe.received++
      if(onRe.received==onRe.total){
        $('#calCulus').html(`<script>function retReceived(){`+ret+`}</script>`)
        retReceived()
      }
    }).catch((err)=>{
      if(err.message=='Permission denied')onRd(fKey,tag,ret)
    })
  }
}
// Check if data exist in online database
function fExst(fKey,tg,ret){
  enDB()
  firebase.database().ref(fKey).once('value',function(snapshot){
    onRe.exist=snapshot.child(tg).exists()
    $('#calCulus').html(`<script>function retExisting(){`+ret+`}</script>`)
    retExisting()
  })
}
// Erase online database
function onEr(fKey){enDB();firebase.database().ref(fKey).remove()}
// ==== AUTHENTICATION ====
// Authorization
function vAuth(){
  s0=oRyt('vauth')
  if(s0!='er44'){
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    if(deSuStr("b,qa'I'+I&&'')qbR('Z/&wj")==opVAuth())return true
  }
}
// Establish
function establishIn(auth){
  s0=oRyt('estin')
  if(s0!='er44'){
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    opEstablishIn(auth)
  }
}
// Authentication
async function signIn(mode){
  s0=oRyt('imageid')
  if(s0!='er44'){
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    opSignIn(mode)
    establishIn(vAuth())
  }
}
// ==== ONLINE STORAGE ====
// Upload files
function upFle(fKey,fn,pb,pd,cb,dn,lo){
  if(flMxSz==null)flMxSz=2048*1024
  rejFl=''
  dt=[]
  for(n0=0;n0<fn.length;n0++){
    if(fn[n0].name.match(/\\.(jpg|jpeg|png|bmp|gif)$/)!=null||fn[n0].size<flMxSz){
      dt.push(fn[n0])
    }else rejFl+=fn[n0].name+', '
  }
  fn=dt
  if(fn.length==0)return rejFl
  if(!cmprsF){
    mW=imMxSz*5
    mH=imMxSz
    qa=imgQa
    sz=true
    reSzImg(fKey,fn,pb,pd,cb,dn,lo,mW,mH,qa,sz)
    cmprsF=true
    return
  }else cmprsF=false
  s0=oRyt('upflea')
  s1=oRyt('upfleb')
  s2=oRyt('upflec')
  s3=oRyt('upfled')
  s4=oRyt('upflee')
  if(s0!='er44'&&s1!='er44'&&s2!='er44'&&s3!='er44'&&s4!='er44'){
    $('#calCulus').html(deSuStr(s0)+lo+deSuStr(s1)+pd+deSuStr(s2)+lo+deSuStr(s3)+lo+deSuStr(s4));s0=s1=s2=s3=s4=true
    opUpFle(fKey,fn,pb,cb,dn)
  }
  return rejFl
}
// Report errors
function erUpFle(er){
  if(er!='er46'){upErSw(er)}
  //if(er=='er45'){'Upload failed'}
  //if(er=='er46'){'Upload cancelled'}
  //if(er=='er47'){'Unknow error'}
}
// List firefile
function lsFle(fKey,id,st){
  s0=oRyt('lsflea')
  s1=oRyt('lsfleb')
  if(s0!='er44'&&s1!='er44'){
    $('#calCulus').html(deSuStr(s0)+st+deSuStr(s1));s0=s1=true
    er=opLsFle(fKey,id)
  }
}
// Resize image file
async function reSzImg(fKey,file,pb,pd,cb,dn,lo,mW,mH,qa,sz){
  dt=new DataTransfer();f1=0;
  for(f0=0;f0<file.length;f0++){
    if(file){
      reader=new FileReader();
      reader.onload=function(e){
        img=document.createElement('img');img.src=e.target.result;
        img.onload=function(e){
          var canvas=document.createElement('canvas');
          canvas.width=e.target.width;canvas.height=e.target.height;
          if(sz==true){
            if(e.target.width>mW){canvas.width=mW;canvas.height=e.target.height*mW/e.target.width}
            if(e.target.height>mH){canvas.height=mH;canvas.width=e.target.width*mH/e.target.height}
          }
          var ctx=canvas.getContext('2d');
          ctx.drawImage(e.target,0,0,canvas.width,canvas.height);
          imURL=ctx.canvas.toDataURL('image/jpeg/png',qa);
          nwFl=new File([urlBlob(imURL)],file[f1].name,{type:'image/jpeg/png'});
          if(file[f1].size<nwFl.size){nwFl=file[f1]}
          dt.items.add(nwFl);f1++;
          if(f1==file.length){nwFLst=dt.files;upFle(fKey,nwFLst,pb,pd,cb,dn,lo)}
        }
      }
      reader.readAsDataURL(file[f0])
    }
  }
}
// Fit image size
function fitImageSize(){return sha256(deSuStr("&(p'-/bziB''')I&X/b&j'wJ'''&XI&XR"))}
// URL to blob
function urlBlob(dataurl) {
  var arr=dataurl.split(","),mime=arr[0].match(/:(.*?);/)[1],bstr=atob(arr[1]),n=bstr.length,u8arr=new Uint8Array(n);
  while(n--){u8arr[n]=bstr.charCodeAt(n)}return new Blob([u8arr],{type:mime})
}
// Text to texture
function textTexture(s0,b0,c0,w0,h0,f0,sz,of){
  cvs=document.createElement('canvas')
  ctx=cvs.getContext('2d')
  cvs.width=w0
  cvs.height=h0
  ctx.font=sz+'px '+f0
  ctx.fillStyle=b0
  ctx.fillRect(0,0,cvs.width,cvs.height)
  ctx.fillStyle=c0
  ctx.textAlign='center'
  words=s0.split(' ')
  line=''
  height=(cvs.height-sz)/2
  for(i=0;i<words.length;i++){
    if(ctx.measureText(line+words[i]+' ').width>cvs.width&&n>0){
      ctx.fillText(line,cvs.width/2+of,height)
      line=words[i]+' '
      height+=sz
    }else line=line+words[i]+' '
  }
  ctx.fillText(line,cvs.width/2+of,height)
  return cvs
}
// Change PNG color
function changePNGColor(e,col){
  canvas=document.createElement('canvas')
  ctx=canvas.getContext('2d')
  opx=pix=getPixels(e)
  newColor=hexToRGB(col)
  for(i=0,l=opx.data.length;i<l;i+=4){
    if(pix.data[i+3]>0){
      pix.data[i]=opx.data[i]/255*newColor.r
      pix.data[i+1]=opx.data[i+1]/255*newColor.g
      pix.data[i+2]=opx.data[i+2]/255*newColor.b
    }
  }
  ctx.putImageData(pix,0,0)
  return canvas.toDataURL("image/png")
}
// Hex to RGB
function hexToRGB(hex){
  long=parseInt(hex.replace(/^#/,''),16)
  return{r:(long>>>16)&0xff,g:(long>>>8)&0xff,b:long&0xff}
}
// Get pixels
function getPixels(img){
  canvas.width=img.width
  canvas.height=img.height
  ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,0,0,img.width,img.height)
  return ctx.getImageData(0,0,img.width,img.height)
}
// ==== ONLINE DATABASE ====
// Establish connection
function enDB(){
  if(isOnL()&&!fBOn){
    s0=oRyt('pendb')
    pendb=null
    if(s0!=null)$("#calCulus").html(deFcStr(deFrmt(s0)));s0=true
    opOnDB();fBOn=true
  }
}
// Establish specific realtime connection
function onFdb(fKey){
  s0=oRyt('onfdb')
  if(s0!='er44'){
    onfdb=null
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    opOnFdb(fKey)
  }
}
// Disconnect specific realtime connection
function ofFdb(fKey){
  s0=oRyt('offdb')
  if(s0!='er44'){
    offdb=null
    if(s0!=null)$("#calCulus").html(deSuStr(s0));s0=true
    opOfFdb(fKey)
  }
}
// Received specific realtime connection
function reFdb(data){
  notifyReceiver(data)
}
function erFdb(err){
  // Error here...
}
function opNOP(){
  // No operation...
}
// ==== USER ID ====
// Generate UUID
function getUUID(){
  uuid=genRan(charString,1)
  d=cDtTm().slice(7,14)
  u0=genRan('123456789'+charString,21)
  for(u1=0;u1<d.length;u1++){
    for(u2=0;u2<3;u2++)uuid+=u0[u1+u2*d.length]
    if(d[u1]=='0'){
      uuid+=genRan(charString,1)
    }else uuid+=d[u1]
  }
  return uuid
}
// User UID
function userUID(){
  if(lsRd('myUserID')!=null)myUserID=JSON.parse(lsRd('myUserID'))
  if(myUserID.uid==null){
    myUserID.uid=getUUID()
    myUserID.account=uidSN(myUserID.uid,4,5)
    lsSv('myUserID',JSON.stringify(myUserID))
  }return myUserID.uid
}
// Generate serial
function genSN(ln0){sn='';for(gr0=0;gr0<ln0;gr0++){sn+=genRan('01234567890',4);if(gr0<ln0-1)sn+='-'}return sn}
// Convert UID to serial number
function uidSN(id,b,l){u=xtDgfmSt(sha256(id));id='';for(ui0=0;ui0<l;ui0++){id+='-'+u.slice(ui0*b,ui0*b+b)}return id.replace('-','')}
// Extract digit from string
function xtDgfmSt(s0){return s0.match(/\d+/g).toString().replace(/,/g,'')}
// Generate random char,length
function genRan(rs0,ln1){
	ra0=''
	for(gr1=0;gr1<ln1;gr1++){
		ra1=Math.floor(Math.random()*rs0.length)
		ra0+=rs0.substring(ra1,ra1+1)
	}return ra0
}
//========= DATE TIME =========
// Get current time
function getTime(){
  d=new Date();hrs=d.getHours();min=d.getMinutes();apm=hrs>=12?'PM':'AM'
  hrs=hrs%12;hrs=hrs?hrs:12;hrs=hrs<10?' '+hrs:hrs
  return hrs+':'+(min=min<10?'0'+min:min)+' '+apm
}
// Get current date only
function cDtNly(){
  m=new Date()
  return m.getUTCFullYear()+("0"+(m.getUTCMonth()+1)).slice(-2)+("0"+m.getUTCDate()).slice(-2)
}
// Get business date & time
function cNow(){m=new Date();return m.toDateString()+' at '+getTime()}
// Convert number to time
function noTm(t0){
  m=Math.floor(t0/60);if(m<10){m='0'+m}
  s=Math.floor(t0%60);if(s<10){s='0'+s}
  return m+':'+s
}
// Get seconds
function cSec(){d=new Date();return parseInt(d.getSeconds())}
// Get current date & time
function cDtTm(){
  m=new Date()
  return m.getUTCFullYear()
  +("0"+(m.getUTCMonth()+1)).slice(-2)
  +("0"+m.getUTCDate()).slice(-2)
  +("0"+m.getUTCHours()).slice(-2)
  +("0"+m.getUTCMinutes()).slice(-2)
  +("0"+m.getUTCSeconds()).slice(-2)
}
// ==== UTILITY ====
// Return browser name
function naviName(){
  if(navigator.userAgent.match(/chrome|chromium|crios/i)){
    return'Chrome'
  }else if(navigator.userAgent.match(/firefox|fxios/i)){
    return'Firefox'
  }else if(navigator.userAgent.match(/safari/i)){
    return'Safari'
  }else if(navigator.userAgent.match(/opr\//i)){
    return'Opera'
  }else if(navigator.userAgent.match(/edg/i)){
    return'Edge'
  }else return'Browser'
}
// Scroll to element
function eScrl(e,c0){document.getElementById(e).scrollIntoView({block:c0,behavior:'smooth'})}
// Strip off HTML tags
function stripHTML(s0){return s0.replace(/(<([^>]+)>)/gi,'')}
// Copy to clipboard
window.copyToClipboard=function(s0){
  if(isMobile){
    s1=document.createElement('textarea')
    document.body.appendChild(s1)
    s1.value=s0
    s1.select()
    document.execCommand('copy')
    document.body.removeChild(s1)
  }else navigator.clipboard.writeText(s0)
}
// Progress bar
function showProgress(p0,c0,m0,s0){
  $('#progressText').text(m0)
  $('#loadingFill').css('background-color',c0)
  $('#loadingFill').css('width',p0)
  setTimeout(function(){
    if(s0)$('#loadingBar').fadeIn('fast')
  },5)
}
// Insert commas
function iCommas(n){n=n.toString();var pattern=/(-?\d+)(\d{3})/;while(pattern.test(n))n=n.replace(pattern,"$1,$2");return n}
// Remove commas
function fmCur(n){n=n.replace(/[^0-9-.]/g, '');return parseFloat(n).toFixed(2)}
// Convert string emoji to string
function emoString(e0){
  return e0.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,function(e){return '&#x'+emoHex(e)})
}
// Covert emoji hexcode
function emoHex(e2){
  if(e2.length===1){e3=e2.charCodeAt(0)}
  e3=((e2.charCodeAt(0)-0xD800)*0x400+(e2.charCodeAt(1)-0xDC00)+0x10000);
  if(e3<0){e3=e2.charCodeAt(0)}return e3.toString('16')
}
function upperFirstChar(s0){
  return s0.charAt(0).toUpperCase()+s0.slice(1)
}
// Text length
function txLen(s0,l0,l1){if(isMobile){l0=l1}if(s0.length>l0){return s0.slice(0,l0)+'...'}else{return s0}}
// Linear interpolation
function interpolate(start,end,amt){
  return (1-amt)*start+amt*end
}
// Get random string
function randomString(rs0){
	return rs0[Math.floor(Math.random()*rs0.length)]
}
// Hash event
window.addEventListener('hashchange',()=>{return false},false)
// On hash change
onhashchange=(event)=>{onHashChanged(event.newURL.split('#')[1])}
//Go to page
function goURL(url){window.location.replace(url)}
