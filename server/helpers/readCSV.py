import pandas as pd
import json

def createInmemoryDB(filePath):
    file = pd.read_csv(filePath)
    data = file.to_dict(orient='records')
    json_string = json.dumps(data, indent=2)
    return json_string
