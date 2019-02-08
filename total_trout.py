import matplotlib.pyplot as plt
 
labels = ['2014', '2015', '2016', '2017', '2018']
sizes = [17.86, 22.62, 19.05, 13.10, 27.38]
colors = ['#5d7031', '#9bbc49', '#deae56', '#7f5b21', '#8c7f6b']
patches, texts = plt.pie(sizes, colors=colors, shadow=True, startangle=90)
plt.title('Total Trout Eggs Hatched/Released')
plt.legend(patches, labels, loc="Total Trout Eggs Hatched/Released")
plt.axis('equal')
plt.tight_layout()
plt.show()