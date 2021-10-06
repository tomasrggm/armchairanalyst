import json
import sys

def jsonReader(id):
    f = open('./controllers/jsonFolder/champion.json', encoding='utf8')
    data = json.load(f)
    champions = data['data']
    for name in champions.keys():
        if id == champions[name]['key']:
            print(champions[name]['id'])
    f.close()

jsonReader(sys.argv[1])
