<template>
  <div>
    <div class="content-body">
      <div class="video-preview">
        <iframe 
          width="492"
          height="308"
          src="https://www.youtube.com/embed/WW-9TcDTKa8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen 
        />
      </div>
      <div class="video-info">
        <div>
          <span class="title">Mario vs the Giant NumbreBlocks 2 MAZE</span>
          <p class="description">Mario will go inside a giant Numberblocks, will he survive? Subscribe to never miss new videos!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
  .title {
    width: 100%;
    height: 38px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    color: #3C3E41;
  }
  .description {
    width: 394px;
    height: 75px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    color: #3C3E41;
    text-align: justify;
  }
  .video-preview {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .video-info {
    text-align: center;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .content-body {
    padding-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 17px;
  }
</style>