// https://clerk.com/docs/upgrade-guides/core-2/nextjs

import { authMiddleware } from '@clerk/nextjs/server'



export default authMiddleware({
  publicRoutes: ["/"]
})


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}