//GOAL: find the number of distinct groups from input data
//Group = all of the people who know each other
//non-subscriber a receives gift book from subscriber b and subscriber c
//we can infer that a, b and c are connected
//a, b and c form a group

//relationships are transitive ie if 0 knows 1 and 1 knows 2, 0 knows 2
//INPUT MATRIX:
//   012
// 0 110
// 1 110
// 2 001

//row = subscriber
//M[i][j]

//INPUT: array of strings of binary digits that represents connections between people
//OUTPUT: an integer that represents the number of groups of people
