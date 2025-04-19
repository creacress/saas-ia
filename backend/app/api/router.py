from fastapi import APIRouter, UploadFile, File
from app.tasks.celery_worker import dummy_task, train_model_task
import polars as pl
from io import BytesIO
router = APIRouter()

@router.get("/ping")
def ping():
    return {"msg": "pong"}

@router.post("/run-task")
def run_task():
    task = dummy_task.delay()
    return {"task_id": task.id, "status": "task launched"}

@router.post("/train-model")
def launch_training():
    task = train_model_task.delay()
    return {"task_id": task.id, "status": "training launched"}

@router.post("/upload-csv")
async def upload_csv(file: UploadFile = File(...)):
    content = await file.read()
    df = pl.read_csv(BytesIO(content))  # Polars lit en streaming
    return {
        "rows": df.height,
        "columns": df.columns
    }

@router.post("/preview-dataset")
async def preview_dataset(file: UploadFile = File(...)):
    content = await file.read()
    df = pl.read_csv(BytesIO(content))

    nulls = {k: int(v) for k, v in df.null_count().to_dict().items()}  # ✅ converti les Series
    dtypes = {col: str(df[col].dtype) for col in df.columns}
    describe = df.describe().to_dict(as_series=False)  # ✅ dict pur

    return {
        "shape": df.shape,
        "columns": df.columns,
        "nulls": nulls,
        "types": dtypes,
        "describe": describe
    }
