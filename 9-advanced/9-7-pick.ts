{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMateData = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..'
    };
  }

  function getVideoMetaData(id: string): VideoMateData{
    return {
      id,
      title: 'video'
    };
  }

  // Pick
  // 기존의 타입에서 원하는 속성과 value 들만 선택해서 타입을 만들 수 있음

}