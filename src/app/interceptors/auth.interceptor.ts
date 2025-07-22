import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const baseURL='http://localhost:3000'
  let token=sessionStorage.getItem("token")
  const newRequest=req.clone({
    url:baseURL+req.url,
    setHeaders:{Authorization:`bearer ${token}`}
  })
  console.log(newRequest)
  return next(newRequest);
};
