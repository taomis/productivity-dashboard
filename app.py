from fastapi import FastAPI, Request, Depends, Form, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from db import Base, async_session, engine
from db_model import Todo

templates = Jinja2Templates(directory='templates')

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

async def get_data():
    async with async_session() as db:
        yield db

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
async def home(request: Request, db: AsyncSession = Depends(get_data)):
    result = await db.execute(select(Todo))
    todos = result.scalars().all()
    return templates.TemplateResponse("index.html", {"request": request, "todo_list": todos})

@app.post("/add")
async def add(request: Request, title: str = Form(...), db: AsyncSession = Depends(get_data)):
    new_todo = Todo(title=title)
    db.add(new_todo)
    await db.commit()

    url = app.url_path_for("home")
    return RedirectResponse(url=url, status_code=status.HTTP_303_SEE_OTHER)

@app.get("/delete/{todo_id}")
async def delete(request: Request, todo_id: int, db: AsyncSession = Depends(get_data)):
    todo = await db.get(Todo, todo_id)
    await db.delete(todo)
    await db.commit()

    url = app.url_path_for("home")
    return RedirectResponse(url=url, status_code=status.HTTP_302_FOUND)
