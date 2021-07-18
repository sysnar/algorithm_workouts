def fibonacci(num):
  cache = [ 0 for index in range(num + 1)]
  cache[0] = 0
  cache[1] = 1

  for index in range(2, num + 1):
    cache[index] = cache[index - 1] + cache[index - 2]

  return cache[num]

# 0, 1, 1 , 2, 3, 5, 8 ...