import React from 'react';
import { useSearchParams } from 'alita';
import qs from 'qs';

export default function OrderDetail() {
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();
  const { id, name, email } = qs.parse(query);

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
