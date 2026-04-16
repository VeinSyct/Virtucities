/* ==== SUBSCRIPTION ==== */
// ==== FLIP BOOK ====
// Create flip book
function createFlipBook(pdf,back){
  if(isOnL()){
    if(!_ez.flipBook){
      _ez.flipBook=true
      $('#mobileframe').hide()
      loadStyle('assets/css/dflip.min.css','head')
      $('#fullview-cont').html(`
        <img src="assets/images/cancel.png"
          onClick="noClickCanvas();closeFullview()"
          onMouseOver="this.style.transform='scale(1.1)'"
          onMouseOut="this.style.transform='scale(1)'"
          style="position:absolute;padding:14px;cursor:pointer;z-index:2"/>
        <div class="docview" id="docview">
          <div class="_df_book" height="`+$('#'+_ez.tCanvas.id+'-cont').height()+`px" webgl="true" backgroundcolor="`+back+`" source="`+pdf+`" id="df_manual_book"></div>
        </div>`)
      $('#app-cont').fadeOut('fast')
      $('#fullview-cont').fadeIn('slow')
      loadScript('assets/js/dflip.min.js','head','text/javascript')
    }
  }else showDialog('nointernet.png',`Unable to open, because you're not connected to the internet`,'','Dismiss')
}
// Delete flip book
function closeFullview(){
  $('#fullview-cont').fadeOut('fast')
  $('#app-cont').fadeIn('slow')
  setTimeout(function(){
    $('#fullview-cont').html('')
    if(_ez.flipBook){
      delete _ez.flipBook
      uloadStyle('assets/css/dflip.min.css')
      uloadScript('assets/js/dflip.min.js')
      $('#mobileframe').fadeIn('slow')
    }
  },1200)
}
// ==== UPLOAD ASSETS ====
// Upload asset
window.uploadAssets=function(p,e,uFiles){
  if(isOnL()){
    if(isMobile){
			imMxSz=720
			imgQa=.65
			_pz.mh='96px'
		}else{
			imMxSz=1024
			imgQa=.85
			_pz.mh='128px'
		}
		$('#'+p).fadeIn('slow')
		flReject(upFle(upKey,uFiles,'uBar','upPBar','upErBn','upDisp(\''+p+'\',\''+e+'\',\''+_pz.mh+'\',true);',p))
  }
}
// File too large to upload
function flReject(reFl){
  if(reFl!=''&&reFl!==undefined){
    if(reFl.split(', ').length>2){
			_pz.m00=`files are`
		}else _pz.m00=`file is`
		showDialog('files.png',`Unable to upload `+reFl+`because the `+_pz.m00+` larger than `+(isMobile?'2mb':'8mb'),'','Dismiss')
  }
}
// Upload file progress bar
window.upPBar=function(nm,b0,st0){
  return `<div id='uBrBn`+b0+`'>
      <p style='margin:0px;padding:0px'>`+nm+`</p>
      <progress value='0' max='100' id='uBar`+b0+`'>0%</progress>
    </div>`
}
// Upload file erase button
window.upErBn=function(fNm,b1,st0){
  return `<a onclick="upErFl('`+fNm+`','`+b1+`','delete','`+st0+`')
			erUpFl('`+fNm+`')" style="position:absolute;top:15px">x
    </a>`
}
// Upload erase file
function upErFl(fNm,b2,c0,st0){
  $('#calCulus').html(`<script>function opErFl(fNm){
			`+st0+`.child(fNm).`+c0+`()
			$('#uBrBn`+b2+`').hide()
		}</script>`)
	opErFl(fNm)
}
// Upload file display
window.upDisp=function(u0,g0,mh,c0){
	$('#'+u0).hide()
  $('#'+u0).html('')
	if(isOnL())lsFle(upKey,g0,upFlFm(c0,g0,mh))
	try{
		if($('#dialogMessage').html().includes(`id="upMPs"`))_mz.myUploadGallery=$('#dialogMessage').html()
	}catch(err){}
}
// Remove uploaded images
window.erUpFl=function(nm){
  _pz.d0=upFlNme.split('_!#im>')
	upFlNme=''
	_pz.d1=upFlURL.split('_!#im>')
	upFlURL=''
  for(_pz.iI7=0;_pz.iI7<_pz.d0.length;_pz.iI7++){
    if(nm.includes(_pz.d0[_pz.iI7])==false){
      upFlNme+=_pz.d0[_pz.iI7]+'_!#im>'
			upFlURL+=_pz.d1[_pz.iI7]+'_!#im>'
    }
  }
}
//Uploaded file display frame itemRef.name
function upFlFm(bn,g0,mh){
  if(bn){
		_pz.dn=`onclick="$(\\'#profileImage\\').attr(\\'src\\',\\''+url+'\\');myUserID.profile=\\''+url+'\\';lsSv(\\'myUserID\\',JSON.stringify(myUserID))"`
		_pz.bt=`<a onclick="$(\\'#'+bid+'\\').fadeOut(\\'slow\\');stg.child(\\''+itemRef.fullPath+'\\').delete();erUpFl(\\''+itemRef.name+'\\')" style="position:relative;top:20px;left:4px"><img src="assets/images/cancel.png"/></a>`
	}else _pz.bt=_pz.dn=``
  upFlNme=upFlURL=''
  _pz.or=`if(upFlNme.includes('_!#im>')){
        c0=upFlNme.split('_!#im>')[0]
      }else{
        c0=itemRef.name
      }if(c0>=itemRef.name){
        upFlNme=itemRef.name+'_!#im>'+upFlNme;upFlURL=url+'_!#im>'+upFlURL
      }else{
        upFlNme+=itemRef.name+'_!#im>';upFlURL+=url+'_!#im>'
      }
    }`
  return `if(upFlNme.includes(itemRef.name)==false){
        `+_pz.or+`bid='delbtn'+genRan(charString,7);
        s0='<span style="display:block;margin:auto;padding:0px" id="'+bid+'">'
        if(itemRef.name.toLowerCase().match(/\\.(jpg|jpeg|png|bmp|gif)$/)==null){
          if(itemRef.name.toLowerCase().match(/\\.(gltf|glb|fbx)$/)==null){
            im='assets/images/file.png'
						typ='file'
          }else if(itemRef.name.toLowerCase().match(/\\.(gltf|glb)$/)==null){
						im='assets/images/fbx.png'
						typ='fbx'
					}else{
            im='assets/images/gltf.png'
						typ='gltf'
          }
          s1='<div class="profileFrame"><img onclick="loadMyModelEditor(\\''+url+'\\',\\''+typ+'\\')" src="'+im+'" onerror="$(this).hide()" style="max-height:`+mh+`;object-fit:cover"/></div><p class="dialogMessage" style="font-size:9px">'+txLen(itemRef.name,60,30)+'</p>'
          fl=true
        }else{
          s1='<div class="profileFrame"><img `+_pz.dn+` src="'+url+'" onerror="$(this).hide()" style="max-height:`+mh+`;object-fit:cover"/></div>'
          fl=false
        }
        s2='`+_pz.bt+`'
        s3='</span>'
        if(fl){
          if(`+bn+`)hFleCnt+=s0+s2+s1+s3
        }else{
          hImgCnt+=s0+s2+s1+s3
        }$('#'+id).html(hImgCnt+hFleCnt)
				if($('#`+g0+`').css('display')=='none')$('#`+g0+`').css('display','flex')`
}
// Load my custom model
function loadMyModelEditor(url,typ){
	_mz.myUploadGallery=$('#dialogMessage').html()
	showDialog(null,`<div class="dialogbox" style="display:flex;align-content:stretch;flex-wrap:wrap;max-height:30vh">
		<div class="dialogbox">
			<span class="dialogbox" style="display:flex;width:72px">
				Avatar: <input class="linkInput" type="checkbox"
				onchange="$('#myObjectAnimated').prop('checked',false);$('#myObjectTerrain').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectTrimesh').prop('checked',false);$('#myObjectPolyhedron').prop('checked',false);$('#myObjectMesh').prop('checked',false)"
				style="margin-left:5px" id="myObjectAvatar"/>
			</span>
		</div>
		<div class="dialogbox">
			<span class="dialogbox" style="display:flex;width:126px">
				Weight: <input class="linkInput"
				ontouchend="$(this).focus()"
				onmouseup="if(!isMobile)$(this).focus()"
				value="10" style="margin-left:5px;margin-right:5px;text-align:right" id="myObjectWeight"/>kg
			</span>
			<span class="dialogbox" style="display:flex;width:90px">
				Scale: <input class="linkInput"
				ontouchend="$(this).focus()"
				onmouseup="if(!isMobile)$(this).focus()"
				onkeyup="$('#myObjectTerrain').prop('checked',false);$('#myObjectHeightmap').prop('checked',false)"
				value="1.0" style="margin-left:5px;text-align:right" id="myObjectScale"/>
			</span>
			<span class="dialogbox" style="display:flex;width:94px">
				Animated: <input class="linkInput" type="checkbox"
				onchange="$('#myObjectAvatar').prop('checked',false);$('#myObjectTerrain').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectTrimesh').prop('checked',false);$('#myObjectPolyhedron').prop('checked',false);$('#myObjectMesh').prop('checked',false)"
				style="margin-left:5px" id="myObjectAnimated"/>
			</span>
		</div>
		<div class="dialogbox">
			<span class="dialogbox" style="display:flex;width:66px">
				Mesh: <input class="linkInput" type="checkbox"
				onchange="$('#myObjectAvatar').prop('checked',false);$('#myObjectAnimated').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectTerrain').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectTrimesh').prop('checked',false);$('#myObjectPolyhedron').prop('checked',false)"
				style="margin-left:5px" id="myObjectMesh"/>
			</span>
			<span class="dialogbox" style="display:flex;width:83px">
				Trimesh: <input class="linkInput" type="checkbox"
				onchange="$('#myObjectAvatar').prop('checked',false);$('#myObjectAnimated').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectTerrain').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectPolyhedron').prop('checked',false);$('#myObjectMesh').prop('checked',false)"
				style="margin-left:5px" id="myObjectTrimesh"/>
			</span>
			<span class="dialogbox" style="display:flex;width:104px">
				Polyhedron: <input class="linkInput" type="checkbox"
				onchange="$('#myObjectAvatar').prop('checked',false);$('#myObjectAnimated').prop('checked',false);$('#myObjectTerrain').prop('checked',false);$('#myObjectTerrain').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectTrimesh').prop('checked',false);$('#myObjectMesh').prop('checked',false)"
				style="margin-left:5px" id="myObjectPolyhedron"/>
			</span>
		</div>
		<div class="dialogbox">
			<span class="dialogbox" style="display:flex;width:69px">
				Scene: <input class="linkInput" type="checkbox"
				onchange="$('#myObjectAvatar').prop('checked',false);$('#myObjectAnimated').prop('checked',false);$('#myObjectHeightmap').prop('checked',false);$('#myObjectTrimesh').prop('checked',false);$('#myObjectPolyhedron').prop('checked',false);$('#myObjectMesh').prop('checked',false)"
				style="margin-left:5px" id="myObjectTerrain"/>
			</span>
			<span class="dialogbox" style="display:flex;width:102px">
				Heightmap: <input class="linkInput" type="checkbox"
				onchange="$('#myObjectAvatar').prop('checked',false);$('#myObjectAnimated').prop('checked',false);$('#myObjectTerrain').prop('checked',false);$('#myObjectTrimesh').prop('checked',false);$('#myObjectPolyhedron').prop('checked',false);$('#myObjectMesh').prop('checked',false);$('#myObjectScale').val(1)"
				style="margin-left:5px" id="myObjectHeightmap"/>
			</span>
		</div>
	</div>`,`loadMyModel('`+url+`','`+typ+`')`,'Load')
	_pz.le0=lsRd('loadMyModelEditor')
	if(_pz.le0!=null){
		_pz.le0=JSON.parse(_pz.le0)
		$('#myObjectAvatar').prop('checked',_pz.le0.av=='true'?true:false)
		$('#myObjectWeight').val(_pz.le0.kg)
		$('#myObjectScale').val(_pz.le0.sc)
		$('#myObjectAnimated').prop('checked',_pz.le0.oa=='true'?true:false)
		$('#myObjectTerrain').prop('checked',_pz.le0.tn=='true'?true:false)
		$('#myObjectHeightmap').prop('checked',_pz.le0.hm=='true'?true:false)
		$('#myObjectMesh').prop('checked',_pz.le0.mh=='true'?true:false)
		$('#myObjectTrimesh').prop('checked',_pz.le0.tm=='true'?true:false)
		$('#myObjectPolyhedron').prop('checked',_pz.le0.ph=='true'?true:false)
	}
}
// Load my custom model
function loadMyModel(url,ft){
	_pz.av=$('#myObjectAvatar').prop('checked')
	_pz.kg=parseFloat(parseFloat($('#myObjectWeight').val()))
	_pz.sc=parseFloat(parseFloat($('#myObjectScale').val()))
	_pz.oa=$('#myObjectAnimated').prop('checked')
	_pz.tn=$('#myObjectTerrain').prop('checked')
	_pz.hm=$('#myObjectHeightmap').prop('checked')
	_pz.mh=$('#myObjectMesh').prop('checked')
	_pz.tm=$('#myObjectTrimesh').prop('checked')
	_pz.ph=$('#myObjectPolyhedron').prop('checked')
	if(!isNaN(_pz.kg)&&!isNaN(_pz.sc)&&parseFloat(_pz.sc)>0){
		lsSv('loadMyModelEditor','{"av":"'+_pz.av+'","kg":"'+_pz.kg+'","sc":"'+_pz.sc+'","oa":"'+_pz.oa+'","tn":"'+_pz.tn+'","hm":"'+_pz.hm+'","mh":"'+_pz.mh+'","tm":"'+_pz.tm+'","ph":"'+_pz.ph+'"}')
		if(_pz.av){
			playerModelLink=url.replace('https://','')
			loadMyAvatar('myavatar')
		}else{
			_pz.oa=_pz.tn?'terrain':_pz.oa?'animated':'object'
			_pz.oa=_pz.mh?'objectmesh':_pz.tm?'trimesh':_pz.ph?'polyhedron':_pz.oa
			if(_pz.hm){
				$('#loadingFill').css('width','2%')
				$('#loadingBar').fadeIn('fast')
				_pz.oa='heightmap'
			}
			loadObject(ft,'',url,0,0,0,(_pz.tn||_pz.hm?0:{x:0,y:0,z:0}),_pz.sc,false,_pz.oa,_pz.kg,null,true,undefined,genRan(charString,7),{select:'movable'})
		}
	}else{
		loadMyModelEditor(url,ft)
		return
	}
	setTimeout(function(){
		showDialog(null,_mz.myUploadGallery,'','Close')
	},600)
}
// ==== PINS ====
// Create pins
function loadPins(n){
	if(_ez.loadedPins===undefined)_ez.loadedPins=[]
	for(_pz.pL0=0;_pz.pL0<_lz.parameters[n].pin.uitype.length;_pz.pL0++){
    if(_lz.parameters[n].pin.uitype[_pz.pL0].match(/(navtarget)/))_ez.navTgtIndex=_ez.loadedPins.length
		_ez.loadedPins.push({
			divElem:getDivElement(n,_pz.pL0),
			index:_ez.loadedPins.length,
			position:{
				x:_lz.parameters[n].pin.x[_pz.pL0],
				y:_lz.parameters[n].pin.y[_pz.pL0],
				z:_lz.parameters[n].pin.z[_pz.pL0]
			},
      px:_lz.parameters[n].px,
      ds:_lz.parameters[n].ds
		})
	}isLoaded()
}
// Get div elements
function getDivElement(n,pL0){
  if(lsRd('_myCart'+myUserID.uid))_lz.ecommerce=JSON.parse(lsRd('_myCart'+myUserID.uid))
  if(_lz.ecommerce===undefined)_lz.ecommerce={cart:{}}
	_pz.pID0=genRan(charString,9)
  if(_lz.parameters[n].pin.uitype[pL0].match(/(navtarget)/)){
    _pz.divElem=`<div hidden id="pin-cont-`+_pz.pID0+`-navigation">
      <div class="pin" id="pin-cont-`+_pz.pID0+`">
        <span class="pin-icon" id="pin-cont-`+_pz.pID0+`-icon"></span>
      </div>
    </div>
    <script>
			function `+'op'+upperFirstChar(_lz.parameters[n].pin.content[pL0].icon)+'__'+_pz.pID0+`(c0){
				if(!c0)goToNavTarget()
			}
		</script>`
    _pz.eX0='gif'
    _pz.fT0={front:'invert brightness',back:undefined}
  }
  if(_lz.parameters[n].pin.uitype[pL0].match(/(addtoprocure)/)){
		_pz.divElem=`<div class="pin" id="pin-cont-`+_pz.pID0+`">
			<span class="pin-icon" id="pin-cont-`+_pz.pID0+`-icon">
        <img src="assets/images/welcome.png" height="42px"/>
      </span>
			<span class="pin" id="pin-cont-`+_pz.pID0+`-cont">
        <span class="pin-icon dialogbox dialogBack"
          onClick="verifyItem(`+n+`,`+pL0+`,'`+_pz.pID0+`')"
          onMouseOver="if(!isMobile){verifyItem(`+n+`,`+pL0+`,'`+_pz.pID0+`')}"
          style="min-width:64px;padding-right:5px"
          id="pin-cont-`+_pz.pID0+`-thumb">
          <span class="pin-cont">
            <span class="pin-text" style="font-size:16px">
              `+_lz.parameters[n].pin.content[pL0].tag+`
            </span>
          </span>
          <span class="pin-cont">
            <span class="pin-text" style="font-size:12px">
              `+_lz.parameters[n].pin.content[pL0].item+`
            </span>
          </span>
        </span>
        <span hidden class="pin-icon dialogbox dialogBack"
          style="padding-right:9px;min-width:172px;`+_lz.parameters[n].pin.content[pL0].style+`;overflow:hidden"
          id="pin-cont-`+_pz.pID0+`-content">
          <span id="pin-cont-`+_pz.pID0+`-details"></span>
          <div class="dialogbox dialogButton"
    				ontouchend="$('#pin-cont-`+_pz.pID0+`-content').hide();_lz.ecommerce.sn=`+n+`;_lz.ecommerce.pn=`+pL0+`;`+_lz.parameters[n].pin.content[pL0].function+`"
    				onmouseup="if(!isMobile){$('#pin-cont-`+_pz.pID0+`-content').hide();_lz.ecommerce.sn=`+n+`;_lz.ecommerce.pn=`+pL0+`;`+_lz.parameters[n].pin.content[pL0].function+`}"
    				style="margin-top:12px;padding-right:10px;overflow:hidden" id="pin-cont-`+_pz.pID0+`-button">
  					<div class="buttonContainer">
              `+_lz.parameters[n].pin.content[pL0].button+`
            </div>
  				</div>
        </span>
      </span>
		</div>
		<script>
			function `+'op'+upperFirstChar(_lz.parameters[n].pin.content[pL0].icon)+'__'+_pz.pID0+`(c0){
				if(!c0){
					if(_mz.startRulesUpdating)createFlipBook('`+_lz.parameters[n].pin.content[pL0].url+`','`+_lz.parameters[n].pin.content[pL0].back+`')
				}
			}
		</script>`
    _pz.eX0='png'
    _pz.fT0=undefined
	}
  $('#pins').html($('#pins').html()+_pz.divElem)
  createTouchButton('bounceclick','pin-cont-'+_pz.pID0+'-icon',_lz.parameters[n].pin.content[pL0].icon+'__'+_pz.pID0,['pin'],_pz.eX0,_lz.parameters[n].pin.content[pL0].backing,.36,_lz.parameters[n].pin.content[pL0].size,_pz.fT0)
  return{e:null,id:_pz.pID0}
}
// Verify item
function verifyItem(n,pL0,pID0){
  if(isOnL()){
    onRd('items/'+_ez.engineName.toLowerCase()+'/',[_lz.parameters[n].pin.content[pL0].serial],`receiveItemInfo(`+n+`,`+pL0+`,'`+pID0+`')`)
  }
}
// receiveItemInfo
function receiveItemInfo(n,pL0,pID0){
  if(onRe.data[0]!=null)_lz.parameters[n].pin.content[pL0]=onRe.data[0]
  function itemInfos(n,pL0,iTT){
    if(_lz.parameters[n].pin.content[pL0][iTT]){
      _pz.iTS+=`<span class="pin-cont"
        onMouseOver="this.style.transform='scale(.96)'"
        onMouseOut="this.style.transform='scale(1)'">
        <span class="pin-text"
          onMouseOver="$(this).css({'font-size':'`+(iTT=='description'?13:19)+`px','color':'yellow'})"
          onMouseOut="$(this).css({'font-size':'`+(iTT=='description'?12:18)+`px','color':'white'})"
          style="font-size:`+(iTT=='description'?12:20)+`px">
          `+(iTT=='price'?'$ ':iTT=='owner'?'Owned by: ':iTT=='contact'?'Reach me: ':'')+` `+(iTT=='owner'&&_lz.parameters[n].pin.content[pL0].uid==myUserID.uid?'You':_lz.parameters[n].pin.content[pL0][iTT])+`
        </span>
      </span>`
    }
  }
  _pz.iTT=['title','price','owner','reach','description']
  for(_pz.iTD=0,_pz.iTS='';_pz.iTD<_pz.iTT.length;_pz.iTD++){
    itemInfos(n,pL0,_pz.iTT[_pz.iTD])
  }
  $('#pin-cont-'+pID0+'-details').html(_pz.iTS)
  $('#pin-cont-'+pID0+'-thumb').hide()
  $('#pin-cont-'+pID0+'-content').fadeIn('slow')
  if(onRe.data[0]==null){
    $('#pin-cont-'+pID0+'-button').fadeIn('slow')
  }else $('#pin-cont-'+pID0+'-button').hide()
}
// ==== PROCUREMENT ====
// Add to procurement
function addToProcure(typ,title,item,serial){
  _lz.ecommerce.cart[typ.match(/(property)/)?_lz.buyList.serial:_lz.parameters[_lz.ecommerce.sn].pin.content[_lz.ecommerce.pn].serial]=typ.match(/(property)/)?_lz.buyList:_lz.parameters[_lz.ecommerce.sn].pin.content[_lz.ecommerce.pn]
  saveProcureList()
  showProcurementList()
  createTouchButton('bounceclick','tradingICON',{icon:'ti-shopping-cart',name:'addToList'},undefined,'icon')
  $('#tradingICON').fadeIn('slow')
}
// Save procurement list
function saveProcureList(){
  lsSv('_myCart'+myUserID.uid,JSON.stringify(_lz.ecommerce))
}
// Show procurement list
function showProcurementList(){
  if(lsRd('_myCart'+myUserID.uid)){
    _lz.ecommerce=JSON.parse(lsRd('_myCart'+myUserID.uid))
    _lz.ecommerce.dom=''
    _lz.ecommerce.total=0
    for(var key in _lz.ecommerce.cart){
      _lz.ecommerce.total+=addItemPrice(key)
      _lz.ecommerce.dom+=`<div class="dialogbox dialogBack"
          ontouchend=""
          onmouseup="if(!isMobile){}"
          style="display:flex;margin:6px;max-width:86vw;max-width:600px">
            <img class="" src="`+_lz.ecommerce.cart[key].thumb+`"
              onerror="$(this).attr('src','assets/models/players/merchandise.png')"
              style="height:86px"/>
            <span style="display:flex;flex-wrap:wrap;position:relative;width:100%">
              <img src="assets/images/cancel.png"
                onClick="delete _lz.ecommerce.cart['`+key+`'];saveProcureList();showProcurementList()"
                onMouseOver="this.style.transform='scale(.96)'"
                onMouseOut="this.style.transform='scale(1)'"
                style="position:absolute;right:0px;cursor:pointer;z-index:2"/>
              <div class="pin-text" style="margin-left:5px">
                `+_lz.ecommerce.cart[key].title+`
                <p class="pin-text" style="font-size:24px">$ `+iCommas(_lz.ecommerce.cart[key].price)+`</p>
                <span class="pin-text" style="max-width:72vw;font-size:12px">`+_lz.ecommerce.cart[key].description+`</p>
              </div>
            </span>
        </div>`
    }
    if(_lz.ecommerce.dom!=''){
      if (_lz.checkout){
        showDialog(null,`<div style="max-height:27vh">`+_lz.ecommerce.dom+`</div>`,`if(isOnL()){if(!_lz.ecommerce.paybutton){_lz.ecommerce.paybutton=true;loadScript('assets/js/checkout.js','head','text/javascript')};setTimeout(function(){checkOut(_lz.ecommerce)},1200)}`,isOnL()?'Proceed to Checkout':null)
      }else showDialog(null,`Add to cart is not available on demo.`,`closeDialog(null,false)`,'Dismiss')
    }else closeDialog(null,false)
  }
}
// ==== EXTERNAL ASSETS ====
// On new hash
function onHashChanged(hash){
  if(hash.includes('origin='))lsSv('spawnposition',hash.replace('origin=',''))
  if(hash.includes('level='))lsSv('levelname',hash.replace('level=',''))
  if(hash.includes('assets='))externalAssets(hash)
  if(hash.includes('merchant='))merchantAssets(hash)
  if(hash.includes('payment='))paySuccess(hash)
}
// External assets
function externalAssets(hash){
  if(lsRd('externalAssets'+lsRd('levelname'))==null){
    if(_ez.assets===undefined)_ez.assets={received:false,list:[]}
    _ez.assets.list.push(JSON.parse(hash.replace('assets=','').replace(/\%22/g,'"').replace(/\%20/g,' ')))
    setTimeout(function(){
      if(!_ez.assets.received){
        _ez.assets.received=true
        lsSv('externalAssets'+lsRd('levelname'),JSON.stringify(_ez.assets.list))
        location.reload()
      }
    },1200)
  }
}
// Establish external message
function establishExternalMessage(){
  window.addEventListener('message',({data})=>{
    if(_ez.physicsPlayed){
      if(data.operation=='load-asset')console.log(data.message)
    }else window.top.postMessage({operation:'error',message:'Busy loading assets...'}, '*')
  })
  window.top.postMessage({operation:'Assets',message:'loading...'}, '*')
}
// Merchant assets
function merchantAssets(hash){
  _pz.mer=JSON.parse(hash.replace('merchant=','').replace(/\%22/g,'"').replace(/\%20/g,' '))
  loadObject(_pz.mer.name.match(/(fbx)/)?'fbx':'gltf','',_pz.mer.name,0,0,0,{x:0,y:0,z:0},500,false,'objectmesh',0,null,'external',undefined,genRan(charString,7),{select:'movable'})
  goURL('#loaded')
}
