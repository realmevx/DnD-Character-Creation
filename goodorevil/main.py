import os

from flask import Flask, request
from transformers import AutoModelForSequenceClassification, MarianTokenizer
from transformers import TFAutoModelForSequenceClassification
from transformers import AutoTokenizer
import numpy as np
import torch as torch
from scipy.special import softmax
import csv
import urllib.request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])
def translate_text():
    text = request.data.decode('utf8')
    print(text)

    return translate(text)

def translate(data):
    # PT
    print(data)
    model = AutoModelForSequenceClassification.from_pretrained(MODEL)
    model.save_pretrained(MODEL)
    tokenizer.save_pretrained(MODEL)

    text = preprocess(data)
    encoded_input = tokenizer(text, return_tensors='pt')
    output = model(**encoded_input)
    scores = output[0][0].detach().numpy()
    scores = softmax(scores)

    ranking = np.argsort(scores)
    ranking = ranking[::-1]

    for i in range(scores.shape[0]):
        l = labels[ranking[i]]
        s = scores[ranking[i]]
        print(f"{i + 1}) {l} {np.round(float(s), 4)}")


    if (scores[2] >= scores[1] and scores[0]):
        return "Good"
    elif (scores[0] >= scores[1] and scores[2]):
        return "Evil"
    else:
        return "Neutral"


# Preprocess text (username and link placeholders)
def preprocess(data):
    new_text = []

    for t in data.split(" "):
        t = '@user' if t.startswith('@') and len(t) > 1 else t
        t = 'http' if t.startswith('http') else t
        new_text.append(t)
    return " ".join(new_text)


# Tasks:
# emoji, emotion, hate, irony, offensive, sentiment
# stance/abortion, stance/atheism, stance/climate, stance/feminist, stance/hillary

task = 'sentiment'
MODEL = f"cardiffnlp/twitter-roberta-base-{task}"

tokenizer = AutoTokenizer.from_pretrained(MODEL)

# download label mapping
labels = []
mapping_link = f"https://raw.githubusercontent.com/cardiffnlp/tweeteval/main/datasets/{task}/mapping.txt"
with urllib.request.urlopen(mapping_link) as f:
    html = f.read().decode('utf-8').split("\n")
    csvreader = csv.reader(html, delimiter='\t')
labels = [row[1] for row in csvreader if len(row) > 1]



if __name__ == '__main__':
    app.run(debug=True, host="localhost")