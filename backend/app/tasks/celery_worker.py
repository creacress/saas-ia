from celery import Celery
from ml.training import train_and_log_model
celery = Celery("worker", broker="redis://redis:6379/0")

@celery.task
def dummy_task():
    return "I'm alive 🚀"

@celery.task
def train_model_task():
    acc = train_and_log_model()
    return f"Training done ✅ | Accuracy: {acc:.4f}"