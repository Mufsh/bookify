from sqlalchemy.orm import Session
import models, schemas
from models import Book
from schemas import BookCreate, BookUpdate
import os

def create_book(db: Session, book: schemas.BookCreate):
    db_book = models.Book(**book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book


def get_all_books(db: Session):
    return db.query(models.Book).all()


def update_book(db: Session, book_title: str, author: str, year: int, category: str):
    db_book = db.query(Book).filter(Book.title == book_title).first()
    print(db_book.title, db_book.category, db_book.year, db_book.author)
    if db_book:
        db_book.author = author
        db_book.category = category
        db_book.year = year

        db.commit()
    return db_book


def delete_book(db: Session, title: str):
    db_book = db.query(Book).filter(Book.title == title).first()
    if db_book:
        file_path = db_book.file
        if os.path.exists(file_path):
            os.remove(file_path)
        db.delete(db_book)
        db.commit()
        return db_book
    return "Book not found in database"


def get_book(db: Session, title: str):
    db_book = db.query(Book).filter(Book.title == title).first()
    if db_book:
        return db_book
