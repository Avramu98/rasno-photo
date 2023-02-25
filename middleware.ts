import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { detectOS } from 'detect-browser';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const ua = request.headers.get('user-agent') || '';
  const os = detectOS(ua) || '';
  response.headers.set('x-os-type', os);

  return response;
}