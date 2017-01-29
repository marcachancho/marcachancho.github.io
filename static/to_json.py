import json

f = open('coa.txt', 'r')

dictonary = []
for line in f:
    word_value = line.split(' - ')
    word = word_value[0]
    value = word_value[1].strip()

    dictonary.append({
        'word': word,
        'definition': value,
    })

with open('coa.json', 'w') as outfile:
    json.dump(dictonary, outfile, ensure_ascii=False)
