import { NextResponse } from 'next/server'

export function proxy(request) {
    // return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: '/dashboard/:path*',
}