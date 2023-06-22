import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/')) {
    const requestHeaders = new Headers(request.headers);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.headers.set(
      'X-Whatcha-Looking-For',
      'I see you found the custom headers'
    );
    response.headers.set(
      'X-Learn-About-This-Website',
      `https:/www.johnhodge.com/what-the-website`
    );
    response.headers.set('X-Brand-Standards', 'https://brand.johnhodge.com');
    response.headers.set('X-Powered-By', 'John Hodge');
    response.headers.set('X-Developed-By', 'John Hodge');
    return response;
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url));
  }
}
