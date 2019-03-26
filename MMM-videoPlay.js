Module.register("MMM-videoPlay", {
    defaults: {
        videoNum: 0,
        videoAddrDom: 'http://localhost/',
        videoArray: ['http://clips.vorwaerts-gmbh.de/VfE_html5.mp4', 'http://localhost/ONE2.mp4', 'http://localhost/ONE1.mp4'],
        loop: true,
        updateInterval: 0

    },

    // start: function(){
    //     this.updateDom();
    //     // setInterval(() => {
    //     //     this.updateDom();
    //     // }, this.config.updateInterval);
    // },
    notificationReceived: function(notification, payload, sender) {
        if (notification == "DOM_OBJECTS_CREATED") {
            var temp_video = document.getElementById("VIDEO");
            temp_video.onended = function(){
                this.updateDom();
            }
        }
    },

    getStyles: function(){
        return ["MMM-videoPlay.css"];
    },

    getDom: function () {
        
        

        var wrapper = document.createElement("div");
        var video = document.createElement("video");
        video.id = "VIDEO";

        // video.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];
        video.src = this.config.videoArray[this.config.videoNum];
        video.autoplay = true;
        this.config.updateInterval = video.duration + 2;

        wrapper.innerText = this.config.videoNum;
        wrapper.appendChild(video);

        this.config.videoNum += 1;
        if (this.config.videoNum >= 2) this.config.videoNum = 0;

        return wrapper;
    }
});