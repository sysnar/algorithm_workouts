/**
 *renewalMenu
 * @param {string[]} orders
 * @param {number[]} course
 */
export function renewalMenu(orders, courses) {
  let orderCombination = {};
  let candidate = {};
  let maxNumber = new Array(10).fill(0);

  function combination(menus, startIndex, courseLength, newCourse) {
    if (courseLength === 0) {
      orderCombination[newCourse] = (orderCombination[newCourse] || 0) + 1;
      if (orderCombination[newCourse] > 1) {
        candidate[newCourse] = orderCombination[newCourse];
      }
      maxNumber[newCourse.length] = Math.max(maxNumber[newCourse.length], orderCombination[newCourse]);
      return;
    }

    for (let i = startIndex; i < menus.length; i++) {
      combination(menus, i + 1, courseLength - 1, newCourse + menus[i]);
    }
  }

  for (let order of orders) {
    let menus = order.split("").sort();
    for (let course of courses) {
      combination(menus, 0, course, "");
    }
  }

  const result = Object.keys(candidate).filter((newCourse) => {
    console.log(newCourse, candidate[newCourse], candidate[newCourse] === maxNumber[newCourse.length]);
    return candidate[newCourse] === maxNumber[newCourse.length];
  });

  return result.sort();
}
