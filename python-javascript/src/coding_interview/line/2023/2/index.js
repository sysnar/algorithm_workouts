// @ts-check

/**
 * 1. 아이디어
 *  - 트라이 자료구조에 사전의 값을 다 넣는다.
 *  - 채팅이 트라이 탐색 결과에 있는지 찾는다.
 *    - 이대 .일 경우 1 ~ k개 만큼 들어가본 뒤 결과값이 있는지 찾는다.
 * 2. 시간복잡도
 * 3. 자료구조
 *  - 트라이 자료구조
 */
/**
 * @param {number} k
 * @param {string[]} dic
 * @param {string} chat
 */
export function solution(k, dic, chat) {
  const myTrie = new Trie(k);
  myTrie.insert("slang");
  myTrie.insert("badword");

  console.log(myTrie.search("slan"));
  console.log(myTrie.search("slang"));
  console.log(myTrie.search(".lang"));
  console.log(myTrie.search(".adword"));
  console.log(myTrie.search(".ang"));
}

function isSlang() {}

class Node {
  constructor(value = "") {
    this.value = value; //현재 경로까지의 누적값
    this.end = false; //해당 노드에서 끝나는 문자열이 있는지 여부
    this.child = {}; //자식
  }
}

class Trie {
  constructor(k) {
    this.root = new Node();
    this.k = k;
  }

  insert(string) {
    let currentNode = this.root; //루트노드를 시작으로 탐색하면서 삽입한다

    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];

      //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(currentNode.value + currentChar);
      }

      currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
    }
    currentNode.end = true; //해당 노드에서 끝나는 단어가 있음을 알린다
  }

  search(string) {
    let currentNode = this.root; //역시나 시작은 루트

    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      // 최대 1 ~ k 번째 만큼 무시하고 지나갈 수 있음
      // 다음 노드(string[i+1])가 node.child에 있다면?
      // 다음 노드가 node.child.child에 있다면 현재 노드로 바꿔준다
      if (currentChar === ".") {
        const nextChar = string[i + 1];
        currentNode = this.temp(currentNode, nextChar);
        i++;
      }
      // 반드시 포함하고 있어야함
      else {
        if (currentNode.child[currentChar]) {
          currentNode = currentNode.child[currentChar]; // 있으면 노드 이동
        } else {
          return "";
        }
      }
    }
    //찾는 문자열의 마지막까지 탐색했다는것은, 문자열을 찾았다는 것.
    return currentNode.value;
  }

  temp(compareNode, nextChar) {
    for (let j = 0; j < this.k; j++) {
      let childNodes = compareNode.child;

      // 자식 깊이 결정
      for (let m = 0; m < j; m++) {
        console.log(compareNode.child);

        // 자식 확인
        for (let val in childNodes) {
          console.log(childNodes[val]);
          // childNodes = compareNode[val].child;
        }
        // childNodes = childNodes.c;

        // for (let val in childNodes) {
        //   if (compareNode[val].child[nextChar]) {
        //     return compareNode[val].child[nextChar];
        //   }
        // }
      }
    }
  }
}
