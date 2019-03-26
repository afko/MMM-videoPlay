Module.register("MMM-videoPlay", {
    defaults: {
        videoNum: 0,
        videoAddrDom: 'http://localhost/',
        videoArray: ['ONE1.mp4', 'ONE2.mp4', 'ONE3.mp4'],
        loop: true,
        updateInterval: 0 //reads the file every 30 mins
    },

    start: function () {
        this.sendSocketNotification("START", this.config);
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "TIME") {
            this.datafile = payload
            this.config.videoNum = this.datafile[0];
            this.config.updateInterval = this.datafile[1];
            this.updateDom();
        }
    },

    getStyles: function(){
        return ["MMM-videoPlay.css"];
    },

    getDom: function () {
        
        var wrapper = document.createElement("div");
        var video = document.createElement("video");
       
        // video.loop = this.config.loop;
        if (this.dataFile) {
            video.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];
            video.autoplay = true;
            wrapper.appendChild(video);

            if (this.config.videoNum >= 2) this.config.videoNum = 0;
            else this.config.videoNum += 1;

        } else {
            wrapper.innerHTML = "No data";
        }
        return wrapper;
    }
});