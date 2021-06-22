var push = require('web-push');

let vapikeys = {
   publicKey: 'BIVZuMkEPguJ0uQDdolbdGiHZmY_V2EmlXCIfcTp6iHBclbK8eR1RmQe_ehrQpJOR6R9qtAeVBDg8UTk7xuCsrY',
   privateKey: '1JQoww_NpRJipumpNeEkE67WdNC5CkGeE2y_uF6buO4'
}
push.setVapidDetails('mailto:habib.chaabene@esprit.tn', vapikeys.publicKey, vapikeys.privateKey)

let sub = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/eqtqLPwZGhY:APA91bFzTqIdeMxrYPQ970NllnLWTXYT5gh8LZ5h7uIJmIireYpCsYMyalAQJGISEShadMWK1k41AevUqNcxK0DLx8g39x-XKwl7z0AuVlPxPW5DWxmirNP6_P0S4EfMWRvi8UOSWfQ3",
   "expirationTime": null,
   "keys": {
      "p256dh": "BLuTUuhv_HYuVV3JhSxcVv1gTBWN5ZIv-qw2XoYoH0EC7iOaeh34LNEGO7YydVqIagFj-zXznAyaWveoEyoQPKM",
      "auth": "ndpFqIWYtHP-5Z_IEj_Qvw"
   }
}
push.sendNotification(sub, 'test message');