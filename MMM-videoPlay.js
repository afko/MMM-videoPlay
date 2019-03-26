Module.register("MMM-videoPlay", {
    defaults: {
        videoNum: 0,
        videoAddrDom: 'http://localhost/',
        videoArray: ['ONE3.mp4', 'ONE2.mp4', 'ONE1.mp4'],
        loop: true,

    },

    getStyles: function(){
        return ["MMM-videoPlay.css"];
    },

    getDom: function () {
        
        var wrapper = document.createElement("div");
        var video = document.createElement("video");

        

        video.src = this.config.videoAddrDom + this.config.videoArray[this.config.videoNum];
        video.autoplay = true;
        // video.loop = this.config.loop;
        video.onended = function(){
            this.config.videoNum += 1;
            if (this.config.videoNum >= 2) this.config.videoNum = 0;
            this.updateDom();
        }
        wrapper.innerText = this.config.videoNum;
        wrapper.appendChild(video);
        return wrapper;
    }
});