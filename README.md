# ExpressRoutingExer
- This application performs three statistical operations given an arbitrary amount of numbers:

1. mean (average)
2. median (midpoint)
3. mode (most frequent)
The operations are invoked via one route per operation.

- Each route takes a query key of nums which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to /mean?nums=1,3,5,7.
