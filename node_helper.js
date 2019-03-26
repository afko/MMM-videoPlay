const NodeHelper = require("node_helper");
const fs = require("fs");

module.exports = NodeHelper.create({
    //here comes the part of the nodehelper after the 3 dots as posted above

    socketNotificationReceived: function (notification, payload) {
        if (notification === "NEXT") {
            this.config = payload;
            this.timeUpdate(payload);
            
            setInterval(() => {
                this.timeUpdate(payload);
            }, this.config.updateInterval);
        }
    },

    timeUpdate: function (payload) {
        this.config = payload;

        this.config.videoNum += 1;
        if (this.config.videoNum >= 2) this.config.videoNum = 0;

        this.sendSocketNotification("TIME", this.config);

    }
});