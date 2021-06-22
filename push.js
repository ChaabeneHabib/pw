var push = require('web-push');

let vapikeys ={
   publicKey: 'BIVZuMkEPguJ0uQDdolbdGiHZmY_V2EmlXCIfcTp6iHBclbK8eR1RmQe_ehrQpJOR6R9qtAeVBDg8UTk7xuCsrY',
   privateKey: '1JQoww_NpRJipumpNeEkE67WdNC5CkGeE2y_uF6buO4'
 }
 push.setVapidDetails('mailto:habib.chaabene@esprit.tn',vapikeys.publicKey, vapikeys.privateKey)

 let sub = {};
 push.sendNotification(sub , 'test message');