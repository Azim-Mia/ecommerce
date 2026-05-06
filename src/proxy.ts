import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function proxy(request: NextRequest) {
  const admin = true // পরে এখানে token / cookie চেক করবে

  if (!admin) {
    return NextResponse.redirect(
      new URL('/admin/login', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/deshboard/:path*'],
}