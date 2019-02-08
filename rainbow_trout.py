import matplotlib.pyplot as plt
 
labels = ['2014', '2015', '2016', '2017', '2018']
sizes = [17.02, 25.53, 19.15, 8.51, 29.97]
colors = ['#5d7031', '#9bbc49', '#deae56', '#7f5b21', '#8c7f6b']
patches, texts = plt.pie(sizes, colors=colors, shadow=True, startangle=90)
plt.title('Rainbow Trout Eggs Hatched/Released')
plt.legend(patches, labels, loc="Rainbow Trout Eggs Hatched/Released")
plt.axis('equal')
plt.tight_layout()
plt.show()