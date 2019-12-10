function execShellCommand(cmd) {

    const exec = require('child_process').exec;

    return new Promise((resolve, reject) => {

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(new Error('something bad happened'));
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = async function ds_ffmpeg(videoPath, filterValue = 0.3) {

    const result = [];
    const cmd = 'ffprobe -show_frames -of compact=p=0 -f lavfi "movie=' + videoPath + ',select=gt(scene\\,' + filterValue + ')"';
    const regex = /pkt_pts_time=\d+\.\d+/g;

    try {
        const stdout = await execShellCommand(cmd);

        stdout.match(regex).forEach(val => {
            let t = parseFloat(val.replace('pkt_pts_time=', ''));
            result.push(t);
        })
        return result;

    } catch(e)	 {
        throw new Error(e);
    }
}