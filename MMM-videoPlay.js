Module.register("MMM-videoPlay", {
    defaults: {
        videoNum: 0,
        videoAddrDom: 'http://localhost/',
        video_list: ['http://clips.vorwaerts-gmbh.de/VfE_html5.mp4', 'http://localhost/ONE2.mp4', 'http://localhost/ONE1.mp4'],
        loop: true,
        updateInterval: 0

    },

    // // start: function(){
    // //     
    // // },

    // notificationReceived: function (notification, payload, sender) {
    //     if (notification == 'DOM_OBJECTS_CREATED') {
    //         Log.log(this.name + "Created with " + this.config.updateInterval);
    //         this.sendSocketNotification("START", this.config);
    //     }
    // },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "UPDATE") {
            this.updateDom();
        }
    },

    // timeUpdate: function (payload) {
    //     this.config = payload;
    //     this.config.videoNum += 1;
    //     if (this.config.videoNum >= 2) this.config.videoNum = 0;

    //     this.sendSocketNotification("TIME", this.config);

    // },


    getStyles: function () {
        return ["MMM-videoPlay.css"];
    },

    getDom: function () {



        var wrapper = document.createElement("div");

        var video = document.createElement("video");
        video.id = "VIDEO";

        // video.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];
        video.src = this.config.video_list[this.config.videoNum];
        video.autoplay = true;
        // this.config.updateInterval = video.duration + 2;

        video.addEventListener("ended", function(){
            this.config.videoNum += 1;
            if (this.config.videoNum >= 2) this.config.videoNum = 0;
            this.sendSocketNotification("UPDATE");
        });

        wrapper.innerText = this.config.videoNum;
        wrapper.appendChild(video);

        // this.config.videoNum += 1;
        // if (this.config.videoNum >= 2) this.config.videoNum = 0;

        return wrapper;
    }
});