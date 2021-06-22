var push = require('web-push');

let vapikeys = {
   publicKey: 'BIVZuMkEPguJ0uQDdolbdGiHZmY_V2EmlXCIfcTp6iHBclbK8eR1RmQe_ehrQpJOR6R9qtAeVBDg8UTk7xuCsrY',
   privateKey: '1JQoww_NpRJipumpNeEkE67WdNC5CkGeE2y_uF6buO4'
}
push.setVapidDetails('mailto:habib.chaabene@esprit.tn', vapikeys.publicKey, vapikeys.privateKey)

let sub = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dP58tTrCuZM:APA91bFYFnqlBb8T8GlnhSodQOqq8Dm-WySeJ3cTUw5qwRFBQq4Nxg7XIAsnr44s1juisOjJIuATyh02qXIBIrWL-gMz3fiFLTkHuXm5Cz1wewMKLuGStKIB51QixKtO9jfqZlIy-4gP",
   "expirationTime": null,
   "keys": {
      "p256dh": "BIJAfxwj2GNSzfjhA-jR2thTo84HyRImEdCQyhpczhafDLQNq2ldeHvhk-sbDSYYKmArtrUvJQdO8ixqVv6Txks",
      "auth": "O3G66UxSX_dPIdJCc-U-_w"
   }
}


push.sendNotification(sub, 'test message');