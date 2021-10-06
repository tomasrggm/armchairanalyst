var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');

var pythonController = require ("../controllers/pythonController");

const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn('RGAPI-0257dc38-ccde-4e3a-85a3-4d832f159b7a')({
    region: REGIONS.EUROPE_WEST,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'en_US',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})

router.get('/teste',function(req,res2,next){
  kayn.Champion.Rotation.list().then(function(res1){
    var freechampsKeys = res1.freeChampionIds;
    var freechamps = [];
    kayn.DDragon.Champion.list().then(function(res){
      var chaves = Object.keys(res.data);
      for(var i = 0; i < chaves.length; i++){
        if(parseInt(res.data[chaves[i]].key) in freechampsKeys){
          freechamps.push(res.data[chaves[i]].id);
        }
      }
      res2.send(freechamps);
    })
  })

});

router.get('/teste2',function(req,res,next){
  kayn.Challenger.list("RANKED_SOLO_5x5").then(function(res1){
    var jogadores = res1["entries"];
    jogadores.sort(GetSortOrder("leaguePoints"));
    res.send(jogadores);
  });
})

function GetSortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return -1;
        } else if (a[prop] < b[prop]) {
            return 1;
        }
        return 0;
    }
}

router.get('/playerInfoName/:id',function(req,res,next){
  console.log(req.params.id);
  kayn.Summoner.by.name(req.params.id).callback(function(err, summoner){
    console.log(summoner);
    res.send(summoner);
  })
})

router.get('/playerInfoId/:id',function(req,res,next){
  console.log(req.params.id);
  kayn.Summoner.by.id(req.params.id).callback(function(err, summoner){
    res.send(summoner);
  })
})



router.get('/matches2/:id',function(req,res,next){
  kayn.Summoner.by.id(req.params.id).callback(function(err, summoner){
    //console.log(summoner);
    kayn.Matchlist.by.accountID(summoner["accountId"]).callback(function(err,res2){
      res.send(res2);
    })
    //res.send(summoner);
  })
})

router.get("/match/:id",function(req,res,next){
  kayn.Match.get(req.params.id).callback(function(err,match){
    res.send(match);
  })
})

router.get("/champion/:id",pythonController.champion_photo);

router.get("/matches/:id",function(req,res,next){
  kayn.Summoner.by.id(req.params.id).callback(function(err, summoner){
    kayn.Matchlist.by.accountID(summoner["accountId"]).callback(function(err,res2){
      var lista = [];
      for(var i = res2['startIndex']; i < res2['endIndex']; i++){
        const python = spawn('python', ['./controllers/pythonScripts/champion.py',res2['matches'][i]['champion'].toString()]);
        python.stdout.on('data', function (data) {
          var resposta = data.toString();
          resposta = resposta.slice(0,resposta.length-2);
          resposta = "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/" + resposta + ".png";
          lista.push(resposta);
          if(lista.length == res2['endIndex']){
            res2['images'] = lista;
            res.send(res2);
          }
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', (code) => {
        });
      }
    })
  })
})


module.exports = router;
