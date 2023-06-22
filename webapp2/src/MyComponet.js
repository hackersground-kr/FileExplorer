import React, { useEffect, useState } from 'react';
import xml2js from 'xml2js';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.daegu.go.kr/icms/rss/feed.do?id=BBS_02086');
        const xmlString = await response.text();
        
        const parser = new xml2js.Parser();
        parser.parseString(xmlString, (err, result) => {
          if (err) {
            console.error('XML 파싱 중 오류가 발생했습니다:', err);
            return;
          }

          // 파싱한 결과를 상태(state)에 저장
          setData(result);
        });
      } catch (error) {
        console.error('XML 데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchData();
  }, []);

  // 파싱한 데이터를 출력하는 JSX 코드 작성
  return (
    <div>
      {data && data.rss.channel[0].item.map((item, index) => (
        <div key={index}>
          <h3>{item.title[0]}</h3>
          <p>{item.link[0]}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
