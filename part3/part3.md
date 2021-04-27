1. The program calculated the incorrect sum since num1 and num2 are strings, so the addition operator (+) concatenated the two strings instead of adding their respective integer values (ie. "3" + "4" = "34" not 7).
2. I fixed the bug by calling the parseInt function on both strings, converting them to their numerical values before the addition.
3. citylots.json
4. part2.js
5. 11.7 MB
6. 74 ms
7. Chrome/90.0.4430.85
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()