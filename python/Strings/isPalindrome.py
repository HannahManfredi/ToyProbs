msg = "hello world"
print(msg)

#GOAL: determine whether input str is a palindrome
    #palindrome = same character at every opposite index so str[0] must === str[str.length - 1] all the way to the center of the str
# input: string
# output: boolean, true if string is a palindrome

def isPalindrom(str):
    start = 0
    end = len(str) - 1

    while start < end:
        if str[start] != str[end]:
            return False
        start += 1
        end -= 1

    return True

print(isPalindrom('hannah'))
print(isPalindrom('phillip'))