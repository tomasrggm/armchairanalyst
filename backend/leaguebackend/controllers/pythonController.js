const { body,validationResult } = require('express-validator');
const {spawn} = require('child_process');


exports.champion_photo = function(req,res,next){
    var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python', ['./controllers/pythonScripts/champion.py',req.params.id]);
  // collect data from script
  python.stdout.on('data', function (data) {
    var resposta = data.toString();
    resposta = resposta.slice(0,resposta.length-2);
   res.send({text:resposta});
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  });
}
