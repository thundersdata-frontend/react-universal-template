import React from 'react';
import { useLocation } from 'alita';
import { parse } from 'qs';

export default function OrderDetail() {
  const location = useLocation();
  const query = parse(location.search, { ignoreQueryPrefix: true });
  const { id, name, email } = query;

  return (
    <div>
      <div>
        <div>OrderDetail</div>
      </div>
      <div>
        <div>id: {id}</div>
      </div>
      <div>
        <div>name: {name}</div>
      </div>
      <div>
        <div>email: {email}</div>
      </div>
    </div>
  );
}
