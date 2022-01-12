q= [-5, 5]

def solution(snowballs):
  answer = []
  roundRun = True
  ballNum = 0;
  endballNum = len(snowballs)-1;
  # for ballNum in range(len(q)-2):
  while roundRun:    
    print('------')
    print('round::', ballNum)
    print('roundEnd::', endballNum)
    print(snowballs)
    print(snowballs[ballNum])

    if (snowballs[ballNum + 1] < 0):
      if(snowballs[ballNum] == abs(snowballs[ballNum+1])):
        print('ballNum' ,snowballs[ballNum])
        print('ballNum' ,snowballs[ballNum+1])
        snowballs.pop(ballNum)
        snowballs.pop(ballNum)
        print(snowballs)
        ballNum -= 2
        endballNum -= 2
      else:
        if (snowballs[ballNum] > abs(snowballs[ballNum+1])):
          snowballs.pop(ballNum+1)
          ballNum -= 1
          endballNum -= 1
        else:
          snowballs.pop(ballNum)
          ballNum -= 1
          endballNum -= 1
    
    ballNum += 1
    if (ballNum == endballNum):
      ballNum = 0

    endCheck = 0
    endCheckFinal = 0
    print(snowballs)
    for check in snowballs:
      endCheck += check
      endCheckFinal += abs(check)
      print('endCheck', endCheck)
      print('endCheckFinal', endCheckFinal)
    if(endCheck == endCheckFinal):
      print("ENDDDDD")
      roundRun = False
      answer = snowballs
      break
  
  return answer

print(solution(q))