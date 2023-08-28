# # d={[2,3,4,[{abc:['soundar',{[c:'g']}}]}]}
# d = [{'ss': [{'ff': [1,2,3,4, 'soundar', { 'jj': [ {'ee': [0,1,2,3,{'soundar1': 1}]}]}]}]}]
# print(d[0]['ss'][0]['ff'][5]['jj'][0]['ee'][4]['soundar1'])
# # ['ff'][4]
def sum(a,b): 
    c=a+b
    def add(c):
        return sum
sum(10,20)