'use strict'
const appCName='inteface_1.0.0.20250109.001'
const appCache=[
  // MISSION
  'assets/images/arrivalincity.jpg',
  'assets/images/favicon.png',
  'assets/images/og.jpg',
  // APP
  'index.html',
]
this.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(appCName).then(function(cache){
      return cache.addAll(appCache)
    })
  )
})
this.addEventListener('activated',event=>{
  event.waitUntil(cleanupCache())
})
async function cleanupCache(){
  const keys=await caches.keys()
  const keysToDelete=keys.map(key=>{
    if(key!==appCName){
      return caches.delete(key)
    }
  })
  return Promise.all(keysToDelete)
}
this.addEventListener('fetch',event=>{
  if(event.request.mode==='navigate'||(event.request.method==='GET'&&event.request.headers.get('accept').includes('text/html'))){
      event.respondWith(
      fetch(event.request.url).catch(error=>{
        return caches.match('index.html')
      })
    )
  }else{
    event.respondWith(caches.match(event.request).then(function(response){
      return response||fetch(event.request)
    }))
  }
})
