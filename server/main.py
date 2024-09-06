from fastapi import FastAPI, File, UploadFile
from io import StringIO
import pandas as pd

app = FastAPI()

def csv_to_json(csv_content):
    df = pd.read_csv(StringIO(csv_content.decode('utf-8')))
    data = df.to_dict(orient='records')
    return data


@app.post("/upload/questions")
async def uploadQuestions(file: UploadFile = File(...)): 
    contents = await file.read()
    json_data = csv_to_json(contents)
    return json_data


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
