/**
 * Created by Tom on 17/09/2015.
 */

function start(){
    console.log("request handler 'start' was called")
}


function upload(){
    console.log("request handler 'upload' was called")
}

module.exports.start = start;

module.exports.upload = upload;