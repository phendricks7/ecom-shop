import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
const BUCKET: string[] = ['a', 'b', 'c'];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let bucket: string | undefined = request.cookies.get('bucket')?.value;

    if (!bucket) {
        const idx = Math.floor(Math.random() * 3);
        bucket = BUCKET[idx];
    }

    const response = NextResponse.rewrite(new URL(`/buckets/${bucket}`, request.url));
    response.cookies.set('bucket', bucket);
    
    return response;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}