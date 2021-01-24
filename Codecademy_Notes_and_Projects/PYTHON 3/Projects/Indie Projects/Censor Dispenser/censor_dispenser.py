# These are the emails you will be censoring. The open() function is opening the text file that the emails are contained in and the .read() method is allowing us to save their contexts to the following variables:
email_one = open("email_one.txt", "r").read()
email_two = open("email_two.txt", "r").read()
email_three = open("email_three.txt", "r").read()
email_four = open("email_four.txt", "r").read()

def censor1(text):
    if "learning algorithms" in text:
        censored_text = text.replace("learning algorithms", "*** ***")
    return censored_text

# print(censor1(email_one))

def censor2(text):
    proprietary_terms = ["she", "personality matrix", "sense of self", "self-preservation", "learning algorithm", "her", "herself"]

    for term in proprietary_terms:
        if term in text:
            censored_text2 = text.replace(term, "*** ***")
            print(censored_text2)
    return censored_text2

# print(email_two)