var push = require('web-push');

let vapikeys = {
   publicKey: 'BIVZuMkEPguJ0uQDdolbdGiHZmY_V2EmlXCIfcTp6iHBclbK8eR1RmQe_ehrQpJOR6R9qtAeVBDg8UTk7xuCsrY',
   privateKey: '1JQoww_NpRJipumpNeEkE67WdNC5CkGeE2y_uF6buO4'
}
push.setVapidDetails('mailto:habib.chaabene@esprit.tn', vapikeys.publicKey, vapikeys.privateKey)

let sub = {
   endpoint: "https://fcm.googleapis.com/fcm/send/f0FLWTDLtpk:APA91bGwrPY6r_qVFdobLdLk011QLGBh9Oa8rBGRYBaxIzZbcDGRPc1ExESvrPrdm5SoYVjtj4qwzmh1uxPK6p9Fi-Fs8Ds3Im-LJGWQ7OMzYYp0YOO8uAjF1XHX7ARfo27zrHGKBuj0",
   expirationTime: null,
   keys: {
      p256dh: "BOp6rGt_vqicDFT4Mjn92XoERctIKBVHEntENHEkfXpEv7nTTtRlt0xSZGcGaCNf_zHrFdHNaabr622VUZKqG-k",
      auth: "reubsfUGQ5x2WTxQHbnSUA"
   }
}


push.sendNotification(sub, 'test message');