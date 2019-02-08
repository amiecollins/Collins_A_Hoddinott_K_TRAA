import matplotlib.pyplot as plt
 
labels = ['2014', '2015', '2016', '2017', '2018']
sizes = [18.92, 18.92, 18.92, 18.92, 24.32]
colors = ['#5d7031', '#9bbc49', '#deae56', '#7f5b21', '#8c7f6b']
patches, texts = plt.pie(sizes, colors=colors, shadow=True, startangle=90)
plt.title('Brown Trout Eggs Hatched/Released')
plt.legend(patches, labels, loc="Total Trout Eggs Hatched/Released")
plt.axis('equal')
plt.tight_layout()
plt.show()