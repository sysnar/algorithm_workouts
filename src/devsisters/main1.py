q = ["soda", "soda", "soda", "soda", "soda", "ginger", "ginger","ginger","ginger","ginger","ginger","ginger","ginger","ginger","ginger"]

def solution(names):
  total = []
  cookie = []
  group1 = []
  group2 = []
  cnt = 0;

  for name in names:
    cookie.append(name[0])
  cookie.sort()

  total = cookie
  total = list(set(total))

  for match in cookie:
    if(cnt%2 == 0):
      group1.append(match)
    else:
      group2.append(match)
    cnt += 1
  
  gcnt1 = 0
  gcnt2 = 0
  for cnt in total:
    if (gcnt1 < group1.count(cnt)):
      gcnt1 = group1.count(cnt)
    if (gcnt2 < group2.count(cnt)):
      gcnt2 = group2.count(cnt)

  answer = gcnt1 * (gcnt1 -1) / 2
  answer += gcnt2 * (gcnt2 -1) / 2
  # else:
  #   answer = gcnt2 * (gcnt2 -1) / 2

  
  print(gcnt1)
  print(gcnt2)
  print(total)
  print(group2.count('w'))
  print(answer)

  return answer

solution(q)