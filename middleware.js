import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req) {
    const pathname = req.nextUrl;
    if (!req.cookies.get('session')) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*']
};