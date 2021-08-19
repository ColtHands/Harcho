import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf

dftrain = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/train.csv') # training data
dfeval = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/eval.csv') # testing data
y_train = dftrain.pop('survived')
y_eval = dfeval.pop('survived')

print(dftrain.head())
print(dftrain.shape)

dftrain.age.hist(bins=20)

plt.show()