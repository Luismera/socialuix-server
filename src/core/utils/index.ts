export const makeAlphanumeric = (
  latters_length: number,
  numbers_length: number,
) => {
  var result = '';
  // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var characters_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var characters_numbers = '0123456789';
  var charactersLettersLength = characters_letters.length;
  var charactersNumbersLength = characters_numbers.length;
  for (var i = 0; i < latters_length; i++) {
    result += characters_letters.charAt(
      Math.floor(Math.random() * charactersLettersLength),
    );
  }
  for (var i = 0; i < numbers_length; i++) {
    result += characters_numbers.charAt(
      Math.floor(Math.random() * charactersNumbersLength),
    );
  }
  return result;
};

export const listToTree = (list: Array<any>) => {
  var map: any = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i]._id] = i; // initialize the map
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];

    if (node.parent !== '0') {
      // if you have dangling branches check that map[node.parent] exists
      if (map[node.parent] !== undefined) {
        list[map[node.parent]].children.push(node);
      }
    } else {
      roots.push(node);
    }
  }

  return roots;
};
