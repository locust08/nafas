import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  const pathname = request.nextUrl.pathname;
  headers.set('x-nafas-locale', pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ms');
  return NextResponse.next({ request: { headers } });
}
export const config = { matcher: ['/((?!api|_next|sites|.*\\..*).*)'] };
