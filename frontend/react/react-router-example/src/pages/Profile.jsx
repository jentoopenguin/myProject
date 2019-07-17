import React from "react";

export default function Profile(props) {
  const id = props.match.params.id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile 페이지</h2>
      {id && <p>id 는 {id} 입니다.</p>}
    </div>
  );
}
