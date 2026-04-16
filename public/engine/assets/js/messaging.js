// ==== NOTIFICATION ====
// Update notification
function updateNotification(){
	if(!onRe.contacts.includes(onRe.contact)&&_oz.uid.length>0){
		onRe.contacts.push(onRe.contact)
		for(_pz.iI0=0;_pz.iI0<_oz.uid.length;_pz.iI0++){
			if(_oz.uid[_pz.iI0]==onRe.contact){
				_pz.nm0=_oz.target[_pz.iI0].name
				_pz.fn='onlineAvatar'
				if(_oz.target[_pz.iI0].model!=null&&_oz.target[_pz.iI0].model!==undefined)if(!_pz.fn.includes('https'))_pz.fn=_oz.target[_pz.iI0].model.replace('.glb','')
				if(_oz.myContacts!=null)for(_pz.uC0=0;_pz.uC0<_oz.myContacts.data.length;_pz.uC0++)if(onRe.contact==_oz.myContacts.uid[_pz.uC0])_oz.myContacts.data[_pz.uC0].model=_pz.fn
				saveNewContact(onRe.contact,_pz.fn,_pz.nm0)
				continue
			}
		}
		if(_lz.dynamicJoy){
			createTouchButton('bounceclick','tradingICON',{icon:'ti-comment',name:'myChat'},'indicator','icon')
			$('#tradingICON').fadeIn('slow')
			hideMenu()
		}if($('#notifyDot').css('display')=='none')$('#notifyDot').fadeIn('slow')
		if(_ez.sound)loadAudio('interface','notify',1,false,true)
	}
}
// ==== MESSAGING ====
// Verify message before sending
function sendMessage(uid){
	if(isMultiplayer()&&isOnL()&&$('#sendMessage').val()!=''){
		fExst(_pz.fKey=_ez.engineName.toLowerCase()+'/'+_lz.levelName,uid,`opSendMessage('`+uid+`')`)
	}else{
		$('#optionWindow').fadeOut('slow')
		$('#contactWindow').fadeOut('slow')
		$('#contactChat').fadeOut('slow')
		$('#contactICON').fadeIn('slow')
		if($('#sendMessage').val()!=''){
			_pz.m02=`Your message was not sent, because you're not connected to the internet`
		}else _pz.m02=`Unable to send, because there is no message`
		showDialog('nointernet.png',_pz.m02,'','Dismiss')
	}
}
// Send message
function opSendMessage(uid){
	if(onRe.exist){
		_pz.p0=getPolarity(uid)
		if(_pz.p0==myUserID.uid+uid){
			_pz.m02='/messageA/'
		}else _pz.m02='/messageB/'
		_pz.fKey=_ez.engineName.toLowerCase()+'/'+_lz.levelName+'messages/'+_pz.p0+_pz.m02
		fExst(_pz.fKey,'message',`_opSendMessage('`+_pz.fKey+`','`+uid+`')`)
	}else{
		_pz.msg=$('#sendMessage').val()
		$('#sendMessage').val('')
		sendQuery({ m: _pz.msg })
	}
}
// Send message
function _opSendMessage(fKey,uid){
	_pz.m03=[]
	_pz.m01=$('#sendMessage').val()
	if(onRe.exist){
		_pz.s03=lsRd('to'+myUserID.contact)
		if(_pz.s03!=null)_pz.m03=JSON.parse(_pz.s03)
	}
	_pz.m03.push(_pz.m01)
	_pz.s03=JSON.stringify(_pz.m03)
	lsSv('to'+myUserID.contact,_pz.s03)
	_pz.dte=cNow()
	onSv(fKey,{
		message:JSON.stringify(_pz.m03),
		datetime:_pz.dte,
		profile:myUserID.profile,
	})
	_pz.msg=[$('#sendMessage').val()]
	$('#sendMessage').val('')
	saveMessage(myUserID.uid,_pz.msg,_pz.dte)
	if($('#chatMessageList').html().includes(_pz.dte))_pz.dte=''
	$('#chatMessageList').html($('#chatMessageList').html().replace(/<br><br><br>/g,''))
	_pz.tg=genRan(charString,9)
	$('#chatMessageList').html($('#chatMessageList').html()+messageBubble(_pz.msg,_pz.dte,'end','right',_pz.tg)+'<br><br><br>')
	eScrl(_pz.tg,'center')
	onSv(_ez.engineName.toLowerCase()+'/notifications/'+uid+'/'+myUserID.uid+'/',oRyt(`{when:cNow()}`))
	setTimeout(function(){$('#sendMessage').focus()},100)
	saveNewContact(uid,$('#contactModel').text(),$('#contactName').text())
}
// Save new contact
function saveNewContact(uid,fn,nm){
	if(isMyContacts(JSON.stringify(_oz.myContacts),uid)){
		for(_pz.iI1=0;_pz.iI1<_oz.myContacts.uid.length;_pz.iI1++){
			if(_oz.myContacts.uid[_pz.iI1]==uid)_oz.myContacts.data[_pz.iI1].name=nm
		}
	}else{
		_oz.myContacts.uid.push(uid)
		_oz.myContacts.data.push({path:'none',model:fn,name:nm})
	}
	lsSv('myContacts'+myUserID.uid,JSON.stringify(_oz.myContacts))
}
// Check is uid is myContacts
function isMyContacts(s0,uid){
	if(_oz.myContacts==null){
		s0=lsRd('myContacts'+myUserID.uid)
		if(s0==null){
			s0=''
			_oz.myContacts={uid:[],data:[]}
		}else _oz.myContacts=JSON.parse(s0)
	}
	return s0.includes(uid)
}
// Save received messages
function saveMessage(uid,msg,dte){
	_pz.m04=[]
	_pz.s01=lsRd('rx'+myUserID.contact)
	if(_pz.s01!=null)_pz.m04=JSON.parse(_pz.s01)
	_pz.m04.push({uid:uid,message:msg,datetime:dte})
	_pz.s01=JSON.stringify(_pz.m04)
	lsSv('rx'+myUserID.contact,_pz.s01)
}
// Message bubble
function messageBubble(m0,d0,se,lr,tg){
	return `<div class="chatMessageBubble" style="align-self:flex-`+se+`" id="`+tg+`">`+m0+`</div>
		<span style="font-size:10px;margin-`+lr+`:9px;text-align:`+lr+`">`+d0+`</span>`
}
// Receive message
function receiveMessage(fKey){
	if(onRe.data[0]!=null){
		saveMessage(myUserID.contact,onRe.data[0],onRe.data[1])
		if(onRe.data[2]!=null)lsSv('profile'+myUserID.contact,onRe.data[2])
		_pz.m05=''
		_pz.m22=JSON.parse(onRe.data[0])
		for(_pz.m12=0;_pz.m12<_pz.m22.length;_pz.m12++)_pz.m05+=_pz.m22[_pz.m12]+'<br>'
		if($('#chatMessageList').html().includes(onRe.data[1]))onRe.data[1]=''
		$('#chatMessageList').html($('#chatMessageList').html().replace(/<br><br><br>/g,''))
		_pz.tg=genRan(charString,9)
		$('#chatMessageList').html($('#chatMessageList').html()+messageBubble(_pz.m05,onRe.data[1],'start','left',_pz.tg)+'<br><br><br>')
		eScrl(_pz.tg,'center')
	}
	lsEr('to'+myUserID.uid)
	onEr(fKey)
	onFdb(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'messages/'+getPolarity(myUserID.contact))
}
// Receive notification
function notifyReceiver(data){
	if(myUserID.update==null||parseInt(myUserID.update)<parseInt(cDtTm())){
		ofFdb(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'messages/'+getPolarity(myUserID.contact))
		myUserID.update=cDtTm()
		_pz.m06
		_pz.p0=getPolarity(myUserID.contact)
		if(_pz.p0==myUserID.contact+myUserID.uid){
			_pz.m06='/messageA/'
		}else _pz.m06='/messageB/'
		_pz.fKey=_ez.engineName.toLowerCase()+'/'+_lz.levelName+'messages/'+_pz.p0+_pz.m06
		onRd(_pz.fKey,['message','datetime','profile'],`receiveMessage('`+_pz.fKey+`')`)
	}
}
// Get message polarity
function getPolarity(uid){
	if(uid>myUserID.uid){
		return uid+myUserID.uid
	}else return myUserID.uid+uid
}
// Load contact messages
function loadContactMessages(mn0){
	_pz.s02=lsRd('rx'+myUserID.contact)
	_pz.pr0=''
	if(_pz.s02!=null){
		_pz.m07=JSON.parse(_pz.s02)
		_pz.m51='<br>'
		for(_pz.m13=_pz.m07.length>mn0?_pz.m07.length-mn0:0;_pz.m13<_pz.m07.length;_pz.m13++){
			if(_pz.m07[_pz.m13].uid==myUserID.uid){
				_pz.se='end'
				_pz.lr='right'
				_pz.m21=_pz.m07[_pz.m13].message
			}else{
				_pz.se='start'
				_pz.lr='left'
				_pz.m21=JSON.parse(_pz.m07[_pz.m13].message)
			}
			_pz.dte=_pz.m07[_pz.m13].datetime
			_pz.m41=''
			if($('#chatMessageList').html().includes(_pz.m07[_pz.m13].datetime))_pz.dte=''
			if(_pz.m21.length>1){
				for(_pz.m31=0;_pz.m31<_pz.m21.length;_pz.m31++)_pz.m41+=_pz.m21[_pz.m31]+'<br>'
			}else _pz.m41=_pz.m21
			_pz.tg=genRan(charString,9)
			_pz.m51+=messageBubble(_pz.m41,_pz.dte,_pz.se,_pz.lr,_pz.tg)
		}
		if(_pz.m07.length>mn0)_pz.pr0=`<span
			ontouchend="loadContactMessages(`+(mn0+9)+`)"
			onmouseup="if(!isMobile)loadContactMessages(`+mn0+10+`)"
			style="text-align:center">Load previous</span>`
		$('#chatMessageList').html(`<br>`+_pz.pr0+_pz.m51+`<br><br><br>`)
		if(mn0==9)eScrl(_pz.tg,'center')
		setTimeout(function(){$('#sendMessage').focus()},1200)
	}
}
// Load found or saved contacts
function loadSavedContacts(u0,s0,i){
	if(s0[i].path){
		_pz.n0=''
		if(s0[i].path.includes('assets/models/players')||s0[i].path=='none'){
			_pz.fn=s0[i].model.replace('.glb','')
		}else _pz.fn='onlineAvatar'
		_pz.im=lsRd('profile'+u0[i])
		if(_pz.im==null)_pz.im=`assets/models/players/`+_pz.fn+`.jpg`
		if(onRe.contacts.includes(u0[i])){
			_pz.n0=`<div class="notifyDot" style="margin:4px;z-index:1"></div>`
		}else _pz.n0=''
		_pz.pSC0=orientation==90?_lz.pageScale.landscape:_lz.pageScale.portrait
		$('#contactList').html($('#contactList').html()
			+`<div class="dialogbox dialogBack"
				ontouchend="openContactChat('`+u0[i]+`','`+_pz.fn+`','`+s0[i].name+`')"
				onmouseup="if(!isMobile)openContactChat('`+u0[i]+`','`+_pz.fn+`','`+s0[i].name+`')"
				style="margin:6px;width:`+(62/_pz.pSC0)+`vw;max-width:600px">
				`+_pz.n0+`
				<img class="contactProfileImage" src="`+_pz.im+`"
				onerror="$(this).attr('src','assets/models/players/noprofile.jpg');lsEr('profile`+u0[i]+`')"/>
				<span>`+s0[i].name+`</span>
			</div>`)
	}
}
// Load contacts
function loadContactList(u0,s0,d0){
	if(s0.length>0){
		$('#contactChat').html('')
		$('#contactList').html('')
		for(_pz.iI2=0;_pz.iI2<s0.length;_pz.iI2++){
			if(s0[_pz.iI2]!=null){
				if(s0[_pz.iI2].path=='none'){
					u0=JSON.parse(lsRd('myContacts'+myUserID.uid))
					loadSavedContacts(u0.uid,u0.data,_pz.iI2)
				}else for(_pz.j=0;_pz.j<_mz.meshesData.length;_pz.j++){
					if(_mz.meshesData[_pz.j].name==u0[_pz.iI2]&&isInRange(_mz.meshesData[_pz.j].position,d0))loadSavedContacts(u0,s0,_pz.iI2)
				}
			}
		}
	}
	$('#notifyDot').fadeOut('slow')
	$('#desktopTopLeftIcon').fadeOut('slow')
	if($('#contactList').html()!=''){
		showTouchControls(false)
		$('#dialogWindow').fadeOut('fast')
		$('#userIDWindow').hide()
		$('#contactWindow').show()
		$('#contactList').show()
		$('#optionWindow').fadeIn('slow')
	}else{
		if(!_lz.dynamicJoy){
			_pz.m08=`Explore and find people to talk to`
			if(!isOnL())_pz.m08=`Cannot load contacts, because you're not connected to the internet`
			showDialog('closeby.png',_pz.m08,'','Dismiss',null,null,600)
		}else return true
	}
}
// Load contact gallery
function loadContactGallery(uid,nm){
	showDialog(null,`"`+nm+`" profile photos<div hidden class="dialogbox" style="align-content:stretch;flex-wrap:wrap;max-height:30vh" id="contactGallery"></div>`,'','Dismiss')
	upKey=_ez.engineName.toLowerCase()+'/profile/'+uid+'/'
	upDisp('upPPs','contactGallery',isMobile?'96px':'128px',false)
	setTimeout(function(){
		showDialog(null,`"`+nm+`" has no profile photos`,'','Dismiss')
	},5600)
}
// Open chat contact window
function openContactChat(uid,fn,nm){
	_mz.shoutoutsSelected=true
	initiatives({ name: nm })
	saveNewContact(uid,fn,nm)
	myUserID.contact=uid
	emoL=false
	_pz.im=lsRd('profile'+uid)
	if(_pz.im==null)_pz.im=`assets/models/players/`+fn+`.jpg`
	onFdb(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'messages/'+getPolarity(myUserID.contact))
	for(_pz.iI3=0;_pz.iI3<onRe.contacts.length;_pz.iI3++)if(onRe.contacts[_pz.iI3]==uid)delete onRe.contacts[_pz.iI3]
	onEr(_ez.engineName.toLowerCase()+'/notifications/'+myUserID.uid+'/'+uid)
	$('#contactICON').fadeIn('slow')
	$('#contactList').hide()
	_pz.pSC0=orientation==90?_lz.pageScale.landscape:_lz.pageScale.portrait
	$('#contactChat').html(`
		<div class="dialogbox dialogBack" style="height:`+(56/_pz.pSC0)+`vh;width:`+(60/_pz.pSC0)+`vw;position:absolute;bottom:66px;right:3px;overflow:hidden" id="messageContainer">
			<div style="display:flex;position:fixed">
				<span hidden id="contactModel">`+fn+`</span>
				<img class="chatProfileImage" src="`+_pz.im+`"
					ontouchend="loadContactGallery('`+uid+`','`+nm+`')"
					onmouseup="if(!isMobile)loadContactGallery('`+uid+`','`+nm+`')"
					onerror="$(this).attr('src','assets/models/players/noprofile.jpg');lsEr('profile`+uid+`')"/>
				<span style="margin-left:0px;margin-top:-36px;position:fixed;font-size:24px" id="contactName">`+nm+`</span>
			</div>
			<div class="chatMessageList" id="chatMessageList"></div>
		</div>
		<div class="dialogbox dialogBack" style="width:`+(60/_pz.pSC0)+`vw;position:absolute;bottom:0px;right:3px;overflow:hidden">
			<span id="emojiContainer"></span>
			<div class="dialogbox" style="margin:0px;width:`+(44/_pz.pSC0)+`vw;height:20px">
				<img src="assets/images/emoji.png"
					ontouchend="loadEmojis()"
					onmouseup="if(!isMobile)loadEmojis()"
					style="position:absolute"/>
					<input class="chatInput" type="text"
					ontouchend="$(this).focus()"
					onmouseup="if(!isMobile)$(this).focus()"
					onkeyup="if(event.keyCode===13)sendMessage('`+uid+`')"
					placeholder="Message here..." style="width:`+(48/_pz.pSC0)+`vw;" id="sendMessage"/>
			</div>
			<div class="dialogbox dialogButton" style="padding-left:4px;padding-right:4px;height:20px;position:fixed;bottom:11px;right:6px;overflow:hidden">
				<div class="buttonContainer">
					<span
					ontouchend="sendMessage('`+uid+`')"
					onmouseup="if(!isMobile)sendMessage('`+uid+`')"
					style=""><img src="assets/images/send.png"/></span>
				</div>
			</div>
		</div>`)
		$('#contactChat').fadeIn('fast')
		loadContactMessages(9)
		showTouchControls(false)
}
// ==== EMOJI ====
// Load emojis
function loadEmojis(){
	if($('#emojiContainer').html()==''){
		$('#emojiContainer').html(`<div class="dialogbox" style="margin:0px;margin-bottom:5px;height:40px;overflow:auto" id="emoji-type"></div>`)
		$('#messageContainer').css({height:'41vh',bottom:'133px'})
		$('#chatMessageList').css({height:'40vh'})
		loadEmojiGroup()
	}else{
		$('#emojiContainer').html('')
		$('#messageContainer').css({height:'56vh',bottom:'66px'})
		$('#chatMessageList').css({height:'50vh'})
	}
	setTimeout(function(){$('#sendMessage').focus()},100)
}
// Load emojis
function loadEmojiGroup(){
  _pz.e1=lsRd('recentEmojis'+myUserID.uid)
  if(_pz.e1!=null){
		newEmo()
		$('#emoji').html(emoFm('Recent:none:'+_pz.e1))
	}
  if($('#emoji-type').html()==''){
    _pz.e2=''
		_pz.e1=emojis.split('\n')
    for(_pz.o0=0;_pz.o0<_pz.e1.length;_pz.o0++){
      if(_pz.e1[_pz.o0].includes(':')){
        _pz.em=_pz.e1[_pz.o0].split(':')[1][1]
        _pz.em=`&#x`+_pz.e1[_pz.o0].split(':')[1]
        _pz.e2+=`<a class="mdc-button"
					ontouchend="newEmo();$('#emoji').html(emoFm('`+_pz.e1[_pz.o0]+`'))"
					onmouseup="if(!isMobile){newEmo();$('#emoji').html(emoFm('`+_pz.e1[_pz.o0]+`'))}"
					style="margin:0px;padding:0px;font-size:20px">`+_pz.em+`</a>`
      }
    }
		$('#emoji-type').html(_pz.e2)
  }
}
// Create emojis container
var emoL
function newEmo(){
	if(!emoL){
		emoL=true
		$('#emojiContainer').html(`<div class="dialogbox" style="margin:0px;margin-bottom:5px;height:40px;overflow:auto" id="emoji"></div>`+$('#emojiContainer').html())
		$('#messageContainer').css({height:'25vh',bottom:'200px'})
		$('#chatMessageList').css({height:'28vh'})
	}
	setTimeout(function(){$('#sendMessage').focus()},100)
}
// Display emojis
function emoFm(e0){
	_pz.e2=''
	e0=e0.split(`:`)[2].split(`,`)
  for(_pz.j0=0;_pz.j0<e0.length;_pz.j0++){
    _pz.e1=e0[_pz.j0].split('-')
		if(_pz.e1.length==1)_pz.e1[1]=_pz.e1[0]
    for(_pz.j1=parseInt(_pz.e1[0],16);_pz.j1<=parseInt(_pz.e1[1],16);_pz.j1++){
      _pz.em=_pz.j1.toString(16)[1]
			_pz.f0=`$('#sendMessage').val($('#sendMessage').val()+this.text);saveRecentEmojis(this.text);setTimeout(function(){$('#sendMessage').focus()},100)`
			_pz.em=`&#x`+_pz.j1.toString(16)
      _pz.e2+=`<a class="mdc-button"
				ontouchend="`+_pz.f0+`"
				onmouseup="if(!isMobile){`+_pz.f0+`}"
				style="margin:0px;padding:0px;font-size:20px">`+_pz.em+`</a>`
    }
  }
	return _pz.e2
}
//Save recently used emoji
function saveRecentEmojis(e0){
  _pz.e1=lsRd('recentEmojis'+myUserID.uid)
	if(_pz.e1==null){
		_pz.e1=_pz.br=``
	}else _pz.br=`,`
  _pz.e2=emoHex(e0)
	_pz.e1=_pz.e1.replace(new RegExp(_pz.br+_pz.e2,'gi'),'').replace(new RegExp(_pz.e2+_pz.br,'gi'),'')
	lsSv('recentEmojis'+myUserID.uid,_pz.e2+_pz.br+_pz.e1)
}
//SHOUTOUT
//Send shoutouts
function sendShoutouts(d) {
	onSv(_ez.engineName.toLowerCase()+'/shoutouts/'+(_mz.removeSO=cDtTm())+'/',{
		message:d.message,
		datetime:cNow(),
		name:myUserID.name,
		profile:myUserID.profile,
	})
	onSv('activities/shoutouts/'+(_mz.removeSO=cDtTm())+'/',{
		message:d.message,
		datetime:cNow(),
		name:myUserID.name,
		profile:myUserID.profile,
	})
	_mz.rxShoutouts=_mz.rxShoutouts?_mz.rxShoutouts:[]
	_mz.rxShoutouts.push(_mz.removeSO)
	$('#shoutouts-messages').html($('#shoutouts-messages').html()+`<p id=${_pz.tg=genRan(charString,9)}><strong>${myUserID.name}</strong>: ${d.message}</p>`)
	$('#shoutouts-messages-close').fadeIn('slow')
	$('#shoutouts-messages').fadeIn('slow')
	$('#shoutouts-input').focus()
	$('#shoutouts-input').val('')
	eScrl(_pz.tg,'center')
	setTimeout(()=>{
		onEr(_ez.engineName.toLowerCase()+'/shoutouts/'+_mz.removeSO)
	},3600)
}
//Show shoutouts
function showShoutOuts(d){
	noClickCanvas()
	if($('#shoutouts-messages').html()!=''){
		$('#shoutouts-messages-close').fadeIn('slow')
		$('#shoutouts-messages').fadeIn('slow')
		$('#shoutouts-dot').fadeOut('slow')
	}
}
//Shoutout notify
function shoutoutsNotify(){
	onRd(_ez.engineName.toLowerCase()+'/',['shoutouts'],`receiveShoutouts()`)
}
//Receive Shoutouts
function receiveShoutouts(){
	delete _pz.tg
	_mz.rxShoutouts=_mz.rxShoutouts?_mz.rxShoutouts:[]
	for(_pz.sO0 in onRe.data[0]){
		if(!_mz.rxShoutouts.includes(_pz.sO0)){
			_mz.rxShoutouts.push(_pz.sO0)
			$('#shoutouts-messages').html($('#shoutouts-messages').html()+`<p id=${_pz.tg=genRan(charString,9)}><strong>${onRe.data[0][_pz.sO0].name}</strong>: ${onRe.data[0][_pz.sO0].message}</p>`)
		}
	}
	if(_pz.tg){
		eScrl(_pz.tg,'center')
		if($('#shoutouts-messages').css('display')=='none'){
			$('#shoutouts-dot').fadeIn('slow')
			if(_ez.sound)loadAudio('interface','notify',1,false,true)
		}
	}
}