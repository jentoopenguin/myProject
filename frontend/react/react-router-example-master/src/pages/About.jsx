// src/pages/About.jsx
import React from 'react';
import queryString from 'query-string';

export default function About(props) {
  //   const searchParams = new URLSearchParams(props.location.search);
  //   const name = searchParams.get("name");
  const query = queryString.parse(props.location.search);
  const { name } = query;
  console.log(name);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {name && <p>name 는 {name} 입니다.</p>}
    </div>
  );
}
