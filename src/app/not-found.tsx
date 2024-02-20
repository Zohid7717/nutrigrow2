'use client'

import Error from 'next/error';

function NotFound() {
  return (
    <html lang='uz'>
      <body>
        <Error statusCode={404}/>
      </body>
    </html>
  );
}

export default NotFound;