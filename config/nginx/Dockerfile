FROM nginx:1.20-alpine

COPY ./default.conf /etc/nginx/conf.d

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
