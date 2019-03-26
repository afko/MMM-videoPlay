Module.register("MMM-videoPlay", {
    defaults: {
        videoNum: 0,
        videoAddrDom: 'http://localhost/',
        videoArray: ['ONE3.mp4', 'ONE2.mp4', 'ONE1.mp4'],
        loop: true,
        updateInterval: 0

    },

    // start: function(){
    //     this.updateDom();
    //     // setInterval(() => {
    //     //     this.updateDom();
    //     // }, this.config.updateInterval);
    // },

    getStyles: function(){
        return ["MMM-videoPlay.css"];
    },

    getDom: function () {
        
        

        var wrapper = document.createElement("div");
        var video = document.createElement("video");

        video.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];
        video.autoplay = true;
        this.config.updateInterval = video.duration + 2;
        // video.loop = this.config.loop;
        // this.sendSocketNotification("NEXT", this.config);

        wrapper.innerText = this.config.videoNum;
        wrapper.appendChild(video);

        
        return wrapper;
    }
});