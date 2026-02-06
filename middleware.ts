import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // This is a "pass-through" middleware.
  // It does nothing but allow the request to continue.
  return NextResponse.next();
}

export const config = {
  // Apply to all routes
  matcher: '/:path*',
};