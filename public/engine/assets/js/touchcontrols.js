// ==== UI OPERATIONS ====
// Load keyboard controls
function loadKeyControls(){
	if(!_cz.keyboard){
		_cz.keyboard={shift:false,walk:0,stir:0,yaw:0,elev:0}
		function desktopKeyDown(dK){
			if(_mz.shoutoutsSelected)return
			if(dK.keyCode==190)toggleWireFrame()
			if(dK.keyCode==191)toggleWireFrame(true)
			if(dK.keyCode==87||dK.keyCode==38&&_cz.keyboard.walk==0)_cz.keyboard.walk=_mz.driveVehicleIndex[_lz.index]!=null?36:18
			if(dK.keyCode==83||dK.keyCode==40&&_cz.keyboard.walk==0)_cz.keyboard.walk=_mz.driveVehicleIndex[_lz.index]!=null?-36:-18
			_pz.redStir=(_cz.keyboard.walk<0?_cz.keyboard.walk*-1:_cz.keyboard.walk)/200+1
			if(dK.keyCode==65||dK.keyCode==37&&_cz.keyboard.stir==0)_cz.keyboard.stir=_mz.driveVehicleIndex[_lz.index]!=null?-50/_pz.redStir:-30
			if(dK.keyCode==68||dK.keyCode==39&&_cz.keyboard.stir==0)_cz.keyboard.stir=_mz.driveVehicleIndex[_lz.index]!=null?50/_pz.redStir:30
			if(dK.keyCode==81||dK.keyCode==46&&_cz.keyboard.yaw==0)_cz.keyboard.yaw=-14
			if(dK.keyCode==69||dK.keyCode==34&&_cz.keyboard.yaw==0)_cz.keyboard.yaw=14
			if(dK.keyCode==219||dK.keyCode==35&&_cz.keyboard.elev==0)_cz.keyboard.elev=-5
			if(dK.keyCode==221||dK.keyCode==36&&_cz.keyboard.elev==0)_cz.keyboard.elev=5
			// Shift
			if(_cz.keyboard.shift){
				if(_cz.keyboard.walk>0&&_cz.keyboard.walk<50)_cz.keyboard.walk=_mz.driveVehicleIndex[_lz.index]!=null?86:50
				if(_cz.keyboard.walk<0&&_cz.keyboard.walk>-50)_cz.keyboard.walk=_mz.driveVehicleIndex[_lz.index]!=null?-86:-50
				if(_mz.driveVehicleIndex[_lz.index]==null){
					if(_cz.keyboard.stir>0&&_cz.keyboard.stir<20)_cz.keyboard.stir=20
					if(_cz.keyboard.stir<0&&_cz.keyboard.stir>-20)_cz.keyboard.stir=-20
				}
				if(_cz.keyboard.yaw<0&&_cz.keyboard.yaw>-50)_cz.keyboard.yaw=-50
				if(_cz.keyboard.yaw>0&&_cz.keyboard.yaw<50)_cz.keyboard.yaw=50
				if(_cz.keyboard.elev<0&&_cz.keyboard.elev>-14)_cz.keyboard.elev=-14
				if(_cz.keyboard.elev>0&&_cz.keyboard.elev<14)_cz.keyboard.elev=14
			}
			// Increment
			if(_cz.keyboard.walk!=0)_cz.keyboard.walk+=_cz.keyboard.walk/50
			if(_cz.keyboard.stir!=0)_cz.keyboard.stir+=_cz.keyboard.stir/50
			if(_cz.keyboard.yaw!=0)_cz.keyboard.yaw+=_cz.keyboard.yaw/50
			if(_cz.keyboard.elev!=0)_cz.keyboard.elev+=_cz.keyboard.elev/50
			// Filter
			if(_cz.keyboard.walk>100)_cz.keyboard.walk=100
			if(_cz.keyboard.walk<-100)_cz.keyboard.walk=-100
			if(_cz.keyboard.stir>100)_cz.keyboard.stir=100
			if(_cz.keyboard.stir<-100)_cz.keyboard.stir=-100
			if(_cz.keyboard.yaw>100)_cz.keyboard.yaw=100
			if(_cz.keyboard.yaw<-100)_cz.keyboard.yaw=-100
			if(_cz.keyboard.elev>100)_cz.keyboard.elev=100
			if(_cz.keyboard.elev<-100)_cz.keyboard.elev=-100
			if(_ez.transformControls){
				if(!_cz.keyboard.ctrl){
					if(dK.keyCode==82)switchTransformOrbit(false) // R Move
					if(dK.keyCode==84)switchTransformOrbit(true) // T Orbit
					if(dK.keyCode==88)_ez.transformControls.showX=!_ez.transformControls.showX // Show X
					if(dK.keyCode==89)_ez.transformControls.showZ=!_ez.transformControls.showZ // Show Y
					if(dK.keyCode==90)_ez.transformControls.showY=!_ez.transformControls.showY // Show Z
					if(dK.keyCode==27)disableTransformControl() // Esc
					if(dK.keyCode==46)opActionRemove() // Delete
				}else{
					if(dK.keyCode==90){ // Undo edit
						if(_ez.editActivity.length>0){
							_pz.mesh=_ez.editActivity[_ez.editActivity.length-1]
							_pz.kM0=_ez.scene.getObjectByProperty('obID',_pz.mesh.obID)
							_pz.kM0.position.copy(_pz.mesh.position)
							_pz.kM0.quaternion.copy(_pz.mesh.quaternion)
							saveObjectTransform(_pz.kM0)
							return
						}
					}
				}
			}
			if(dK.keyCode==86)opStickedgeRIGHT(true) // Switch camera
			if(dK.keyCode==(_mz.driveVehicleIndex[_lz.index]!=null?71:32))opSticktopRIGHT(true) // Jump
			if(dK.keyCode==(_mz.driveVehicleIndex[_lz.index]!=null?32:71)){ // Waving start
				if(!_cz.waving)opSticksideLEFT(true)
				_cz.waving=true
			}
			if(dK.keyCode==17)_cz.keyboard.ctrl=true // Ctrl start
			if(dK.keyCode==16)_cz.keyboard.shift=true // Shift start
			if(_oz.target.length>0)_oz.target[_lz.index]='notarget'
			manageSoundOnMove()
		}
		function desktopKeyUp(dK){
			if(dK.keyCode==17)_cz.keyboard.ctrl=false // Ctrl end
			if(dK.keyCode==16)_cz.keyboard.shift=false // Shift end
			if(dK.keyCode==87||dK.keyCode==38||dK.keyCode==83||dK.keyCode==40)_cz.keyboard.walk=0
			if(dK.keyCode==65||dK.keyCode==37||dK.keyCode==68||dK.keyCode==39)_cz.keyboard.stir=0
			if(dK.keyCode==81||dK.keyCode==69||dK.keyCode==46||dK.keyCode==34)_cz.keyboard.yaw=0
			if(dK.keyCode==221||dK.keyCode==219||dK.keyCode==36||dK.keyCode==35)_cz.keyboard.elev=0
			if(dK.keyCode==(_mz.driveVehicleIndex[_lz.index]!=null?32:71)){ // Waving end
				delete _cz.waving
				opSticksideLEFT(false)
			}
		}
		window.addEventListener('keydown',desktopKeyDown,false)
		window.addEventListener('keyup',desktopKeyUp,false)
		if(_mz.driveVehicleIndex[_lz.index]==null){
			createTouchButton('woodclick','topLeftNextAIconMENU',{icon:'ti-camera',name:'camera'},undefined,'icon')
			createTouchButton('bounceclick','topLeftNextBIconMENU',{icon:'ti-comment',name:'chat'},undefined,'icon')
		}
	}else hideMenu()
	_pz.health=$('#healthFill').css('width')
	_pz.stamina=$('#staminaFill').css('width')
	$('#vitalIndicators').html(loadVitalIndiocators(isMobile&&!_lz.dynamicJoy?'topLeftIcon':'topLeftNextAIcon'))
	$('#healthFill').css('width',_pz.health)
	$('#staminaFill').css('width',_pz.stamina)
	if(_mz.loaded==0){
		if(!isMobile){
			$('#mobileControlLEFT').hide()
			$('#mobileControlRIGHT').hide()
			$('#desktopTopLeftIcon').show()
			$('#topLeftNextAIconMENU').show()
			$('#topLeftNextBIconMENU').show()
			$('#dynamic-joystick').html('')
			_cz.keyboard.enable=true
		}else{
			if(!_lz.dynamicJoy){
				$('#mobileControlLEFT').show()
				$('#mobileControlRIGHT').show()
				$('#desktopTopLeftIcon').hide()
			}else{
				loadJoyStick(_lz.dynamicJoy)
				$('#desktopTopLeftIcon').show()
			}
			$('#topLeftNextAIconMENU').hide()
			$('#topLeftNextBIconMENU').hide()
			if(_cz.keyboard)_cz.keyboard.enable=false
		}
	}bottomActionButtons()
}
// Toggle wireframe
function toggleWireFrame(c){
	_ez.scene.traverse(function (child){
		if (child.isMesh)child.material.wireframe=c
	})
}
// Switch transform gizmo
function switchTransformOrbit(c0){
	_ez.transformControlsMode=c0
	_ez.transformControls.setMode(!c0?'translate':'rotate')
	transformControlsSettings()
	createTouchButton('shortclick',_lz.dynamicJoy?'bottomLeftThirdIcon':'actionLeftIconB',_lz.dynamicJoy?{icon:!c0?'ti-reload':'ti-move',name:!c0?'actionRotate':'actionMove'}:!c0?'actionRotate':'actionMove',undefined,_lz.dynamicJoy?'icon':'png',!c0?'actnecessary.gif':'actpriority.gif',.36)
	createTouchButton('shortclick',_lz.dynamicJoy?'bottomLeftSecondIcon':'actionLeftIconA',_lz.dynamicJoy?{icon:'ti-trash',name:'actionRemove'}:'actionRemove',undefined,_lz.dynamicJoy?'icon':'png','actbeneficial.gif',.36)
}
// Gizmo settings
function transformControlsSettings(){
	_ez.transformControls.castShadow=true
	_ez.transformControls.receiveShadow=true
	_ez.transformControls.showX=_ez.transformControlsMode?false:true
	_ez.transformControls.showY=_ez.transformControlsMode?true:false
	_ez.transformControls.showZ=_ez.transformControlsMode?false:true
}
// Bottom action buttons
function bottomActionButtons(){
	_ez.bottomIcon=!isMobile||(isMobile&&_lz.dynamicJoy)
	if(_ez.bottomIcon){
		createTouchButton('shortclick','bottomRightIcon','actionCamera',undefined,'png','actoptional.gif',.36)
		createTouchButton('shortclick',_lz.dynamicJoy?'bottomRightSecondIcon':'actionRightIconA','actionTalk',undefined,'png','actoptional.gif',.36)
		createTouchButton('shortclick',_lz.dynamicJoy?'bottomRightThirdIcon':'actionRightIconB','actionFacebook',undefined,'png','actoptional.gif',.36)
		createTouchButton('shortclick',_lz.dynamicJoy?'bottomLeftSecondIcon':'actionLeftIconA','actionGit',undefined,'png','actoptional.gif',.36)
		if(_mz.driveVehicleIndex[_lz.index]==null){
			createTouchButton('bounceclick','bottomRightNextAIcon',{icon:'ti-upload',name:'actionJump'},undefined,'icon','actbeneficial.gif',.36)
			createTouchButton(null,'bottomLeftIcon',{icon:'ti-hand-open',name:'actionWaving'},['double'],'icon','actcretical.gif',.36)
			$('#bottomLeftNextAIcon').html('')
		}else{
			createTouchButton('bounceclick','bottomLeftNextAIcon','actionWalk',undefined,'png','actbeneficial.gif',.36)
			createTouchButton(null,'bottomLeftIcon',{icon:'ti-volume',name:'actionHorn'},['double'],'icon','actpriority.gif',.36)
			createTouchButton(null,'bottomRightNextAIcon',{icon:'ti-control-pause',name:'actionBrake'},['double'],'icon','actcretical.gif',.36)
		}
	}
}
// Show left options
function opStickedgeLEFT(c0){
	if(c0){
		if($('#menuOption').css('display')=='none')showMenu()
		hideMenuTimer(9)
	}
}
// Show camera options
function opSticktopLEFT(c0){
	if(c0){
		if(_cz.stickState=='avatar'){
			$('#walletICON').fadeOut('fast')
			$('#tradingICON').html('')
			$('#contactICON').fadeOut('fast')
			$('#menuOption').fadeOut('slow')
			$('#indicatorBars').fadeOut('fast')
			$('#screenTarget').fadeIn('fast')
			$('#takeSnap').fadeIn('slow')
			$('#snapCont').show()
			$('#cameraOption').fadeIn('slow')
			setTimeout(function(){
				$('#screenTarget').fadeOut('slow')
			},2400)
			hideActButtons()
			hideMenuTimer(6)
		}else if(_cz.mySeat[_lz.index]==0){
			if(_mz.vehicleMotor[_mz.driveVehicleIndex[_lz.index]].gear<7){
				_mz.vehicleMotor[_mz.driveVehicleIndex[_lz.index]].gear++
				loadAudio('interface','click',1,false,true)
				showGearLevel()
			}
		}
	}
}
// Waving
function opSticksideLEFT(c0){
	if(c0){
		if(_cz.stickState=='avatar'){
			_pz.wAct='Waving'
			_pz.l0=false
			updateActivity('wave')
		}else applyBrake(_lz.index,c0)
	}else{
		if(_cz.stickState=='avatar'){
			_pz.wAct=randomString(_mz.standIdle)
			_pz.l0=true
			updateActivity('halt')
		}else applyBrake(_lz.index,c0)
	}
	if(_cz.stickState=='avatar'){
		if(_cz.onfloor[_lz.index])loadFBXAnim(_pz.wAct+'.fbx',_ez.scene.children[_mz.meshIndex[_lz.index]],_lz.index,false,_pz.l0)
	}
}
// Switch camera
function opStickedgeRIGHT(c0,i){
	if(i!==undefined){
		if(_ez.camLastIndex===undefined)_ez.camLastIndex=_ez.cameraIndex
		_ez.cameraIndex=i
	}else if(_ez.camLastIndex!==undefined){
		_ez.cameraIndex=_ez.camLastIndex-1
		_ez.camLastIndex=i
	}
	if(c0){
		if(_ez.cameraIndex==_cz.player.children.length-1){
			if(_ez.enableGyro||!isMobile){
				_ez.cameraIndex=0
				_ez.orbitControl.enabled=true
				enableGyro(false)
			}else enableGyro(true)
		}else{
			_ez.cameraIndex++
			if(_ez.cameraIndex==_cz.player.children.length-2){
				if(_mz.driveVehicleIndex[_lz.index]!=null){
					_ez.animation.previous[_lz.index]='Driving'
				}else if(!_cz.onfloor[_lz.index])_ez.animation.previous[_lz.index]='JumpingUp'
				loadFBXAnim(_ez.animation.previous[_lz.index]+'.fbx',_ez.scene.children[_mz.meshIndex[_lz.index]],_lz.index,false,true)
			}
		}
		if($('#dynamic-joystick').html()==''&&isMobile&&_lz.dynamicJoy)loadJoyStick(_lz.dynamicJoy)
		if(_ez.cameraIndex==_cz.player.children.length-1||!isNoOverview()){
			if(!isMobile){
				_ez.camera.zoom=1
				_ez.camera.updateProjectionMatrix()
				_ez.orbitControl.enableZoom=true
			}
			_ez.lookElevation=.72
			_ez.orbitControl.maxPolarAngle=Math.PI
			if($('#bottomLeftSecondIcon').html()==''){
				if(isMobile&&_lz.dynamicJoy&&!_ez.transformControls)createTouchButton('shortclick',_lz.dynamicJoy?'bottomLeftSecondIcon':'actionLeftIconA','actionOrbit',undefined,'png','actoptional.gif',.36)
			}else $('#bottomLeftSecondIcon').html('')
		}else{
			$('#bottomLeftSecondIcon').html('')
			if(!isMobile)_ez.orbitControl.enableZoom=false
			_ez.lookElevation=_ez.cameraIndex==3?orientation==0?-.47:-.54:0
			_ez.orbitControl.maxPolarAngle=Math.PI*.495
			_pz.cL0=_ez.cameraIndex==1?76:20
			if(_ez.camera.zoom>_pz.cL0){
				_ez.camera.zoom=_pz.cL0
				_ez.camera.updateProjectionMatrix()
			}
		}
		cameraCSM(_lz.cameraCSM)
		hideMyMesh()
		lsSv('myCamera'+myUserID.uid,JSON.stringify({index:_ez.cameraIndex,pixelRatio:_ez.pixelRatio,max:_lz.dePixelation.max}))
	}
}
// Jump
function opSticktopRIGHT(c0){
	if(c0){
		if(_cz.stickState=='avatar'){
			if(_cz.jumpRate==1)stopWalkSound()
			if(_cz.jumpRate<_lz.maxJump)_cz.jumpRate+=.2/_cz.jumpRate
			if(!_ez.stick.jumpLD[_lz.index]){
				_ez.stick.jumpLD[_lz.index]=true
				setTimeout(function(){
					updateActivity('jump')
					setTimeout(function(){
						updateActivity('halt')
					},1200)
				},300)
			}
		}else switchDriving(_lz.index,false)
	}
}
// Contact
function opSticksideRIGHT(c0){
	if(c0){
		if(_cz.stickState=='avatar'){
			hideMenu()
			$('#walletICON').fadeOut('fast')
			$('#tradingICON').html('')
			$('#indicatorBars').fadeOut('fast')
			$('#contactICON').fadeIn('slow')
			hideActButtons()
		}else if(_cz.mySeat[_lz.index]==0){
			loadAudio('vehicle','carhornhonk',1,false,true,_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[_lz.index]]])
			updateActivity('horn')
		}
	}else{
		if(_cz.stickState!='avatar'){
			loadAudio('vehicle','carhornhonk',0,false,false)
			updateActivity('hornstop')
		}
	}
}
// Switch to day time
function opSwitchDay(){
	createTouchButton('shortclick','topRightNextCIconMENU',{icon:'ti-star',name:'switchNight'},undefined,'icon')
	if(_ez.sunShadowParameters.elevation>180){
		delete _ez.underFog
		_ez.sunShadowParameters.elevation-=180
		updateSun()
		playAnimSounds('ambience')
	}
	hideOpTm=6
}
// Switch to night time
function opSwitchNight(){
	createTouchButton('shortclick','topRightNextCIconMENU',{icon:'ti-shine',name:'switchDay'},undefined,'icon')
	if(_ez.sunShadowParameters.elevation<180){
		delete _ez.underFog
		_ez.sunShadowParameters.elevation+=180
		updateSun()
		playAnimSounds('ambience')
	}
	hideOpTm=6
}
// Wallet icon
function opAddToList(){
	setTimeout(function(){
		showProcurementList()
	},1000)
	hideOpTm=0
}
// Wallet icon
function opTradingNow(){
	setTimeout(function(){
		showTouchControls(false)
		showDialog('trading.png',`You are awaiting <strong>υς`+iCommas(_lz.gameRules.sellOutAmount.toFixed(2))+`</strong> worth of cash in`,'','Dismiss')
	},1000)
	hideOpTm=0
}
// Wallet icon
function opMyWallet(){
	setTimeout(function(){
		showTouchControls(false)
		showDialog('wallet.png',`Your have <strong>υς`+$('#walletAmount').text()+`</strong> in your wallet`,'','Dismiss')
	},1000)
	hideOpTm=0
}
// Leader board
function opLeaderBoard(){
	setTimeout(function(){
		showTouchControls(false)
		if(isOnL()){
			onRd(_ez.engineName.toLowerCase()+'/leaderboard/',['survivor'],`loadLeaderBoard()`)
		}else loadLeaderBoard()
	},1000)
	hideOpTm=0
}
// My mission
function opMyMission(){
	setTimeout(function(){
		showTouchControls(false)
		showDialog('myObjective.png',_lz.mission+'<br>'+_lz.task,`lsSv('instruction'+myUserID.uid+_lz.levelName,'done')`,lsRd('instruction'+myUserID.uid+_lz.levelName)==null?'Understood':'Dismiss')
	},1000)
	hideOpTm=0
}
// My chat messages
function opMyChat(){
	setTimeout(function(){
		if(_lz.dynamicJoy){
			if(loadContactList(_oz.uid,_oz.target,_lz.talkRange)){
				if(lsRd('myContacts'+myUserID.uid)){
					isMyContacts(JSON.stringify(_oz.myContacts),'uid')
					loadContactList(_oz.myContacts.uid,_oz.myContacts.data,_lz.talkRange)
				}
			}
		}else{
			showTouchControls(false)
			f0=`loadContactList(_oz.uid,_oz.target,_lz.talkRange)`
			f1=`isMyContacts(JSON.stringify(_oz.myContacts),'uid');loadContactList(_oz.myContacts.uid,_oz.myContacts.data,_lz.talkRange)`
			showDialog('closeby.png',`Do you wish to find new players to talk to, or view recent contacts?`,f0,'Find New',f1,'Recent Contacts')
		}
	},1000)
	hideOpTm=0
}
// Back in
function opBackIN(){
	delete _mz.shoutoutsSelected
	goBack()
}
// Back out
function opBackOUT(){
	goBack()
}
// Back vr
function opBackVR(){
	goBack()
}
// Back out
function goBack(){
	if($('#optionWindow').css('display')!='none'){
		if(myUserID.name=='Noname'&&$('#userIDWindow').css('display')=='none')opUserID()
		if(myUserID.contact!=null){
			if(isMultiplayer()&&isOnL())ofFdb(_ez.engineName.toLowerCase()+'/'+_lz.levelName+'messages/'+getPolarity(myUserID.contact))
			myUserID.contact=null
		}
		$('#contactWindow').hide()
		showTouchControls(true)
		hideOpTm=6
		showMenu()
	}else{
		hideOpTm=20
		setTimeout(function(){
			showDialog('signout.png',
			`Do you want to leave "`+_lz.title+`"?`,
			`leaveLevel()`,
			'Leave')
		},300)
	}
}
// My character
function opMyCharacter(){
	if(_mz.loaded==0&&_ez.cameraIndex!=3)opStickedgeRIGHT(true,2)
	loadAvatarList()
	setTimeout(function(){
		showTouchControls(false)
		$('#userIDWindow').hide()
		$('#avatarLibrary').fadeIn('slow')
		$('#optionWindow').fadeIn('slow')
		if(!isMobile)setTimeout(function(){$('#avatarLink').focus()},100)
	},1000)
	hideOpTm=0
}
// Replay
function opReplayIN(c0){
	if(_lz.mortality=='dead'){
		deadExitOption()
	}else if(_lz.mortality=='hurt'){
		hospitalizeMeOption()
	}else if(_lz.mortality=='wakeup'){
		wakeMeUp()
	}else{
		if(_ez.cameraIndex==_cz.player.children.length-1)_ez.cameraIndex=_cz.player.children.length-2
		if(!c0)showTouchControls(false)
		if(!c0)getSpawnPosition(_lz.spawn,false)
		if(_mz.driveVehicleIndex[_lz.index]==null){
			if(_cz.alive[_lz.index]){
				$('#loadingFill').css('width','10%')
				$('#loadingBar').fadeIn('fast')
				_pz.act=randomString(_mz.standIdle)
			}else _pz.act='GettingUp'
			_ez.animation.previous[_lz.index]=_pz.act
			_cz.alive[_lz.index]=true
			loadFBXAnim(_pz.act+'.fbx',_ez.scene.children[_mz.meshIndex[_lz.index]],_lz.index,false,true)
			setMyPosition(_lz.index)
		}else{
			_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[_lz.index]]].rotation.x=0
			_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[_lz.index]]].rotation.z=0
			_mz.vehicle[_mz.driveVehicleIndex[_lz.index]].chassisBody.quaternion.copy(_ez.scene.children[_mz.chassisMeshIndex[_mz.driveVehicleIndex[_lz.index]]].quaternion)
			_mz.vehicle[_mz.driveVehicleIndex[_lz.index]].chassisBody.velocity.set(0,0,0)
			_mz.vehicle[_mz.driveVehicleIndex[_lz.index]].chassisBody.angularVelocity.set(0,0,0)
			_mz.vehicle[_mz.driveVehicleIndex[_lz.index]].chassisBody.position.set(_lz.position.x,_lz.position.y+1,_lz.position.z)
		}
		setTimeout(function(){
			$('#loadingFill').css('width','100%')
			setTimeout(function(){
				if(!c0)showTouchControls(true)
				stopWalkSound()
				updateActivity('halt')
			},1200)
		},900)
	}
}
// HD High
function opHdHigh(){
	showDialog('shadow.png',`You have set graphics to <strong>enabled shadow</strong>, do you wish enable the shadow now?`,`lsEr('hdLow');lsSv('reset','reset');haltF=true;reloadLevel(_lz.levelName)`,'Enable',null,null,1200)
	createTouchButton('bounceclick','topRightNextASecondIcon',{icon:'ti-stats-down',name:'hdLow'},undefined,'icon')
	hideOpTm=0
}
// HD Low
function opHdLow(){
	showDialog('noshadow.png',`You have set graphics to <strong>disabled shadow</strong>, do you wish disable the shadow now?`,`lsSv('hdLow','low');lsSv('reset','reset');reloadLevel(_lz.levelName)`,'Disable',null,null,1200)
	createTouchButton('menubuttonclick','topRightNextASecondIcon',{icon:'ti-stats-up',name:'hdHigh'},undefined,'icon')
	hideOpTm=0
}
// No vr
function opNoVR(e,c0){
	if(!c0){
		lsEr('goVR')
		isVR(true)
		// _ez.camera=virtualCamera(returnConstant('stereoEffect',_ez.renderer),_lz.effectController)
	}
}
// Go vr
function opGoVR(e,c0){
	if(!c0){
		lsSv('goVR',true)
		isVR(true)
		// _ez.camera=virtualCamera(returnConstant('stereoEffect',_ez.renderer),_lz.effectController)
	}
}
// Option zoom near
function opZoomNEAR(){
	_pz.cL0=_ez.cameraIndex==1?76:20
	if(_ez.camera.zoom<_pz.cL0){
		_ez.camera.zoom+=_ez.camera.zoom*.25
	}else _ez.camera.zoom=_pz.cL0
	_ez.camera.updateProjectionMatrix()
	showProgress(_ez.camera.zoom*2+'%','#61c4b0','Zoom',true)
	hideOpTm=6
}
// Option zoom far
function opZoomFAR(){
	if(_ez.camera.zoom>1){
		_ez.camera.zoom-=_ez.camera.zoom*.25
		_ez.camera.updateProjectionMatrix()
	}
	showProgress(_ez.camera.zoom*2+'%','#61c4b0','Zoom',true)
	hideOpTm=6
}
// Option fov up
function opFovUP(){
	if(_ez.camera.fov<_lz.camera.max){
		if(_ez.effect)_ez.effect.uniforms["strength"].value+=.09
		_ez.camera.fov+=9
		_ez.camera.updateProjectionMatrix()
	}
	showProgress(_ez.camera.fov/_lz.camera.max*100+'%','#61c6c0','Lens',true)
	hideOpTm=6
}
// Option fov down
function opFovDOWN(){
	if(_ez.camera.fov>_lz.camera.min){
		if(_ez.effect)_ez.effect.uniforms["strength"].value-=.09
		_ez.camera.fov-=9
		_ez.camera.updateProjectionMatrix()
	}
	showProgress(_ez.camera.fov/_lz.camera.max*100+'%','#61c6c0','Lens',true)
	hideOpTm=6
}
// Option exposure up
function opExposureUP(){
	if(_ez.renderer.toneMappingExposure<4){
		_ez.renderer.toneMappingExposure+=.025
	}
	showProgress(_ez.renderer.toneMappingExposure/4*100+'%','#61c8d0','Shutter',true)
	hideOpTm=6
}
// Option exposure down
function opExposureDOWN(){
	if(_ez.renderer.toneMappingExposure>.025){
		_ez.renderer.toneMappingExposure-=.025
	}
	showProgress(_ez.renderer.toneMappingExposure/4*100+'%','#61c8d0','Shutter',true)
	hideOpTm=6
}
// Option pixel up
function opOptionPixelUP(){
	if(_ez.pixelRatio>1.25){
		_ez.pixelRatio-=.25
		_ez.renderer.setPixelRatio(_lz.dePixelation.max/_ez.pixelRatio)
	}
	showProgress((10-_ez.pixelRatio+1.25)*10+'%','#61cae0','Quality',true)
	lsSv('myCamera'+myUserID.uid,JSON.stringify({
		index:_ez.cameraIndex,
		pixelRatio:_ez.pixelRatio,
		max:_lz.dePixelation.max
	}))
	hideOpTm=6
}
// option pixel down
function opOptionPixelDOWN(){
	if(_ez.pixelRatio<10){
		_ez.pixelRatio+=.25
		_ez.renderer.setPixelRatio(_lz.dePixelation.max/_ez.pixelRatio)
	}
	showProgress((10-_ez.pixelRatio+1)*10+'%','#61cae0','Quality',true)
	lsSv('myCamera'+myUserID.uid,JSON.stringify({
		index:_ez.cameraIndex,
		pixelRatio:_ez.pixelRatio,
		max:_lz.dePixelation.max
	}))
	hideOpTm=6
}
// Turn on webcam
function opOnAR(c0){
	if(!c0){
		_ez.cubeTexture=_ez.scene.background
		playWebcam('webcam','environment')
		createTouchButton('menubuttonclick','loadingTopRightIcon',{icon:'ti-layout-slider-alt',name:'offAR'},undefined,'icon')
		$('#loadingTopRightIcon').fadeIn('slow')
		if(_lz.sky)_ez.scene.getObjectByName('sky').visible=false
		if(_lz.water)_ez.scene.getObjectByName('water').visible=false
		_ez.renderer.toneMappingExposure+=_lz.exposureAR
	}
}
// Turn on webcam
function opOffAR(c0){
	if(!c0){
		if(_lz.sky)_ez.scene.getObjectByName('sky').visible=true
		if(_lz.water)_ez.scene.getObjectByName('water').visible=true
		createTouchButton('menubuttonclick','loadingTopRightIcon',{icon:'ti-layout-slider',name:'onAR'},undefined,'icon')
		_ez.renderer.toneMappingExposure-=_lz.exposureAR
		try{
			_ez.webcam.stop()
		}catch(err){}
		_ez.scene.background=_ez.cubeTexture
	}
}
// Maximize
function opMaximize(c0){
	if(!c0){
		createTouchButton('bounceclick','topRightNextBIcon',{icon:'ti-layout-tab-window',name:'minimize'},undefined,'icon')
		fullscreen(true)
		$('#loadingTopRightIcon').fadeOut('slow')
	}
	hideOpTm=6
}
// Minimize
function opMinimize(c0){
	if(!c0){
		createTouchButton('bounceclick','topRightNextBIcon',{icon:'ti-fullscreen',name:'maximize'},undefined,'icon')
		fullscreen(false)
	}
	hideOpTm=6
}
// Menu
function opMenu(c0){
	if(!c0){
		opStickedgeLEFT(true)
	}
}
// Camera
function opCamera(c0){
	if(!c0){
		opSticktopLEFT(true)
	}
}
// Chat
function opChat(c0){
	if(!c0){
		opSticksideRIGHT(true)
	}
}
// Take snap
let snaplink=document.createElement('a')
snaplink.setAttribute('target','_blank')
function opTakeSnap(){
	loadAudio('interface','shutter',1,false,true)
	render()
	snaplink.setAttribute('download','Snap'+cDtTm()+'.jpg')
	snaplink.setAttribute('href',_ez.renderer.domElement.toDataURL())
	snaplink.click()
	$('#screenTarget').fadeIn('fast')
	savePosition(_lz.index)
	hideOpTm=6
}
// Stick halt
function opStickcontrolballLEFT(c0){
	manageSoundOnMove()
}
// Stick halt
function opStickcontrolballRIGHT(c0){
	manageSoundOnMove()
}
// Manage sound on move
function manageSoundOnMove(){
	try{
		if(_mz.loaded==0){
			if(_ez.stick.stickLD[_lz.index]!='C'||_ez.stick.stickRD[_lz.index]!='C'){
				if(_ez.stick.stickLD[_lz.index]=='C')stopWalkSound()
			}else showIndicators()
		}
	}catch(err){}
	if(_oz.target.length>0)_oz.target[_lz.index]='notarget'
}
// Wake up
function opWakeUp(){
  delete _lz.prevHealthFill
	delete _lz.mortality
  savePosition(_lz.index)
  opReplayIN(true)
  _ez.cameraIndex=0
  $('#wakeUp').fadeOut('slow')
  setTimeout(function(){
    $('#sleep').hide()
  },10)
	loadAudio('loop','sleeptalking',0,false,false)
	if(parseFloat($('#healthFill').css('width'))/parseFloat($('#healthBar').css('width'))>.9){
		loadAudio('game','charm',1,false,true)
	}else if(parseFloat($('#healthFill').css('width'))/parseFloat($('#healthBar').css('width'))>.5){
		loadAudio('game','powerupsuccess',1,false,true)
	}else loadAudio('game','lowhealth',1,false,true)
}
// Sleep
function opSleep(h0){
  _lz.mortality='sleep'
	_ez.cameraIndex=0
  if(h0){
    _ez.scene.children[_mz.meshIndex[_lz.index]].visible=true
    getSpawnPosition([
			{
				x:_lz.position.x,
				y:_lz.position.y,
				z:_lz.position.z,
				o:_lz.position.y,
				s:.1
			}
		],null)
  }
  setMyPosition(_lz.index)
  setTimeout(function(){
    savePosition(_lz.index)
		_ez.animation.previous[_lz.index]='none'
    _pz.act='LayingIdle'
    loadFBXAnim(_pz.act+'.fbx',_ez.scene.children[_mz.meshIndex[_lz.index]],_lz.index,false,false)
    _cz.alive[_lz.index]=null
  },100)
  $('#sleep').fadeOut('slow')
	loadAudio('game','lyingonbed',1,false,true)
	setTimeout(function(){
		createTouchButton('softbuttonclick',_ez.bottomIcon?'bottomLeftSecondIcon':'actionRightIconA',{icon:'ti-alarm-clock',name:'wakeUp'},undefined,'icon','actbeneficial.gif',.36)
		loadAudio('loop','sleeptalking',1,true,true)
	},2400)
	stopWalkSound()
}
// Enter door
function opEnterDoor(){
  if(myUserID.name!='Noname'||true){
		_lz.exposure=_ez.renderer.toneMappingExposure=_ez.reLocation[_ez.objectSelect].indoor.exposure+(_ez.webcam&&_ez.scene.getObjectByName('sky').visible==false?_lz.exposureAR:0)
		_ez.cameraIndex=0
		$('#'+_ez.tCanvas.id+'-cont').fadeTo('slow',.05,function(){
			getSpawnPosition([_ez.reLocation[_ez.objectSelect].relocation],null)
	    setMyPosition(_lz.index,300)
		})
		stopWalkSound()
  }else showDialog('userProfile.png','You do not have a profile to enter the property. Do you wish to create your profile?','opUserID()','Create')
  $('#enterDoor').fadeOut('slow')
}
// Head light
function opHeadLight(){
	if(!_lz.vehicleSignal.lightOn){
		_lz.vehicleSignal.lightOn=true
	}else _lz.vehicleSignal.lightOn=undefined
	setCarMaterial(_lz.index,_lz.vehicleSignal.lightOn,_lz.vehicleSignal.light)
}
// Drive vehicle
function opDriveVehicle(){
	if(meAndF&&isOnL()&&!_ez.objectActivity[_lz.gameRules.testDriveIndex].activity.amountRange&&Math.floor(Math.random()*2)==1){
		_lz.gameRules.process={
			reward:'testdrive'
		}
	  requestRewardedAds()
	}else switchDriving(_lz.index,true)
}
// Buy property
function opActionBuyProperty(){
	addToProcure(_lz.buyList.type,_lz.buyList.title,_lz.buyList.item,_lz.buyList.serial)
}
// Debt
function opNoWaiting(){
	requestRewardedAds()
}
// Debt
function opDebt(){
  performAction('debt')
}
// Loan
function opLoan(){
  performAction('loan')
}
// Deal
function opDeal(){
  performAction('deal')
}
// Opportunity
function opOpportunity(){
  performAction('opportunity')
}
// Take job
function opTakeJob(){
  performAction('takeJob')
}
// Work job
function opWorkJob(){
  performAction('workJob')
}
// Pay it
function opPayIT(){
  performAction('payIT')
}
// Take it
function opTakeIT(){
  performAction('takeIT')
}
// Widrawal
function opWidrawal(){
  performAction('widrawal')
	loadAudio('game','keypad',_ez.cameraIndex<_cz.player.children.length-2?1:.2,false,true)
}
// ==== BOTTOM ACTION BUTTONS ====
// Switch camera
function opActionCamera(c0){
	if(!c0)opStickedgeRIGHT(true)
}
// Jump
function opActionJump(c0){
	if(!c0)opSticktopRIGHT(true)
}
// Walk
function opActionWalk(c0){
	if(!c0)opSticktopRIGHT(true)
}
// Waving
function opActionWaving(c0){
	opSticksideLEFT(c0)
}
// Brake
function opActionBrake(c0){
	opSticksideLEFT(c0)
}
// Horn
function opActionHorn(c0){
	opSticksideRIGHT(c0)
}
// Move
function opActionMove(c0){
	if(!c0)switchTransformOrbit(false)
}
// Rotate
function opActionRotate(c0){
	if(!c0)switchTransformOrbit(true)
}
// Remove
function opActionRemove(c0){
	if(!c0)removeSelectedAsset()
}
// Whatsapp
function opActionTalk(c0){
	if(!c0)showTalk()
}
// Facebook
function opActionFacebook(c0){
	if(!c0)showFacebook()
}
// Github
function opActionGit(c0){
	if(!c0)showGit()
}// Orbit
function opActionOrbit(c0){
	if(!c0){
		$('#dynamic-joystick').html('')
		createTouchButton('shortclick',_lz.dynamicJoy?'bottomLeftSecondIcon':'actionLeftIconA',_lz.dynamicJoy?{icon:'ti-control-record',name:'actionControl'}:'actionControl',undefined,_lz.dynamicJoy?'icon':'png','actoptional.gif',.36)
	}
}
// Control
function opActionControl(c0){
	if(!c0){
		loadJoyStick(_lz.dynamicJoy)
		if(_lz.dynamicJoy)createTouchButton('shortclick',_lz.dynamicJoy?'bottomLeftSecondIcon':'actionLeftIconA','actionOrbit',undefined,'png','actoptional.gif',.36)
	}
}
// Save user name
function saveUserID(c0){
	$('#userIDWindow').fadeOut('slow')
	_pz.f01=`if(lsRd('playerAvatar'+myUserID.uid)==null){opMyCharacter()}`
	_pz.b01=`Back`
	if($('#userName').val()!=''){
		myUserID.name=$('#userName').val()
		if($('#userName').val().length<4){
			_pz.m09=`"`+myUserID.name+`" is too short, please try another name`
		}else if(_mz.loaded==0){
			loadAudio('interface','shutter',1,false,true)
			_pz.f01+=``
			_pz.b01=`Dismiss`
			_pz.m09=`We are pleased to welcome you "`+myUserID.name+`" in the `+_ez.engineName.toLowerCase()
			if(lsRd('playerAvatar'+myUserID.uid)!=null&&!playerModelLink)_pz.m09=false
		}else opMyCharacter()
	}else{
		myUserID.name='Noname'
		_pz.m09=`No name is saved, because you have not specified your profile name`
	}
	saveUserData(_pz.m09)
	if(_pz.b01==`Back`)_pz.f01+=`else opUserID()`
	if(_pz.m09)showDialog('userProfile.png',_pz.m09,_pz.f01,_pz.b01,null,null,600)
	hideOpTm=9
}
// Save user data
function saveUserData(c0){
	if(_lz.avatarIndex!==undefined){
		if(!c0)loadMyAvatar(_lz.avatarIndex)
		saveAvatarSettings(_lz.index)
	}else loadAvatarList()
	lsEr('_!DmyUNm!_')
	lsSv('myUserID',JSON.stringify(myUserID))
}
// Load leader board
function loadLeaderBoard(){
	if(onRe.data==undefined||onRe.data[0]==null){
		_pz.lBR=[]
	}else _pz.lBR=onRe.data[0]
	for(_pz.lB0=0;_pz.lB0<_pz.lBR.length;_pz.lB0++)if(_pz.lBR[_pz.lB0].uid==myUserID.uid)_pz.lBR=deleteArray(_pz.lBR,_pz.lB0)
	if(parseFloat(fmCur($('#walletAmount').text()))>0&&myUserID.name!='Noname')_pz.lBR.push({uid:myUserID.uid,name:myUserID.name,model:JSON.parse(lsRd('playerAvatar'+myUserID.uid)).model,amount:$('#walletAmount').text(),level:_lz.title,profile:myUserID.profile})
	if(_pz.lBR.length>_lz.maxLeaderBoard)_pz.lBR=deleteArray(_pz.lBR,_lz.maxLeaderBoard)
	// Sort
	for(_pz.lB0=0;_pz.lB0<_pz.lBR.length;_pz.lB0++){
		for(_pz.lB1=0;_pz.lB1<_pz.lBR.length;_pz.lB1++){
			if(parseFloat(fmCur(_pz.lBR[_pz.lB0].amount))>parseFloat(fmCur(_pz.lBR[_pz.lB1].amount))){
				_pz.tMP=_pz.lBR[_pz.lB0]
				_pz.lBR[_pz.lB0]=_pz.lBR[_pz.lB1]
				_pz.lBR[_pz.lB1]=_pz.tMP
			}
		}
	}
	// Frame
	_pz.lBD=`
		<br>LEADER BOARD
		<div class="dialogbox" style="display:flex;margin:4px;align-content:stretch;flex-wrap:wrap">`
	for(_pz.lB0=0;_pz.lB0<_pz.lBR.length;_pz.lB0++){
		_pz.lBF=`if('`+_pz.lBR[_pz.lB0].uid+`'!=myUserID.uid){closeDialog(null,false);opMyChat();openContactChat('`+_pz.lBR[_pz.lB0].uid+`','`+_pz.lBR[_pz.lB0].model+`','`+_pz.lBR[_pz.lB0].name+`');loadAudio('interface','softbuttonclick',1,false,true)}else showDialog('trophy.png','You are No. `+(_pz.lB0+1)+` cash survivor','','Dismiss')`
		_pz.lIM=_pz.lBR[_pz.lB0].profile==null?'assets/images/userProfile.png':_pz.lBR[_pz.lB0].profile
		_pz.lBD+=`
			<div class="dialogbox" style="display:flex;margin:4px;padding:4px;width:100%;overflow:hidden">
				<img class="survivorimage" src="`+_pz.lIM+`"
				ontouchend="`+_pz.lBF+`"
				onmouseup="if(!isMobile){`+_pz.lBF+`}"/>
				<div>
					<div><strong>`+_pz.lBR[_pz.lB0].name.toUpperCase()+`</strong></div>
					<div>Mission: <strong>`+_pz.lBR[_pz.lB0].level+`</strong></div>
					<div>Score: <strong>υς`+_pz.lBR[_pz.lB0].amount+`</strong></div>
				</div>
			</div>`
	}
	f0=`lsSv('leaderboard'+myUserID.uid+_lz.levelName,'done')`
	b0=lsRd('leaderboard'+myUserID.uid+_lz.levelName)==null?'Understood':'Dismiss'
	if(_pz.lBR.length==0){
		_pz.lBD=`There hasn't been any survivor yet`
		f0=''
		b0='Dismiss'
	}else _pz.lBD+=`</div>`
	showDialog('trophy.png',_pz.lBD,f0,b0)
	lsSv('leaderBoard',JSON.stringify(_pz.lBR))
	if(isOnL())onSv(_ez.engineName.toLowerCase()+'/leaderboard/survivor/',_pz.lBR)
}
// Receive credits
function receiveTransfer(){
	if(!isNaN(parseFloat(onRe.data[0]))){
		showDialog('transfer.png',
		`You have received <strong>υς`+iCommas(onRe.data[0])+`</strong> transfer from "`+onRe.data[1]+`"`,'','Dismiss')
		$('#walletAmount').text(iCommas((parseFloat(onRe.data[0].replace(/,/g,''))+parseFloat($('#walletAmount').text().replace(/,/g,''))).toFixed(2)))
		lsSv('walletAmount'+myUserID.uid,enAdStr($('#walletAmount').text()))
		onEr(_ez.engineName.toLowerCase()+'/transfers/'+myUserID.uid)
	}
}
// Transfer credits
function transferCredit(){
	_pz.ta0=0
	_pz.tx0=''
	for(_pz.iI6=0;_pz.iI6<_oz.myContacts.uid.length;_pz.iI6++)if($('#AmountIn'+_oz.myContacts.uid[_pz.iI6]).val()!=''){
		_pz.tx1=fmCur($('#AmountIn'+_oz.myContacts.uid[_pz.iI6]).val())
		_pz.tx0+=`,"`+_oz.myContacts.uid[_pz.iI6]+`":{"amount":"`+_pz.tx1+`","name":"`+myUserID.name+`"}`
		_pz.cN0=_oz.myContacts.data[_pz.iI6].name
		_pz.ta0+=parseFloat(_pz.tx1)
	}
	if(_pz.ta0>0){
		if(_pz.ta0<=parseFloat($('#walletAmount').text().replace(/,/g,''))){
			$('#walletAmount').text(iCommas((parseFloat($('#walletAmount').text().replace(/,/g,''))-_pz.ta0).toFixed(2)))
			lsSv('walletAmount'+myUserID.uid,enAdStr($('#walletAmount').text()))
			onSv(_ez.engineName.toLowerCase()+'/transfers/',JSON.parse('{'+_pz.tx0.replace(',','')+'}'))
			showDialog('transfer.png','You have transferred <strong>υς'+iCommas(_pz.ta0)+'</strong> to "'+_pz.cN0+'"','','Dismiss')
		}else showDialog('transfer.png',`Unable to transfer υς`+_pz.ta0+` to your contacts, because your υς`+$('#walletAmount').text()+` are not sufficient enough`,'','Dismiss')
	}else showDialog('transfer.png',`Please select the contacts you want to transfer`,'','Dismiss')
}
// Save avatar settings
function saveAvatarSettings(i){
	if(_lz.avatars[i]){
		_pz.nm1=_lz.avatars[i].name
		_pz.ht1=_lz.avatars[i].ht
		_pz.kg1=_lz.avatars[i].kg
		_pz.of1=_lz.avatars[i].of
		if(_lz.avatarIndex!=i){
			_pz.aD0=getAvatarParameters(_pz.nm1)
			_lz.parameters[_lz.avatarParameterIndex].character=_pz.aD0.parameters.character
			_lz.avatarIndex=_pz.aD0.avatarIndex
		}
		lsSv('playerAvatar'+myUserID.uid,'{"model":"'+_pz.nm1+'","offset":"'+_pz.of1+'","avatarIndex":"'+i+'","character":'+JSON.stringify(_lz.parameters[_lz.avatarParameterIndex].character)+'}')
	}
}
// Get avatar parameters
function getAvatarParameters(fn){
	if(fn){
		_pz.aV0=allAvatars()
		for(_pz.gI0=0;_pz.gI0<_pz.aV0.length;_pz.gI0++)if(_pz.aV0[_pz.gI0].name==fn.split('.')[0])return{parameters:_pz.aV0[_pz.gI0],avatarIndex:_pz.gI0}
	}
	return
}
// Load my avatar
function loadMyAvatar(i,url,uSI){
	if(_mz.loaded==0){
		if(url!==undefined)if(url!=='undefined')$('#avatarLink').val(url)
		if(_mz.driveVehicleIndex[_lz.index]==null){
			_pz.nm1=null
			_pz.ht1=1.2
			_pz.kg1=36
			_pz.of1=0
			if(_cz.alive[_lz.index]){
				if(i=='reOnline'){
					playerModelLink=url
				}else if(i=='online'){
					if($('#avatarLink').val()!=''){
						playerModelLink=$('#avatarLink').val().replace('https://','')
					}else{
						showDialog('userProfile.png',`No avatar is loaded, because the url is unspecified`,'myCharacter()','Back')
						return
					}
				}else if(i!='myavatar'){
					playerModelLink=null
					saveAvatarSettings(i)
				}
				setTimeout(function(){
					if($('#'+_ez.tCanvas.id+'-cont').css('display')=='none')showDialog('nointernet.png',`Cannot load your online avatar, because you're not connected to the internet`,'','Dismiss')
				},20000)
				if(!isOnL()&&playerModelLink!=null){
					showDialog('nointernet.png',`Cannot load your online avatar, because you're not connected to the internet`,'','Dismiss')
				}else{
					$('#loadingFill').css('width','2%')
					$('#loadingBar').fadeIn('fast')
					loadAudio('interface','softbuttonclick',1,false,true)
					_ez.world.removeBody(_cz.physics[_lz.index])
					postBody(_cz.physics[_lz.index],false)
					_lz.playerIndexList=_lz.playerIndexList.filter(e=>e!==_lz.index)
					loadPlayerMesh('assets/models/players/'+_pz.nm1+'/',_pz.nm1+'.glb',true,_mz.meshesData[_lz.index].position.x,_mz.meshesData[_lz.index].position.y,_mz.meshesData[_lz.index].position.z,_mz.meshesData[_lz.index].rotation.y,1,_lz.index,_pz.ht1,_pz.kg1,true,0,_pz.of1,{uid:myUserID.uid,name:myUserID.name,profile:myUserID.profile,character:_lz.parameters[_lz.avatarParameterIndex].character})
					updateActivity('changeavatar')
					setTimeout(function(){
						showTouchControls(true)
					},300)
				}
			}else showDialog('userProfile.png',`Unable to change avatar, because your dead avatar is disconnected`,'','Dismiss')
		}else showDialog('userProfile.png',`Unable to change avatar, because you are driving`,'','Dismiss')
		if(myUserID.name=='Noname'&&!uSI)opUserID()
	}else if(lsRd('eFirstRun')==null){ // First run
		if(i!='online'){
			_pz.aV0=allAvatars()[i]
			lsSv('playerAvatar'+myUserID.uid,'{"model":"'+_pz.aV0.name+'","offset":"'+_pz.aV0.of+'","avatarIndex":"'+_lz.avatarIndex+'","character":'+JSON.stringify(_pz.aV0.character)+'}')
		}else lsSv('playerAvatar'+myUserID.uid,'{"model":"'+url.replace('https://','')+'","offset":"0"}')
		lsSv('eFirstRun','done');$('#app').hide();haltF=true;loadFailed()
	}
}
// ==== VR ====
// Check if VR mode
function isVR(sc0){
	if(isMobile&&orientation==90){
		if(lsRd('goVR')!=null){
			_ez.vr=true
			$('#goVRICON').hide()
			$('#touchControls').fadeOut('fast')
			$('#noVRICON').show()
			hideOpTm=0
		}else{
			_ez.vr=false
			delete _ez.vrSet
			setPostProcessing(_ez.camera)
			_ez.renderer.setScissor(0,0,_ez.tCanvas.width,_ez.tCanvas.height)
			_ez.renderer.setViewport(0,0,_ez.tCanvas.width,_ez.tCanvas.height)
			$('#noVRICON').hide()
			$('#goVRICON').show()
			showTouchControls(sc0)
			hideOpTm=6
		}
	}else{
		$('#noVRICON').hide()
		$('#goVRICON').hide()
		setPostProcessing(_ez.camera)
	}
}
// Hide menu timer
function hideMenuTimer(hMT){
	if(hMT!==undefined)hideOpTm=hMT
	setTimeout(function(){
		if(hideOpTm>0){
			if(hideOpTm<6/2)$('#screenTarget').fadeOut('fast')
			hideOpTm--
			hideMenuTimer()
		}else{
			showTouchControls(true)
			$('#takeSnap').fadeOut('slow')
			showIndicators()
		}
	},1000)
}
// ==== MOUSE CONTROLS ====
// Zoom mouse on mouse wheel
function mouseWheel(event){
	if(!_ez.orbitControl.enableZoom){
		_ez.camera.zoom-=_ez.camera.zoom*(event.deltaY/1000)
		if(_ez.camera.zoom<1)_ez.camera.zoom=1
		_pz.cL0=_ez.cameraIndex==1?76:20
		if(_ez.camera.zoom>_pz.cL0)_ez.camera.zoom=_pz.cL0
		_ez.camera.updateProjectionMatrix()
	}
}
