from fastapi import FastAPI, File, UploadFile, Form
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import shutil
import crud, models, database, schemas, summary

DIR = "files"
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/addbook")
async def add_book(title: str = Form(...), author: str = Form(...), year: int = Form(...), file: Optional[UploadFile] = None, db:Session = Depends(get_db) ):
    print("Here here")
    print(title, author, year)
    file_location = f"{DIR}/{file.filename}"
    with open(file_location, "wb") as pdf:
        shutil.copyfileobj(file.file, pdf)
    category = summary.generate_category(file_location)
    db_book = models.Book(title=title,author=author, year=year, category = category, file = file_location)
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return {"success": True, "File saved successfully": "True"}



@app.post("/books/")
def create_book(book: schemas.BookCreate, db: Session = Depends(get_db)):
    output = crud.create_book(db=db, book=book)
    print(output)
    return {"success": True}



@app.get("/api/viewall/")
def read_books(db: Session = Depends(get_db)):
    all_books = crud.get_all_books(db=db)
    return {"success": True, "data": all_books}


@app.put("/books/update")
def update_book(title: str = Form(...), author: str = Form(...), year: int = Form(...), category: str = Form(...), db: Session = Depends(get_db) ):
    updated_book = crud.update_book(db=db, book_title=title, author = author, year = year, category = category)
    print("Here here here")
    if updated_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return {"success": True, "message": "Updated book details","book": update_book}

@app.delete("/books/delete/{title}")
def delete_book(title: str, db: Session = Depends(get_db)):
    print("title:", title)
    response = crud.delete_book(db = db, title = title)
    return {"message": response}

@app.get("/books/generate-summary/{title}")
def generate_summary(title: str, db: Session = Depends(get_db)):
    generated_summary = summary.generate_summary(title)
    return {"success": True, "summary": generated_summary}
    
