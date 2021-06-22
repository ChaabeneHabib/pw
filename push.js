var push = require('web-push');

let vapikeys = {
   publicKey: 'BIVZuMkEPguJ0uQDdolbdGiHZmY_V2EmlXCIfcTp6iHBclbK8eR1RmQe_ehrQpJOR6R9qtAeVBDg8UTk7xuCsrY',
   privateKey: '1JQoww_NpRJipumpNeEkE67WdNC5CkGeE2y_uF6buO4'
}
push.setVapidDetails('mailto:habib.chaabene@esprit.tn', vapikeys.publicKey, vapikeys.privateKey)

let sub = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dTxZQYkfp6I:APA91bGgIyU1faWEyh4xy3hkdcTdXypjYkdmrzx98_qQ7txbBSAAnb76nq7-RCkBCb8aPMjts2ZRuaXg2D6TMiBremHUDLp3WM5IaMckbrsWx7cC1kgkZF8QJFj0154XJv2BRlb_y8_Y",
   "expirationTime": null,
   "keys": {
      "p256dh": "BMJ1UuBFj_bvZvXliR1Hyr1IL0X3_FoXbBeISNERudk8Ke14VE-sP8_M-b3BDtx3c0mmC1N_poNdwFi9lHEhf-4",
      "auth": "D4foA2pqbeWvi5DYqEOb7Q"
   }
}


push.sendNotification(sub, 'test message');