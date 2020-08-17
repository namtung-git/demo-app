# Nginx image is used to deploy web application

FROM nginx:1.14-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
