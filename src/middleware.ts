import { auth } from "@/auth";

export default auth((req) => {
  // ตรวจสอบว่า path ที่ต้องการ require authentication
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // ถ้าผู้ใช้พยายามเข้าถึงหน้าที่ต้องการ authentication แต่ยังไม่ได้ล็อกอิน
  if (nextUrl.pathname.startsWith('/dashboard') && !isLoggedIn) {
    return Response.redirect(new URL('/auth/signin', nextUrl));
  }

  // ถ้าผู้ใช้ล็อกอินแล้วพยายามเข้าถึงหน้า signin
  if (nextUrl.pathname.startsWith('/auth/signin') && isLoggedIn) {
    return Response.redirect(new URL('/dashboard', nextUrl));
  }
});

export const config = {
  matcher: ['/dashboard/:path*', '/auth/signin'],
};