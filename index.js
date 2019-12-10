module.exports = function ds_ffmpeg(videoPath, filterValue = 0.3) {
    const p = require('child_process');
    const cmd = 'ffprobe -show_frames -of compact=p=0 -f lavfi "movie=' + videoPath + ',select=gt(scene\\,' + filterValue + ')"';
    const regex = /pkt_pts_time=\d+\.\d+/g;

    p.exec(cmd, function (error, stdout, stderr) {

        const result = [];

        if (error) {
            return null;
        }

        stdout.match(regex).forEach(val => {
            let t = parseFloat(val.replace('pkt_pts_time=', ''));
            result.push(t);
        })

        return result;
    })
}