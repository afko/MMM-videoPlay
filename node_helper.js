const NodeHelper = require("node_helper");
const fs = require("fs");

module.exports = NodeHelper.create({
    //here comes the part of the nodehelper after the 3 dots as posted above

    socketNotificationReceived: function (notification, payload) {
        if (notification === "START") {
            this.setTime(payload);
            setInterval(() => {
                this.setTime(payload);
            }, this.config.updateInterval);

        }
    },

    setTime: function (payload) {
        this.config = payload;

        var tempVideo = document.createElement('video');
        tempVideo.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];

        this.config.updateInterval = tempVideo.duration + 2;

        data = [this.config.videoNum, this.config.updateInterval];

        this.sendSocketNotification("TIME", data);
    }
});