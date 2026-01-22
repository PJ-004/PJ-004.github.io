#include "js_time.h"

EMSCRIPTEN_KEEPALIVE
int curr_age(int birth_year, int birth_month, int birth_day) {
	now = time(NULL);
	struct tm *t = localtime(&now);
	
	int curr_year = t->tm_year + 1900;
	int curr_month = t->tm_mon + 1;
	int curr_day = t->tm_mday;

	if (curr_month <= birth_month) {
		if (curr_month == birth_month && curr_day < birth_day) {
			return (curr_year - (birth_year + 1));
		} else if (curr_month == birth_month && curr_day >= birth_day) {
			return curr_year - birth_year;
		}

		return (curr_year - (birth_year + 1));
	}

	return curr_year - birth_year;
}

EMSCRIPTEN_KEEPALIVE
void get_date(char full_date[64]) {
	now = time(NULL);
	struct tm *t = localtime(&now);

	int year = t->tm_year + 1900;
	int month = t->tm_mon + 1;
	int day = t->tm_mday;
	int week = t->tm_wday + 1;

	snprintf(full_date, 64, "Today is %s, %s %d %d\n", weekdays[week], months[month], day, year);
}
