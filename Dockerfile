FROM php:8.1-fpm-alpine

# RUN docker-php-ext-install pdo pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer​ | php -- \
     --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .
RUN composer install
RUN composer dump-autoload

#RUN composer dump-au#actoload
#RUN artisan optimize
RUN sudo chmod -R 777 vendor
RUN composer update
RUN php artisan key:generate
