var push = require('web-push');

let vapikeys = {
   publicKey: 'BIVZuMkEPguJ0uQDdolbdGiHZmY_V2EmlXCIfcTp6iHBclbK8eR1RmQe_ehrQpJOR6R9qtAeVBDg8UTk7xuCsrY',
   privateKey: '1JQoww_NpRJipumpNeEkE67WdNC5CkGeE2y_uF6buO4'
}
push.setVapidDetails('mailto:habib.chaabene@esprit.tn', vapikeys.publicKey, vapikeys.privateKey)

let sub = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/czTX3vHXsyg:APA91bEmd1-XT3i_kyF7m4OedtRwhzVd4KY-9CFi-OCn321ZxgMZPvtbfvnenfUrWo-HlUDnR2ZJ8hP8ZlMzeJoKpLeQeDiJi16pyPEMEJQwbC2jalewYgIt3U1Fh5Aw9BKB5oTGWem7",
   "expirationTime": null,
   "keys": {
      "p256dh": "BFYIRAD8RWkPyEhHdg5gx72vm4x91K9z4tPPrpjCjsQ46MKN5Uy4yFHKUBF1NpIg18VXr-fKpA-tGkK9uHVEdGo",
      "auth": "y56vPupjI9dpO9sGO2NpaA"
   }
}


push.sendNotification(sub, 'test message');