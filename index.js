const doit = (videoPath, filterValue) => {
    const p = require('child_process');
    const cmd = 'ffprobe -show_frames -of compact=p=0 -f lavfi "movie=' + videoPath + ',select=gt(scene\\,' + filterValue + ')"';
    const regex = /pkt_pts_time=\d+\.\d+/g;
    const result = [];

    let stdout = p.execSync(cmd).toString();

    stdout.match(regex).forEach(val => {
        let t = parseFloat(val.replace('pkt_pts_time=', ''));
        result.push(t);
    })

    return result;
}

module.exports = function ds_ffmpeg(videoPath, filterValue = 0.3) {

    return new Promise((resolve, reject) => {
        const r =  doit(videoPath,filterValue);
        resolve(r);
    });
}