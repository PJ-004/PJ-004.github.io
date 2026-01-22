#ifndef JS_TIME_H
#define JS_TIME_H

#include <stdio.h>
#include <string.h>
#include <emscripten.h>
#include <time.h>

time_t now;
EMSCRIPTEN_KEEPALIVE
int curr_age(int birth_year, int birth_month, int birth_day);
EMSCRIPTEN_KEEPALIVE
void get_date(char full_date[32]);

char *months[] = {NULL, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
char *weekdays[] = {NULL, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

#endif
