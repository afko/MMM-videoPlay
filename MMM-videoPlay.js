Module.register("MMM-videoPlay", {
    defaults: {
        videoNum: 0,
        videoAddrDom: 'http://localhost/',
        videoArray: ['ONE1.mp4', 'ONE2.mp4', 'ONE3.mp4'],
        loop: true,

    },

    getStyles: function(){
        return ["MMM-videoPlay.css"];
    },

    getDom: function () {
        
        var video = document.createElement("video");

        video.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];
        video.autoplay = true;
        video.onended = function(){
            this.config.videoNum += 1;
            if (this.config.videoNum >= 2) this.config.videoNum = 0;
            video.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum]
        }
        
        return video;
    }
});