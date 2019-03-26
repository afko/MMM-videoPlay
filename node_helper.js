const NodeHelper = require("node_helper");
const fs = require("fs");

module.exports = NodeHelper.create({
    //here comes the part of the nodehelper after the 3 dots as posted above

    socketNotificationReceived: function (notification, payload) {
        if (notification === "START") {
            this.config = payload;
            this.setTime(payload);
            setInterval(() => {
                this.setTime(payload);
            }, this.config.updateInterval);

        }
    },

    setTime: function (payload) {
        this.config = payload;

        var buff = new Buffer(100);
        fs.open(file, 'r', function (err, fd) {
            fs.read(fd, buff, 0, 100, 0, function (err, bytesRead, buffer) {
                var start = buffer.indexOf(new Buffer('mvhd')) + 17;
                var timeScale = buffer.readUInt32BE(start, 4);
                var duration = buffer.readUInt32BE(start + 4, 4);
                var movieLength = Math.floor(duration / timeScale);

                console.log('time scale: ' + timeScale);
                console.log('duration: ' + duration);
                console.log('movie length: ' + movieLength + ' seconds');
            });
        });

        var tempVideo = document.createElement('video');
        tempVideo.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];

        this.config.updateInterval = tempVideo.duration + 2;

        data = [this.config.videoNum, this.config.updateInterval];

        this.sendSocketNotification("TIME", data);
    }
});