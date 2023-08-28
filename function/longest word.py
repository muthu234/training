# Create a function that takes a list of words and returns the longest word.
def longest_word(l):
    max_length = 0
    longest_word = ""
    for word in l:
        word_length = len(word)
        if word_length > max_length:
            max_length = word_length
            longest_word = word
        return longest_word
word_list = ["college", "student", "boys"]
longest = longest_word(word_list)
print(longest)
