num_of_word = [
  [1, 1, 6, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 2, 1, 3, 2, 5, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 2, 1, 3, 2, 5, 4, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 1, 3, 2, 5, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 2, 1, 3, 2, 5, 4, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 2, 1, 1, 2, 5, 3, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 2, 1, 1, 2, 5, 4, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 1, 1, 2, 5, 3, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 2, 1, 1, 2, 5, 4, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 2, 1, 1, 3, 5, 1, 2, 2, 5, 2, 3, 3, 1, 2, 4, 3],
  [1, 1, 6, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 1, 1, 3, 5, 1, 2, 2, 5, 2, 3, 3, 1, 2, 4, 3],
  [1, 1, 6, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 2, 1, 1, 4, 5, 1, 2, 2, 5, 2, 3, 3, 1, 2, 4, 3],
  [1, 1, 6, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 2, 1, 1, 4, 5, 1, 2, 2, 5, 2, 3, 3, 1, 2, 4, 3],
  [1, 1, 6, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 4, 1, 4, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 4, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 4, 1, 4, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 4, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 3, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 5, 1, 1, 3, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 3, 4, 5],
  [1, 1, 6, 2, 4, 1, 4, 3, 1, 5, 4, 1, 2, 1, 2, 1, 3, 3, 5, 1, 1, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 4, 1, 4, 3, 1, 5, 4, 1, 2, 1, 2, 1, 1, 3, 5, 1, 3, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 4, 3, 4, 5, 4, 1, 2, 1, 2, 1, 3, 3, 5, 1, 1, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 4, 3, 4, 5, 4, 1, 2, 1, 2, 1, 1, 3, 5, 1, 3, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 4, 1, 3, 3, 1, 5, 4, 1, 2, 1, 2, 1, 3, 4, 5, 1, 1, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 4, 1, 3, 3, 1, 5, 4, 1, 2, 1, 2, 1, 1, 4, 5, 1, 3, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 3, 3, 4, 5, 4, 1, 2, 1, 2, 1, 3, 4, 5, 1, 1, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 3, 3, 4, 5, 4, 1, 2, 1, 2, 1, 1, 4, 5, 1, 3, 3, 2, 2, 2, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 4, 1, 4, 3, 1, 5, 4, 1, 2, 1, 2, 1, 3, 3, 5, 2, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 4, 1, 4, 3, 1, 5, 4, 1, 2, 1, 2, 1, 1, 3, 5, 2, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 4, 3, 4, 5, 4, 1, 2, 1, 2, 1, 3, 3, 5, 2, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 4, 3, 4, 5, 4, 1, 2, 1, 2, 1, 1, 3, 5, 2, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 4, 1, 3, 3, 1, 5, 4, 1, 2, 1, 2, 1, 3, 4, 5, 2, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 4, 1, 3, 3, 1, 5, 4, 1, 2, 1, 2, 1, 1, 4, 5, 2, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 3, 3, 4, 5, 4, 1, 2, 1, 2, 1, 3, 4, 5, 2, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 1, 6, 2, 1, 1, 3, 3, 4, 5, 4, 1, 2, 1, 2, 1, 1, 4, 5, 2, 3, 2, 1, 2, 3, 3, 1, 2, 4, 5],
  [1, 2, 6, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 5, 4, 1, 4, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 5, 1, 1, 4, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 5, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 5, 1, 1, 3, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 3, 4, 5],
  [1, 2, 6, 2, 4, 1, 4, 3, 1, 5, 4, 1, 2, 1, 2, 1, 3, 3, 5, 1, 1, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 2, 6, 2, 4, 1, 4, 3, 1, 5, 4, 1, 2, 1, 2, 1, 1, 3, 5, 1, 3, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 2, 6, 2, 4, 1, 3, 3, 1, 5, 4, 1, 2, 1, 2, 1, 3, 4, 5, 1, 1, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 2, 6, 2, 4, 1, 3, 3, 1, 5, 4, 1, 2, 1, 2, 1, 1, 4, 5, 1, 3, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 2, 6, 2, 1, 1, 4, 3, 4, 5, 4, 1, 2, 1, 2, 1, 3, 3, 5, 1, 1, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 2, 6, 2, 1, 1, 4, 3, 4, 5, 4, 1, 2, 1, 2, 1, 1, 3, 5, 1, 3, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 2, 6, 2, 1, 1, 3, 3, 4, 5, 4, 1, 2, 1, 2, 1, 3, 4, 5, 1, 1, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 2, 6, 2, 1, 1, 3, 3, 4, 5, 4, 1, 2, 1, 2, 1, 1, 4, 5, 1, 3, 3, 1, 2, 2, 3, 1, 2, 4, 5],
  [1, 3, 6, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 3, 6, 5, 4, 1, 4, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 3, 6, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 3, 6, 5, 1, 1, 4, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 3, 6, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 3, 6, 5, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 3, 6, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 3, 6, 5, 1, 1, 3, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 2, 1, 2, 3, 2, 1, 2, 4, 5],
  [1, 1, 1, 5, 4, 5, 4, 3, 1, 2, 4, 1, 1, 1, 2, 1, 1, 3, 5, 1, 2, 3, 2, 2, 2, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 4, 5, 3, 3, 1, 2, 4, 1, 1, 1, 2, 1, 1, 4, 5, 1, 2, 3, 2, 2, 2, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 1, 5, 4, 3, 4, 2, 4, 1, 1, 1, 2, 1, 1, 3, 5, 1, 2, 3, 2, 2, 2, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 1, 5, 3, 3, 4, 2, 4, 1, 1, 1, 2, 1, 1, 4, 5, 1, 2, 3, 2, 2, 2, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 4, 5, 4, 3, 1, 2, 4, 1, 1, 1, 2, 1, 1, 3, 5, 2, 2, 2, 1, 2, 3, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 4, 5, 3, 3, 1, 2, 4, 1, 1, 1, 2, 1, 1, 4, 5, 2, 2, 2, 1, 2, 3, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 1, 5, 4, 3, 4, 2, 4, 1, 1, 1, 2, 1, 1, 3, 5, 2, 2, 2, 1, 2, 3, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 1, 5, 3, 3, 4, 2, 4, 1, 1, 1, 2, 1, 1, 4, 5, 2, 2, 2, 1, 2, 3, 3, 2, 6, 4, 3],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 1, 1, 2, 2, 1, 2, 5, 1, 3, 3, 2, 1, 2, 3, 2, 6, 4, 5],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 1, 1, 2, 2, 3, 2, 5, 1, 1, 3, 2, 1, 2, 3, 2, 6, 4, 5],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 1, 1, 2, 2, 1, 2, 5, 2, 3, 2, 1, 1, 3, 3, 2, 6, 4, 5],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 1, 1, 2, 2, 3, 2, 5, 2, 1, 2, 1, 1, 3, 3, 2, 6, 4, 5],
  [1, 2, 1, 5, 4, 5, 4, 3, 1, 2, 4, 1, 1, 1, 2, 1, 1, 3, 5, 1, 2, 3, 1, 2, 2, 3, 2, 6, 4, 3],
  [1, 2, 1, 5, 4, 5, 3, 3, 1, 2, 4, 1, 1, 1, 2, 1, 1, 4, 5, 1, 2, 3, 1, 2, 2, 3, 2, 6, 4, 3],
  [1, 2, 1, 5, 1, 5, 4, 3, 4, 2, 4, 1, 1, 1, 2, 1, 1, 3, 5, 1, 2, 3, 1, 2, 2, 3, 2, 6, 4, 3],
  [1, 2, 1, 5, 1, 5, 3, 3, 4, 2, 4, 1, 1, 1, 2, 1, 1, 4, 5, 1, 2, 3, 1, 2, 2, 3, 2, 6, 4, 3],
  [1, 2, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 1, 1, 2, 2, 1, 2, 5, 1, 3, 3, 1, 1, 2, 3, 2, 6, 4, 5],
  [1, 2, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 1, 1, 2, 2, 3, 2, 5, 1, 1, 3, 1, 1, 2, 3, 2, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 4, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 3, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 4, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 1, 1, 3, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 4, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 2, 2, 2, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 4, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 3, 5, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 2, 2, 2, 1, 2, 3, 2, 1, 6, 4, 5],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 2, 1, 2, 5, 1, 3, 3, 2, 1, 2, 3, 1, 6, 4, 5],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 2, 1, 2, 5, 2, 3, 2, 1, 1, 3, 3, 1, 6, 4, 5],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 2, 3, 2, 5, 1, 1, 3, 2, 1, 2, 3, 1, 6, 4, 5],
  [1, 1, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 2, 3, 2, 5, 2, 1, 2, 1, 1, 3, 3, 1, 6, 4, 5],
  [1, 2, 3, 5, 1, 1, 3, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 3, 5, 1, 1, 4, 3, 4, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 3, 5, 4, 1, 3, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 3, 5, 4, 1, 4, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 3, 5, 1, 1, 3, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 3, 5, 1, 1, 4, 1, 4, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 3, 5, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 4, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 3, 5, 4, 1, 4, 1, 1, 2, 4, 1, 2, 1, 3, 1, 3, 3, 5, 1, 2, 3, 1, 2, 2, 2, 1, 6, 4, 5],
  [1, 2, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 2, 1, 2, 5, 1, 3, 3, 1, 1, 2, 3, 1, 6, 4, 5],
  [1, 2, 1, 5, 3, 1, 4, 3, 4, 2, 4, 1, 2, 1, 2, 2, 3, 2, 5, 1, 1, 3, 1, 1, 2, 3, 1, 6, 4, 5],
]
words = [
  "planet",
  "animal",
  "star trek",
  "beans",
  "swede",
  "doctor",
  "root",
  "sphere",
  "bjorn",
  "hook",
  "venus",
  "god",
  "house",
  "vulcan",
  "ball",
  "alien",
  "melon",
  "vegetable",
  "candy",
  "cook",
  "fruit",
  "eagle",
  "muppet",
  "borg",
  "coin",
  "pig",
  "building",
  "captain",
  "neptune",
  "honeydew",
]

  console.log(num_of_word.map( (nums) => nums.map( (num, i) => words[i][num-1] ).join('') ).join('\n'));
