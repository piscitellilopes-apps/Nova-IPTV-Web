/* Fire TV V29 update channel. Public file contains no IPTV credentials. */
(function(){
  if (typeof window !== 'undefined' && typeof window.v29FirestickUpdate === 'function') {
    window.v29FirestickUpdate({version:'1.0',html:null});
  }
})();
