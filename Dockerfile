FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/krypto.jar /krypto/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/krypto/app.jar"]
